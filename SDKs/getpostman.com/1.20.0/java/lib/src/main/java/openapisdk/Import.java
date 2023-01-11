package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class Import {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Import(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * importExportedData - Import exported data
     *
     * This endpoint allows you to import your exported Postman data.
     * For more information about how you can export your data, refer <a href="https://go.postman.co/me/export">Export your Postman data.</a>
     * 
     * On successful imports, the response will be an array with Each element contaning `id`, `name` and `uid` of entities created.
     * 
     * **Note**: Refer to examples for different scenarios.
     * 
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header.
    **/
    public openapisdk.models.operations.ImportExportedDataResponse importExportedData(openapisdk.models.operations.ImportExportedDataRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/import/exported");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ImportExportedDataResponse res = new openapisdk.models.operations.ImportExportedDataResponse() {{
            importExportedData200ApplicationJSONObject = null;
            importExportedData400ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ImportExportedData200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ImportExportedData200ApplicationJson.class);
                res.importExportedData200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ImportExportedData400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ImportExportedData400ApplicationJson.class);
                res.importExportedData400ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * importExternalApiSpecification - Import external API specification
     *
     * This endpoint allows you to import external API specifications into Postman.
     * 
     * Currently, this endpoint only supports the <a href="https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md">OpenAPI</a> specification, for which the `importType` will be `openapi`.
     * 
     * On a successful import, the response will be an array with each element contaning `id`, `name` and `uid` of entities created.
     * 
     * Supported `type`s:
     * 
     * - string
     * - json
     * - file
     * 
     * The `input` parameter should be defined based on the `type`.
     * 
     * > To import a file, request body must be form-data with `type` param set to `file`.
     * 
     * **Note**: Refer to examples for different scenarios.
     * 
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header.
    **/
    public openapisdk.models.operations.ImportExternalApiSpecificationResponse importExternalApiSpecification(openapisdk.models.operations.ImportExternalApiSpecificationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/import/openapi");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ImportExternalApiSpecificationResponse res = new openapisdk.models.operations.ImportExternalApiSpecificationResponse() {{
            importExternalApiSpecification200ApplicationJSONObject = null;
            importExternalApiSpecification400ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ImportExternalApiSpecification200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ImportExternalApiSpecification200ApplicationJson.class);
                res.importExternalApiSpecification200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ImportExternalApiSpecification400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ImportExternalApiSpecification400ApplicationJson.class);
                res.importExternalApiSpecification400ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}