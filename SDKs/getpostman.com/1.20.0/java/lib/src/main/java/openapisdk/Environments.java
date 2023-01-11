package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class Environments {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Environments(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * allEnvironments - All Environments
     *
     * The `/environments` endpoint returns a list of all [environments](https://www.getpostman.com/docs/environments) that belong to you..
     * 
     * The response contains an array of environments' information containing the `name`, `id`, `owner` and `uid` of each environment.
     * 
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    public openapisdk.models.operations.AllEnvironmentsResponse allEnvironments() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/environments");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AllEnvironmentsResponse res = new openapisdk.models.operations.AllEnvironmentsResponse() {{
            allEnvironments200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.AllEnvironments200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AllEnvironments200ApplicationJson.class);
                res.allEnvironments200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * createEnvironment - Create Environment
     *
     * A sample body is added to the request that conforms to the following JSON schema:
     * 
     * ```json
     * {
     *   "type": "object",
     *   "properties": {
     *     "environment": {
     *       "type": "object",
     *       "properties": {
     *         "name": {
     *               "type": "string",
     *               "maxLength": 254,
     *               "minLength": 1
     *             },
     *         "values": {
     *           "type": "array",
     *           "maxItems": 100,
     *           "additionalItems": false,
     *           "items": {
     *               "type": "object",
     *               "properties": {
     *                 "key": {
     *                   "type": "string",
     *                   "maxLength": 254
     *                   "minLength": 1
     *                 },
     *                 "value": { "type": "string" },
     *                 "enabled": { "type": "boolean" }
     *               },
     *               "required": ["key", "value"]
     *             }
     *         }
     *       },
     *       "required": ["name"]
     *     }
     *   },
     *   "required": ["environment"]
     * }
     * ```
     * 
     * On successful creation of the environment, the API returns the environment name and `id`.
     * 
     * You can also specify the context of a workspace to create an environment in directly by passing the `workspace` as a query param.
     * 
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    public openapisdk.models.operations.CreateEnvironmentResponse createEnvironment(openapisdk.models.operations.CreateEnvironmentRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/environments");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateEnvironmentResponse res = new openapisdk.models.operations.CreateEnvironmentResponse() {{
            createEnvironment200ApplicationJSONObject = null;
            createEnvironment400ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CreateEnvironment200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CreateEnvironment200ApplicationJson.class);
                res.createEnvironment200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CreateEnvironment400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CreateEnvironment400ApplicationJson.class);
                res.createEnvironment400ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteEnvironment - Delete Environment
     *
     * This endpoint allows you to delete a single environment based on an environment's unique `uid`.
     * 
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    public openapisdk.models.operations.DeleteEnvironmentResponse deleteEnvironment(openapisdk.models.operations.DeleteEnvironmentRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/environments/{environment_uid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteEnvironmentResponse res = new openapisdk.models.operations.DeleteEnvironmentResponse() {{
            deleteEnvironment200ApplicationJSONObject = null;
            deleteEnvironment404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.DeleteEnvironment200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.DeleteEnvironment200ApplicationJson.class);
                res.deleteEnvironment200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.DeleteEnvironment404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.DeleteEnvironment404ApplicationJson.class);
                res.deleteEnvironment404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * singleEnvironment - Single Environment
     *
     * Access the contents of an environment that is accessible to you using its unique id (`uid`).
     * 
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    public openapisdk.models.operations.SingleEnvironmentResponse singleEnvironment(openapisdk.models.operations.SingleEnvironmentRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/environments/{environment_uid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.SingleEnvironmentResponse res = new openapisdk.models.operations.SingleEnvironmentResponse() {{
            singleEnvironment200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.SingleEnvironment200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.SingleEnvironment200ApplicationJson.class);
                res.singleEnvironment200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateEnvironment - Update Environment
     *
     * This endpoint replaces an existing environment.
     * 
     * A sample body is added to the request that conforms to the following JSON schema:
     * 
     * ```json
     * {
     * 	"type": "object",
     * 	"properties": {
     * 		"environment": {
     * 			"type": "object",
     * 			"properties": {
     * 				"name": {
     * 					"type": "string",
     * 					"maxLength": 254,
     * 					"minLength": 1
     * 				},
     * 				"values": {
     * 					"type": "array",
     * 					"maxItems": 100,
     * 					"additionalItems": false,
     * 					"items": {
     * 						"type": "object",
     * 						"properties": {
     * 							"key": {
     * 								"type": "string",
     * 								"maxLength": 254,
     * 								"minLength": 1
     * 							},
     * 							"value": {
     * 								"type": "string",
     * 								"maxLength": 254,
     * 								"minLength": 1
     * 							},
     * 							"type": {
     * 								"type": "string"
     * 							},
     * 							"enabled": {
     * 								"type": "boolean"
     * 							}
     * 						},
     * 						"required": [
     * 							"key",
     * 							"value"
     * 						]
     * 					}
     * 				}
     * 			}
     * 		}
     * 	},
     * 	"required": [
     * 		"environment"
     * 	]
     * }
     * ```
     * 
     * On successful updation of the environment, the API returns the environment name and `id`.
     * 
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    public openapisdk.models.operations.UpdateEnvironmentResponse updateEnvironment(openapisdk.models.operations.UpdateEnvironmentRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/environments/{environment_uid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateEnvironmentResponse res = new openapisdk.models.operations.UpdateEnvironmentResponse() {{
            updateEnvironment200ApplicationJSONObject = null;
            updateEnvironment400ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.UpdateEnvironment200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.UpdateEnvironment200ApplicationJson.class);
                res.updateEnvironment200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.UpdateEnvironment400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.UpdateEnvironment400ApplicationJson.class);
                res.updateEnvironment400ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}