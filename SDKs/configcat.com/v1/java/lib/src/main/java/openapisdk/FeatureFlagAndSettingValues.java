package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class FeatureFlagAndSettingValues {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public FeatureFlagAndSettingValues(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getSettingValue - Get value
     *
     * This endpoint returns the value of a Feature Flag or Setting 
     * in a specified Environment identified by the `environmentId` parameter.
     * 
     * The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.
     * The `value` represents what the clients will get when the evaluation requests of our SDKs 
     * are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.
     * 
     * The `rolloutRules` and `percentageRules` attributes are representing the current 
     * Targeting and Percentage Rules configuration of the actual Feature Flag or Setting 
     * in an **ordered** collection, which means the order of the returned rules is matching to the
     * evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).
    **/
    public openapisdk.models.operations.GetSettingValueResponse getSettingValue(openapisdk.models.operations.GetSettingValueRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/environments/{environmentId}/settings/{settingId}/value", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSettingValueResponse res = new openapisdk.models.operations.GetSettingValueResponse() {{
            settingValueModelHaljson = null;
            settingValueModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/hal+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SettingValueModelHaljson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SettingValueModelHaljson.class);
                res.settingValueModelHaljson = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SettingValueModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SettingValueModel.class);
                res.settingValueModel = out;
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
     * getSettingValues - Get values
     *
     * This endpoint returns the value of a specified Config's Feature Flags or Settings identified by the `configId` parameter
     * in a specified Environment identified by the `environmentId` parameter.
     * 
     * The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.
     * The `value` represents what the clients will get when the evaluation requests of our SDKs 
     * are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.
     * 
     * The `rolloutRules` and `percentageRules` attributes are representing the current 
     * Targeting and Percentage Rules configuration of the actual Feature Flag or Setting 
     * in an **ordered** collection, which means the order of the returned rules is matching to the
     * evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).
    **/
    public openapisdk.models.operations.GetSettingValuesResponse getSettingValues(openapisdk.models.operations.GetSettingValuesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/configs/{configId}/environments/{environmentId}/values", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSettingValuesResponse res = new openapisdk.models.operations.GetSettingValuesResponse() {{
            configSettingValuesModel = null;
            configSettingValuesModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/hal+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConfigSettingValuesModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConfigSettingValuesModel.class);
                res.configSettingValuesModel = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConfigSettingValuesModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConfigSettingValuesModel.class);
                res.configSettingValuesModel = out;
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
     * replaceSettingValue - Replace value
     *
     * This endpoint replaces the whole value of a Feature Flag or Setting in a specified Environment.
     * 
     * Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.
     * 
     * **Important:** As this endpoint is doing a complete replace, it's important to set every other attribute that you don't 
     * want to change in its original state. Not listing one means that it will reset.
     * 
     * For example: We have the following resource.
     * ```
     * {
     * 	"rolloutPercentageItems": [
     * 		{
     * 			"percentage": 30,
     * 			"value": true
     * 		},
     * 		{
     * 			"percentage": 70,
     * 			"value": false
     * 		}
     * 	],
     * 	"rolloutRules": [],
     * 	"value": false
     * }
     * ```
     * If we send a replace request body as below:
     * ```
     * {
     * 	"value": true
     * }
     * ```
     * Then besides that the default value is set to `true`, all the Percentage Rules are deleted. 
     * So we get a response like this:
     * ```
     * {
     * 	"rolloutPercentageItems": [],
     * 	"rolloutRules": [],
     * 	"value": true
     * }
     * ```
    **/
    public openapisdk.models.operations.ReplaceSettingValueResponse replaceSettingValue(openapisdk.models.operations.ReplaceSettingValueRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/environments/{environmentId}/settings/{settingId}/value", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ReplaceSettingValueResponse res = new openapisdk.models.operations.ReplaceSettingValueResponse() {{
            settingValueModelHaljson = null;
            settingValueModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/hal+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SettingValueModelHaljson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SettingValueModelHaljson.class);
                res.settingValueModelHaljson = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SettingValueModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SettingValueModel.class);
                res.settingValueModel = out;
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
     * updateSettingValue - Update value
     *
     * This endpoint updates the value of a Feature Flag or Setting 
     * with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Environment.
     * 
     * Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.
     * 
     * The advantage of using JSON Patch is that you can describe individual update operations on a resource
     * without touching attributes that you don't want to change. It supports collection reordering, so it also 
     * can be used for reordering the targeting rules of a Feature Flag or Setting.
     * 
     * For example: We have the following resource.
     * ```
     * {
     * 	"rolloutPercentageItems": [
     * 		{
     * 			"percentage": 30,
     * 			"value": true
     * 		},
     * 		{
     * 			"percentage": 70,
     * 			"value": false
     * 		}
     * 	],
     * 	"rolloutRules": [],
     * 	"value": false
     * }
     * ```
     * If we send an update request body as below:
     * ```
     * [
     * 	{
     * 		"op": "replace",
     * 		"path": "/value",
     * 		"value": true
     * 	}
     * ]
     * ```
     * Only the default value is going to be set to `true` and all the Percentage Rules are remaining unchanged.
     * So we get a response like this:
     * ```
     * {
     * 	"rolloutPercentageItems": [
     * 		{
     * 			"percentage": 30,
     * 			"value": true
     * 		},
     * 		{
     * 			"percentage": 70,
     * 			"value": false
     * 		}
     * 	],
     * 	"rolloutRules": [],
     * 	"value": true
     * }
     * ```
    **/
    public openapisdk.models.operations.UpdateSettingValueResponse updateSettingValue(openapisdk.models.operations.UpdateSettingValueRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/environments/{environmentId}/settings/{settingId}/value", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateSettingValueResponse res = new openapisdk.models.operations.UpdateSettingValueResponse() {{
            settingValueModelHaljson = null;
            settingValueModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/hal+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SettingValueModelHaljson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SettingValueModelHaljson.class);
                res.settingValueModelHaljson = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SettingValueModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SettingValueModel.class);
                res.settingValueModel = out;
            }
        }
        else if (httpRes.statusCode() == 204) {
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