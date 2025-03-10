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

/**
 * With these endpoints you can manage your Feature Flags or Settings within a Config. 
 * However you can't use them for manipulating the values of your Feature Flags and Settings,
 * to do that please visit the [Feature Flag &amp; Setting values using SDK Key](#tag/Feature-Flag-and-Setting-values-using-SDK-Key)
 * and [Feature Flag &amp; Setting values](#tag/Feature-Flag-and-Setting-values) sections of the API.
 * 
 * For using these endpoints, first you have to select which Config you want to work with by its `configId` 
 * which can be obtained from the [List Configs](#operation/get-configs) endpoint. 
 * Then you can use it to create new Feature Flags or to get information about existing ones.
 * 
 * Then you can obtain the `settingId` or `key` of your desired Feature Flag or Setting 
 * to use them for further operations in this API. 
 * 
 * &lt;a href="https://configcat.com/docs/main-concepts/#setting" target="_blank" rel="noopener noreferrer"&gt;Here&lt;/a&gt; you can read more about the concept of Settings.
 */
public class FeatureFlagsAndSettings {
	
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public FeatureFlagsAndSettings(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}

    /**
     * Create Flag
     * This endpoint creates a new Feature Flag or Setting in a specified Config
     * identified by the `configId` parameter.
     * 
     * **Important:** The `key` attribute must be unique within the given Config.
     * @param request the request object containing all of the parameters for the API call
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.CreateSettingResponse createSetting(org.openapis.openapi.models.operations.CreateSettingRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.CreateSettingRequest.class, baseUrl, "/v1/configs/{configId}/settings", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "createSettingInitialValues", "json");
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.CreateSettingResponse res = new org.openapis.openapi.models.operations.CreateSettingResponse(contentType, httpRes.statusCode()) {{
            settingModelHaljson = null;
            settingModel = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 201) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/hal+json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.SettingModelHaljson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.SettingModelHaljson.class);
                res.settingModelHaljson = out;
            }
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.SettingModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.SettingModel.class);
                res.settingModel = out;
            }
        }
        else if (httpRes.statusCode() == 400 || httpRes.statusCode() == 401 || httpRes.statusCode() == 404 || httpRes.statusCode() == 429) {
        }

        return res;
    }

    /**
     * Delete Flag
     * This endpoint removes a Feature Flag or Setting from a specified Config, 
     * identified by the `configId` parameter.
     * @param request the request object containing all of the parameters for the API call
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.DeleteSettingResponse deleteSetting(org.openapis.openapi.models.operations.DeleteSettingRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.DeleteSettingRequest.class, baseUrl, "/v1/settings/{settingId}", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.DeleteSettingResponse res = new org.openapis.openapi.models.operations.DeleteSettingResponse(contentType, httpRes.statusCode()) {{
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 204 || httpRes.statusCode() == 400 || httpRes.statusCode() == 401 || httpRes.statusCode() == 404 || httpRes.statusCode() == 429) {
        }

        return res;
    }

    /**
     * Get Flag
     * This endpoint returns the metadata attributes of a Feature Flag or Setting 
     * identified by the `settingId` parameter.
     * @param request the request object containing all of the parameters for the API call
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.GetSettingResponse getSetting(org.openapis.openapi.models.operations.GetSettingRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.GetSettingRequest.class, baseUrl, "/v1/settings/{settingId}", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.GetSettingResponse res = new org.openapis.openapi.models.operations.GetSettingResponse(contentType, httpRes.statusCode()) {{
            settingModelHaljson = null;
            settingModel = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/hal+json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.SettingModelHaljson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.SettingModelHaljson.class);
                res.settingModelHaljson = out;
            }
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.SettingModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.SettingModel.class);
                res.settingModel = out;
            }
        }
        else if (httpRes.statusCode() == 400 || httpRes.statusCode() == 401 || httpRes.statusCode() == 404 || httpRes.statusCode() == 429) {
        }

        return res;
    }

    /**
     * List Flags
     * This endpoint returns the list of the Feature Flags and Settings defined in a 
     * specified Config, identified by the `configId` parameter.
     * @param request the request object containing all of the parameters for the API call
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.GetSettingsResponse getSettings(org.openapis.openapi.models.operations.GetSettingsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.GetSettingsRequest.class, baseUrl, "/v1/configs/{configId}/settings", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.GetSettingsResponse res = new org.openapis.openapi.models.operations.GetSettingsResponse(contentType, httpRes.statusCode()) {{
            settingModelHaljsons = null;
            settingModels = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/hal+json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.SettingModelHaljson[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.SettingModelHaljson[].class);
                res.settingModelHaljsons = out;
            }
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.SettingModel[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.SettingModel[].class);
                res.settingModels = out;
            }
        }
        else if (httpRes.statusCode() == 400 || httpRes.statusCode() == 401 || httpRes.statusCode() == 404 || httpRes.statusCode() == 429) {
        }

        return res;
    }

    /**
     * Update Flag
     * This endpoint updates the metadata of a Feature Flag or Setting 
     * with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Config.
     * 
     * Only the `name`, `hint` and `tags` attributes are modifiable by this endpoint.
     * The `tags` attribute is a simple collection of the [tag IDs](#operation/get-tags) attached to the given setting.
     * 
     * The advantage of using JSON Patch is that you can describe individual update operations on a resource
     * without touching attributes that you don't want to change.
     * 
     * For example: We have the following resource.
     * ```
     * {
     * 	"settingId": 5345,
     * 	"key": "myGrandFeature",
     * 	"name": "Tihs is a naem with soem typos.",
     * 	"hint": "This flag controls my grandioso feature.",
     * 	"settingType": "boolean",
     * 	"tags": [
     * 		{
     * 			"tagId": 0,
     * 			"name": "sample tag",
     * 			"color": "whale"
     * 		}
     * 	]
     * }
     * ```
     * If we send an update request body as below (it changes the name and adds the already existing tag with the id 2):
     * ```
     * [
     * 	{
     * 		"op": "replace",
     * 		"path": "/name",
     * 		"value": "This is the name without typos."
     * 	},
     * 	{
     * 		"op": "add",
     * 		"path": "/tags/-",
     * 		"value": 2
     * 	}
     * ]
     * ```
     * Only the `name` and `tags` are going to be updated and all the other attributes are remaining unchanged.
     * So we get a response like this:
     * ```
     * {
     * 	"settingId": 5345,
     * 	"key": "myGrandFeature",
     * 	"name": "This is the name without typos.",
     * 	"hint": "This flag controls my grandioso feature.",
     * 	"settingType": "boolean",
     * 	"tags": [
     * 		{
     * 			"tagId": 0,
     * 			"name": "sample tag",
     * 			"color": "whale"
     * 		},
     * 		{
     * 			"tagId": 2,
     * 			"name": "another tag",
     * 			"color": "koala"
     * 		}
     * 	]
     * }
     * ```
     * @param request the request object containing all of the parameters for the API call
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.UpdateSettingResponse updateSetting(org.openapis.openapi.models.operations.UpdateSettingRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.UpdateSettingRequest.class, baseUrl, "/v1/settings/{settingId}", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "jsonPatchInput", "json");
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.UpdateSettingResponse res = new org.openapis.openapi.models.operations.UpdateSettingResponse(contentType, httpRes.statusCode()) {{
            settingModelHaljson = null;
            settingModel = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/hal+json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.SettingModelHaljson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.SettingModelHaljson.class);
                res.settingModelHaljson = out;
            }
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.SettingModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.SettingModel.class);
                res.settingModel = out;
            }
        }
        else if (httpRes.statusCode() == 400 || httpRes.statusCode() == 401 || httpRes.statusCode() == 404 || httpRes.statusCode() == 429) {
        }

        return res;
    }
}