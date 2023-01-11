package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class Relations {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Relations(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * createRelations - Create relations
     *
     * This call allows you to add existing Postman entities as new relations to an API. The request body should contain the relations to be created along with an array of entity IDs. 
     * 
     * <table>
     *   <tr>
     *     <th>Relation</th>
     *     <th>Entity ID type</th>
     *   <tr>
     *   <tr>
     *     <td>contracttest</td>
     *     <td>Collection UIDs</td>
     *   </tr>
     *   <tr>
     *     <td>integrationtest</td>
     *     <td>Collection UIDs</td>
     *   </tr>
     *   <tr>
     *     <td>documentation</td>
     *     <td>Collection UIDs</td>
     *   </tr>
     *   <tr>
     *     <td>testsuite</td>
     *     <td>Collection UIDs</td>
     *   </tr>
     *   <tr>
     *     <td>environment</td>
     *     <td>Environment UIDs</td>
     *   </tr>
     *   <tr>
     *     <td>mock</td>
     *     <td>Mock IDs</td>
     *   </tr>
     *   <tr>
     *     <td>monitor</td>
     *     <td>Monitor IDs</td>
     *   </tr>
     * </table>
     * 
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    public openapisdk.models.operations.CreateRelationsResponse createRelations(openapisdk.models.operations.CreateRelationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/apis/{apiId}/versions/{apiVersionId}/relations", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateRelationsResponse res = new openapisdk.models.operations.CreateRelationsResponse() {{
            createRelations200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CreateRelations200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CreateRelations200ApplicationJson.class);
                res.createRelations200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getContractTestRelations - Get contract test relations
     *
     * This call fetches all the relations by type which are linked to the specified API version along with their details.
     * 
     * The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
     * 
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    public openapisdk.models.operations.GetContractTestRelationsResponse getContractTestRelations(openapisdk.models.operations.GetContractTestRelationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/apis/{apiId}/versions/{apiVersionId}/contracttest", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetContractTestRelationsResponse res = new openapisdk.models.operations.GetContractTestRelationsResponse() {{
            getContractTestRelations200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetContractTestRelations200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetContractTestRelations200ApplicationJson.class);
                res.getContractTestRelations200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDocumentationRelations - Get  documentation relations
     *
     * This call fetches all the relations by type which are linked to the specified API version along with their details.
     * 
     * The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
     * 
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    public openapisdk.models.operations.GetDocumentationRelationsResponse getDocumentationRelations(openapisdk.models.operations.GetDocumentationRelationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/apis/{apiId}/versions/{apiVersionId}/documentation", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDocumentationRelationsResponse res = new openapisdk.models.operations.GetDocumentationRelationsResponse() {{
            getDocumentationRelations200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetDocumentationRelations200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetDocumentationRelations200ApplicationJson.class);
                res.getDocumentationRelations200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getEnvironmentRelations - Get environment relations
     *
     * This call fetches all the relations by type which are linked to the specified API version along with their details.
     * 
     * The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
     * 
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    public openapisdk.models.operations.GetEnvironmentRelationsResponse getEnvironmentRelations(openapisdk.models.operations.GetEnvironmentRelationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/apis/{apiId}/versions/{apiVersionId}/environment", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetEnvironmentRelationsResponse res = new openapisdk.models.operations.GetEnvironmentRelationsResponse() {{
            getEnvironmentRelations200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetEnvironmentRelations200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetEnvironmentRelations200ApplicationJson.class);
                res.getEnvironmentRelations200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getIntegrationTestRelations - Get integration test relations
     *
     * This call fetches all the relations by type which are linked to the specified API version along with their details.
     * 
     * The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
     * 
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    public openapisdk.models.operations.GetIntegrationTestRelationsResponse getIntegrationTestRelations(openapisdk.models.operations.GetIntegrationTestRelationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/apis/{apiId}/versions/{apiVersionId}/integrationtest", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetIntegrationTestRelationsResponse res = new openapisdk.models.operations.GetIntegrationTestRelationsResponse() {{
            getIntegrationTestRelations200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetIntegrationTestRelations200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetIntegrationTestRelations200ApplicationJson.class);
                res.getIntegrationTestRelations200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getLinkedRelations - Get linked relations
     *
     * This call fetches all the relations which are linked to the specified API version along with their details.
     * 
     * The response will contain a `relations` object which lists all the relation types which are linked to the API version. Each of the relation type will be an object which details the relations of this type. 
     * 
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    public openapisdk.models.operations.GetLinkedRelationsResponse getLinkedRelations(openapisdk.models.operations.GetLinkedRelationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/apis/{apiId}/versions/{apiVersionId}/relations", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetLinkedRelationsResponse res = new openapisdk.models.operations.GetLinkedRelationsResponse() {{
            getLinkedRelations200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetLinkedRelations200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetLinkedRelations200ApplicationJson.class);
                res.getLinkedRelations200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getMonitorRelations - Get monitor relations
     *
     * This call fetches all the relations by type which are linked to the specified API version along with their details.
     * 
     * The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
     * 
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    public openapisdk.models.operations.GetMonitorRelationsResponse getMonitorRelations(openapisdk.models.operations.GetMonitorRelationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/apis/{apiId}/versions/{apiVersionId}/monitor", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMonitorRelationsResponse res = new openapisdk.models.operations.GetMonitorRelationsResponse() {{
            getMonitorRelations200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetMonitorRelations200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetMonitorRelations200ApplicationJson.class);
                res.getMonitorRelations200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getTestSuiteRelations - Get test suite relations
     *
     * This call fetches all the relations by type which are linked to the specified API version along with their details.
     * 
     * The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.
     * 
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    public openapisdk.models.operations.GetTestSuiteRelationsResponse getTestSuiteRelations(openapisdk.models.operations.GetTestSuiteRelationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/apis/{apiId}/versions/{apiVersionId}/testsuite", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTestSuiteRelationsResponse res = new openapisdk.models.operations.GetTestSuiteRelationsResponse() {{
            getTestSuiteRelations200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTestSuiteRelations200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTestSuiteRelations200ApplicationJson.class);
                res.getTestSuiteRelations200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * syncRelationsWithSchema - Sync relations with schema
     *
     * This call allows you to keep the relation in sync with the API schema.
     * 
     * 
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    public openapisdk.models.operations.SyncRelationsWithSchemaResponse syncRelationsWithSchema(openapisdk.models.operations.SyncRelationsWithSchemaRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/apis/{apiId}/versions/{apiVersionId}/{entityType}/{entityId}/syncWithSchema", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.SyncRelationsWithSchemaResponse res = new openapisdk.models.operations.SyncRelationsWithSchemaResponse() {{
            syncRelationsWithSchema200ApplicationJSONObject = null;
            syncRelationsWithSchema400ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.SyncRelationsWithSchema200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.SyncRelationsWithSchema200ApplicationJson.class);
                res.syncRelationsWithSchema200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.SyncRelationsWithSchema400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.SyncRelationsWithSchema400ApplicationJson.class);
                res.syncRelationsWithSchema400ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}