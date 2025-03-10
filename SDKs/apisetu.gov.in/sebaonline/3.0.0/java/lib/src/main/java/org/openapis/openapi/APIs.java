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

public class APIs {
	
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public APIs(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}

    /**
     * Class X Marksheet
     * API to verify Class X Marksheet.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.SscerResponse sscer(org.openapis.openapi.models.operations.SscerRequestBody request, org.openapis.openapi.models.operations.SscerSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(baseUrl, "/sscer/certificate");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "request", "json");
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.SscerResponse res = new org.openapis.openapi.models.operations.SscerResponse(contentType, httpRes.statusCode()) {{
            sscer400ApplicationJSONObject = null;
            sscer401ApplicationJSONObject = null;
            sscer404ApplicationJSONObject = null;
            sscer500ApplicationJSONObject = null;
            sscer502ApplicationJSONObject = null;
            sscer503ApplicationJSONObject = null;
            sscer504ApplicationJSONObject = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.operations.Sscer400ApplicationJSON out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.operations.Sscer400ApplicationJSON.class);
                res.sscer400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.operations.Sscer401ApplicationJSON out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.operations.Sscer401ApplicationJSON.class);
                res.sscer401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.operations.Sscer404ApplicationJSON out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.operations.Sscer404ApplicationJSON.class);
                res.sscer404ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.operations.Sscer500ApplicationJSON out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.operations.Sscer500ApplicationJSON.class);
                res.sscer500ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 502) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.operations.Sscer502ApplicationJSON out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.operations.Sscer502ApplicationJSON.class);
                res.sscer502ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 503) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.operations.Sscer503ApplicationJSON out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.operations.Sscer503ApplicationJSON.class);
                res.sscer503ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 504) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.operations.Sscer504ApplicationJSON out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.operations.Sscer504ApplicationJSON.class);
                res.sscer504ApplicationJSONObject = out;
            }
        }

        return res;
    }
}