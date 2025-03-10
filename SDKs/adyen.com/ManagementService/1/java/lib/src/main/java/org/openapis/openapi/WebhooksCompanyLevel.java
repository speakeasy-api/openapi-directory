/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;
import org.openapis.openapi.utils.HTTPClient;
import org.openapis.openapi.utils.HTTPRequest;
import org.openapis.openapi.utils.JSON;
import org.openapis.openapi.utils.SerializedBody;

public class WebhooksCompanyLevel {
	
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public WebhooksCompanyLevel(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}

    /**
     * Remove a webhook
     * Remove the configuration for the webhook identified in the path.
     * 
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API\u2014Webhooks read and write
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.DeleteCompaniesCompanyIdWebhooksWebhookIdResponse deleteCompaniesCompanyIdWebhooksWebhookId(org.openapis.openapi.models.operations.DeleteCompaniesCompanyIdWebhooksWebhookIdRequest request, org.openapis.openapi.models.operations.DeleteCompaniesCompanyIdWebhooksWebhookIdSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.DeleteCompaniesCompanyIdWebhooksWebhookIdRequest.class, baseUrl, "/companies/{companyId}/webhooks/{webhookId}", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.DeleteCompaniesCompanyIdWebhooksWebhookIdResponse res = new org.openapis.openapi.models.operations.DeleteCompaniesCompanyIdWebhooksWebhookIdResponse(contentType, httpRes.statusCode()) {{
            restServiceError = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 400 || httpRes.statusCode() == 401 || httpRes.statusCode() == 403 || httpRes.statusCode() == 422 || httpRes.statusCode() == 500) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.RestServiceError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.RestServiceError.class);
                res.restServiceError = out;
            }
        }

        return res;
    }

    /**
     * List all webhooks
     * Lists all webhook configurations for the company account.
     * 
     * To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API\u2014Webhooks read
     * * Management API\u2014Webhooks read and write
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.GetCompaniesCompanyIdWebhooksResponse getCompaniesCompanyIdWebhooks(org.openapis.openapi.models.operations.GetCompaniesCompanyIdWebhooksRequest request, org.openapis.openapi.models.operations.GetCompaniesCompanyIdWebhooksSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.GetCompaniesCompanyIdWebhooksRequest.class, baseUrl, "/companies/{companyId}/webhooks", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.GetCompaniesCompanyIdWebhooksRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.GetCompaniesCompanyIdWebhooksResponse res = new org.openapis.openapi.models.operations.GetCompaniesCompanyIdWebhooksResponse(contentType, httpRes.statusCode()) {{
            listWebhooksResponse = null;
            restServiceError = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.ListWebhooksResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.ListWebhooksResponse.class);
                res.listWebhooksResponse = out;
            }
        }
        else if (httpRes.statusCode() == 400 || httpRes.statusCode() == 401 || httpRes.statusCode() == 403 || httpRes.statusCode() == 422 || httpRes.statusCode() == 500) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.RestServiceError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.RestServiceError.class);
                res.restServiceError = out;
            }
        }

        return res;
    }

    /**
     * Get a webhook
     * Returns the configuration for the webhook identified in the path.
     * 
     * To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API\u2014Webhooks read
     * * Management API\u2014Webhooks read and write
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.GetCompaniesCompanyIdWebhooksWebhookIdResponse getCompaniesCompanyIdWebhooksWebhookId(org.openapis.openapi.models.operations.GetCompaniesCompanyIdWebhooksWebhookIdRequest request, org.openapis.openapi.models.operations.GetCompaniesCompanyIdWebhooksWebhookIdSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.GetCompaniesCompanyIdWebhooksWebhookIdRequest.class, baseUrl, "/companies/{companyId}/webhooks/{webhookId}", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.GetCompaniesCompanyIdWebhooksWebhookIdResponse res = new org.openapis.openapi.models.operations.GetCompaniesCompanyIdWebhooksWebhookIdResponse(contentType, httpRes.statusCode()) {{
            webhook = null;
            restServiceError = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.Webhook out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.Webhook.class);
                res.webhook = out;
            }
        }
        else if (httpRes.statusCode() == 400 || httpRes.statusCode() == 401 || httpRes.statusCode() == 403 || httpRes.statusCode() == 422 || httpRes.statusCode() == 500) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.RestServiceError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.RestServiceError.class);
                res.restServiceError = out;
            }
        }

        return res;
    }

    /**
     * Update a webhook
     * Make changes to the configuration of the webhook identified in the path. The request contains the new values you want to have in the webhook configuration. The response contains the full configuration for the webhook, which includes the new values from the request.
     * 
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API\u2014Webhooks read and write
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.PatchCompaniesCompanyIdWebhooksWebhookIdResponse patchCompaniesCompanyIdWebhooksWebhookId(org.openapis.openapi.models.operations.PatchCompaniesCompanyIdWebhooksWebhookIdRequest request, org.openapis.openapi.models.operations.PatchCompaniesCompanyIdWebhooksWebhookIdSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.PatchCompaniesCompanyIdWebhooksWebhookIdRequest.class, baseUrl, "/companies/{companyId}/webhooks/{webhookId}", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "updateCompanyWebhookRequest", "json");
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.PatchCompaniesCompanyIdWebhooksWebhookIdResponse res = new org.openapis.openapi.models.operations.PatchCompaniesCompanyIdWebhooksWebhookIdResponse(contentType, httpRes.statusCode()) {{
            webhook = null;
            restServiceError = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.Webhook out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.Webhook.class);
                res.webhook = out;
            }
        }
        else if (httpRes.statusCode() == 400 || httpRes.statusCode() == 401 || httpRes.statusCode() == 403 || httpRes.statusCode() == 422 || httpRes.statusCode() == 500) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.RestServiceError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.RestServiceError.class);
                res.restServiceError = out;
            }
        }

        return res;
    }

    /**
     * Set up a webhook
     * Subscribe to receive webhook notifications about events related to your company account. You can add basic authentication to make sure the data is secure.
     * 
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API\u2014Webhooks read and write
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.PostCompaniesCompanyIdWebhooksResponse postCompaniesCompanyIdWebhooks(org.openapis.openapi.models.operations.PostCompaniesCompanyIdWebhooksRequest request, org.openapis.openapi.models.operations.PostCompaniesCompanyIdWebhooksSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.PostCompaniesCompanyIdWebhooksRequest.class, baseUrl, "/companies/{companyId}/webhooks", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "createCompanyWebhookRequest", "json");
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.PostCompaniesCompanyIdWebhooksResponse res = new org.openapis.openapi.models.operations.PostCompaniesCompanyIdWebhooksResponse(contentType, httpRes.statusCode()) {{
            webhook = null;
            restServiceError = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.Webhook out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.Webhook.class);
                res.webhook = out;
            }
        }
        else if (httpRes.statusCode() == 400 || httpRes.statusCode() == 401 || httpRes.statusCode() == 403 || httpRes.statusCode() == 422 || httpRes.statusCode() == 500) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.RestServiceError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.RestServiceError.class);
                res.restServiceError = out;
            }
        }

        return res;
    }

    /**
     * Generate an HMAC key
     * Returns an [HMAC key](https://en.wikipedia.org/wiki/HMAC) for the webhook identified in the path. This key allows you to check the integrity and the origin of the notifications you receive.By creating an HMAC key, you start receiving [HMAC-signed notifications](https://docs.adyen.com/development-resources/webhooks/verify-hmac-signatures#enable-hmac-signatures) from Adyen. Find out more about how to [verify HMAC signatures](https://docs.adyen.com/development-resources/webhooks/verify-hmac-signatures).
     * 
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API\u2014Webhooks read and write
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacResponse postCompaniesCompanyIdWebhooksWebhookIdGenerateHmac(org.openapis.openapi.models.operations.PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacRequest request, org.openapis.openapi.models.operations.PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacRequest.class, baseUrl, "/companies/{companyId}/webhooks/{webhookId}/generateHmac", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacResponse res = new org.openapis.openapi.models.operations.PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacResponse(contentType, httpRes.statusCode()) {{
            generateHmacKeyResponse = null;
            restServiceError = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.GenerateHmacKeyResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.GenerateHmacKeyResponse.class);
                res.generateHmacKeyResponse = out;
            }
        }
        else if (httpRes.statusCode() == 400 || httpRes.statusCode() == 401 || httpRes.statusCode() == 403 || httpRes.statusCode() == 422 || httpRes.statusCode() == 500) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.RestServiceError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.RestServiceError.class);
                res.restServiceError = out;
            }
        }

        return res;
    }

    /**
     * Test a webhook
     * Sends sample notifications to test if the webhook is set up correctly.
     * 
     * We send sample notifications for maximum 20 of the merchant accounts that the webhook is configured for. If the webhook is configured for more than 20 merchant accounts, use the `merchantIds` array to specify a subset of the merchant accounts for which to send test notifications.
     * 
     * We send four test notifications for each event code you choose. They cover success and failure scenarios for the hard-coded currencies EUR and GBP, regardless of the currencies configured in the merchant accounts. For custom notifications, we only send the specified custom notification.
     * 
     * The response describes the result of the test. The `status` field tells you if the test was successful or not. You can use the other response fields to troubleshoot unsuccessful tests.
     * 
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API\u2014Webhooks read and write
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.PostCompaniesCompanyIdWebhooksWebhookIdTestResponse postCompaniesCompanyIdWebhooksWebhookIdTest(org.openapis.openapi.models.operations.PostCompaniesCompanyIdWebhooksWebhookIdTestRequest request, org.openapis.openapi.models.operations.PostCompaniesCompanyIdWebhooksWebhookIdTestSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.PostCompaniesCompanyIdWebhooksWebhookIdTestRequest.class, baseUrl, "/companies/{companyId}/webhooks/{webhookId}/test", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "testCompanyWebhookRequest", "json");
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.PostCompaniesCompanyIdWebhooksWebhookIdTestResponse res = new org.openapis.openapi.models.operations.PostCompaniesCompanyIdWebhooksWebhookIdTestResponse(contentType, httpRes.statusCode()) {{
            testWebhookResponse = null;
            restServiceError = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.TestWebhookResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.TestWebhookResponse.class);
                res.testWebhookResponse = out;
            }
        }
        else if (httpRes.statusCode() == 400 || httpRes.statusCode() == 401 || httpRes.statusCode() == 403 || httpRes.statusCode() == 422 || httpRes.statusCode() == 500) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.RestServiceError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.RestServiceError.class);
                res.restServiceError = out;
            }
        }

        return res;
    }
}