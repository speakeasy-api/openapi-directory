/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import org.openapis.openapi.utils.HTTPClient;
import org.openapis.openapi.utils.HTTPRequest;
import org.openapis.openapi.utils.JSON;
import org.openapis.openapi.utils.SerializedBody;
import org.openapis.openapi.utils.SpeakeasyHTTPClient;

/**
 * &lt;fullname&gt;AWS Marketplace Entitlement Service&lt;/fullname&gt; &lt;p&gt;This reference provides descriptions of the AWS Marketplace Entitlement Service API.&lt;/p&gt; &lt;p&gt;AWS Marketplace Entitlement Service is used to determine the entitlement of a customer to a given product. An entitlement represents capacity in a product owned by the customer. For example, a customer might own some number of users or seats in an SaaS application or some amount of data capacity in a multi-tenant database.&lt;/p&gt; &lt;p&gt; &lt;b&gt;Getting Entitlement Records&lt;/b&gt; &lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;p&gt; &lt;i&gt;GetEntitlements&lt;/i&gt;- Gets the entitlements for a Marketplace product.&lt;/p&gt; &lt;/li&gt; &lt;/ul&gt;
 * https://docs.aws.amazon.com/marketplace/ - Amazon Web Services documentation
 */
public class SDK {
	/**
	 * SERVERS contains the list of server urls available to the SDK.
	 */
	public static final String[] SERVERS = {
        /**
         * The AWS Marketplace Entitlement Service multi-region endpoint
         */
        "http://entitlement.marketplace.{region}.amazonaws.com",
        /**
         * The AWS Marketplace Entitlement Service multi-region endpoint
         */
        "https://entitlement.marketplace.{region}.amazonaws.com",
        /**
         * The AWS Marketplace Entitlement Service endpoint for China (Beijing) and China (Ningxia)
         */
        "http://entitlement.marketplace.{region}.amazonaws.com.cn",
        /**
         * The AWS Marketplace Entitlement Service endpoint for China (Beijing) and China (Ningxia)
         */
        "https://entitlement.marketplace.{region}.amazonaws.com.cn",
	};
	
  		

	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private org.openapis.openapi.models.shared.Security _security;
	private String _serverUrl;
	private String _language = "java";
	private String _sdkVersion = "0.0.1";
	private String _genVersion = "internal";
	/**
	 * The Builder class allows the configuration of a new instance of the SDK.
	 */
	public static class Builder {
		private HTTPClient client;
		private org.openapis.openapi.models.shared.Security security;
		private String serverUrl;
		private java.util.Map<String, String> params = new java.util.HashMap<String, String>();

		private Builder() {
		}

		/**
		 * Allows the default HTTP client to be overridden with a custom implementation.
		 * @param client The HTTP client to use for all requests.
		 * @return The builder instance.
		 */
		public Builder setClient(HTTPClient client) {
			this.client = client;
			return this;
		}
		
		/**
		 * Configures the SDK to use the provided security details.
		 * @param security The security details to use for all requests.
		 * @return The builder instance.
		 */
		public Builder setSecurity(org.openapis.openapi.models.shared.Security security) {
			this.security = security;
			return this;
		}
		
		/**
		 * Allows the overriding of the default server URL.
		 * @param serverUrl The server URL to use for all requests.
		 * @return The builder instance.
		 */
		public Builder setServerURL(String serverUrl) {
			this.serverUrl = serverUrl;
			return this;
		}
		
		/**
		 * Allows the overriding of the default server URL  with a templated URL populated with the provided parameters.
		 * @param serverUrl The server URL to use for all requests.
		 * @param params The parameters to use when templating the URL.
		 * @return The builder instance.
		 */
		public Builder setServerURL(String serverUrl, java.util.Map<String, String> params) {
			this.serverUrl = serverUrl;
			this.params = params;
			return this;
		}
		
		/**
		 * Builds a new instance of the SDK.
		 * @return The SDK instance.
		 * @throws Exception Thrown if the SDK could not be built.
		 */
		public SDK build() throws Exception {
			return new SDK(this.client, this.security, this.serverUrl, this.params);
		}
	}

	/**
	 * Get a new instance of the SDK builder to configure a new instance of the SDK.
	 * @return The SDK builder instance.
	 */
	public static Builder builder() {
		return new Builder();
	}

	private SDK(HTTPClient client, org.openapis.openapi.models.shared.Security security, String serverUrl, java.util.Map<String, String> params) throws Exception {
		this._defaultClient = client;
		
		if (this._defaultClient == null) {
			this._defaultClient = new SpeakeasyHTTPClient();
		}
		
		if (security != null) {
			this._security = security;
			this._securityClient = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, this._security);
		}
		
		if (this._securityClient == null) {
			this._securityClient = this._defaultClient;
		}

		if (serverUrl != null && !serverUrl.isBlank()) {
			this._serverUrl = org.openapis.openapi.utils.Utils.templateUrl(serverUrl, params);
		}
		
		if (this._serverUrl == null) {
			this._serverUrl = SERVERS[0];
		}

		if (this._serverUrl.endsWith("/")) {
            this._serverUrl = this._serverUrl.substring(0, this._serverUrl.length() - 1);
        }

		
	}

    /**
     * GetEntitlements retrieves entitlement values for a given product. The results can be filtered based on customer identifier or product dimensions.
     * @param request the request object containing all of the parameters for the API call
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.GetEntitlementsResponse getEntitlements(org.openapis.openapi.models.operations.GetEntitlementsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(baseUrl, "/#X-Amz-Target=AWSMPEntitlementService.GetEntitlements");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "getEntitlementsRequest", "json");
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        java.util.Map<String, java.util.List<String>> headers = org.openapis.openapi.utils.Utils.getHeaders(request);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.GetEntitlementsResponse res = new org.openapis.openapi.models.operations.GetEntitlementsResponse(contentType, httpRes.statusCode()) {{
            getEntitlementsResult = null;
            invalidParameterException = null;
            throttlingException = null;
            internalServiceErrorException = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.GetEntitlementsResult out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.GetEntitlementsResult.class);
                res.getEntitlementsResult = out;
            }
        }
        else if (httpRes.statusCode() == 480) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.InvalidParameterException out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.InvalidParameterException.class);
                res.invalidParameterException = out;
            }
        }
        else if (httpRes.statusCode() == 481) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.ThrottlingException out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.ThrottlingException.class);
                res.throttlingException = out;
            }
        }
        else if (httpRes.statusCode() == 482) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.InternalServiceErrorException out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.InternalServiceErrorException.class);
                res.internalServiceErrorException = out;
            }
        }

        return res;
    }
}