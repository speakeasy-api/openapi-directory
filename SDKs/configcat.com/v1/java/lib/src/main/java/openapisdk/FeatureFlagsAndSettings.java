package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

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
     * createSetting - Create Flag
     *
     * This endpoint creates a new Feature Flag or Setting in a specified Config
     * identified by the `configId` parameter.
     * 
     * **Important:** The `key` attribute must be unique within the given Config.
    **/
    public openapisdk.models.operations.CreateSettingResponse createSetting(openapisdk.models.operations.CreateSettingRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/configs/{configId}/settings", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateSettingResponse res = new openapisdk.models.operations.CreateSettingResponse() {{
            settingModelHaljson = null;
            settingModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/hal+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SettingModelHaljson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SettingModelHaljson.class);
                res.settingModelHaljson = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SettingModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SettingModel.class);
                res.settingModel = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 429) {
        }

        return res;
    }
	
	
    /**
     * deleteSetting - Delete Flag
     *
     * This endpoint removes a Feature Flag or Setting from a specified Config, 
     * identified by the `configId` parameter.
    **/
    public openapisdk.models.operations.DeleteSettingResponse deleteSetting(openapisdk.models.operations.DeleteSettingRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/settings/{settingId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSettingResponse res = new openapisdk.models.operations.DeleteSettingResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 429) {
        }

        return res;
    }
	
	
    /**
     * getSetting - Get Flag
     *
     * This endpoint returns the metadata attributes of a Feature Flag or Setting 
     * identified by the `settingId` parameter.
    **/
    public openapisdk.models.operations.GetSettingResponse getSetting(openapisdk.models.operations.GetSettingRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/settings/{settingId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSettingResponse res = new openapisdk.models.operations.GetSettingResponse() {{
            settingModelHaljson = null;
            settingModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/hal+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SettingModelHaljson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SettingModelHaljson.class);
                res.settingModelHaljson = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SettingModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SettingModel.class);
                res.settingModel = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 429) {
        }

        return res;
    }
	
	
    /**
     * getSettings - List Flags
     *
     * This endpoint returns the list of the Feature Flags and Settings defined in a 
     * specified Config, identified by the `configId` parameter.
    **/
    public openapisdk.models.operations.GetSettingsResponse getSettings(openapisdk.models.operations.GetSettingsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/configs/{configId}/settings", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSettingsResponse res = new openapisdk.models.operations.GetSettingsResponse() {{
            settingModelHaljsons = null;
            settingModels = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/hal+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SettingModelHaljson[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SettingModelHaljson[].class);
                res.settingModelHaljsons = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SettingModel[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SettingModel[].class);
                res.settingModels = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 429) {
        }

        return res;
    }
	
	
    /**
     * updateSetting - Update Flag
     *
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
    **/
    public openapisdk.models.operations.UpdateSettingResponse updateSetting(openapisdk.models.operations.UpdateSettingRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/settings/{settingId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateSettingResponse res = new openapisdk.models.operations.UpdateSettingResponse() {{
            settingModelHaljson = null;
            settingModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/hal+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SettingModelHaljson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SettingModelHaljson.class);
                res.settingModelHaljson = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SettingModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SettingModel.class);
                res.settingModel = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 429) {
        }

        return res;
    }
	
}