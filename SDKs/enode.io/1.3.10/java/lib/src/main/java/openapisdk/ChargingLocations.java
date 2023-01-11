package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class ChargingLocations {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public ChargingLocations(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteCharginglocationsCharginglocationid - Delete Charging Location
     *
     * Delete a Charging Location
    **/
    public openapisdk.models.operations.DeleteCharginglocationsCharginglocationidResponse deleteCharginglocationsCharginglocationid(openapisdk.models.operations.DeleteCharginglocationsCharginglocationidRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/charging-locations/{chargingLocationId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteCharginglocationsCharginglocationidResponse res = new openapisdk.models.operations.DeleteCharginglocationsCharginglocationidResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * getCharginglocations - List Charging Locations
     *
     * Returns a list of Charging Locations registered to the User
    **/
    public openapisdk.models.operations.GetCharginglocationsResponse getCharginglocations(openapisdk.models.operations.GetCharginglocationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/charging-locations");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetCharginglocationsResponse res = new openapisdk.models.operations.GetCharginglocationsResponse() {{
            onechargingLocationsPostRequestBodyContentApplication1jsonSchemas = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema[].class);
                res.onechargingLocationsPostRequestBodyContentApplication1jsonSchemas = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCharginglocationsCharginglocationid - Get Charging Location
    **/
    public openapisdk.models.operations.GetCharginglocationsCharginglocationidResponse getCharginglocationsCharginglocationid(openapisdk.models.operations.GetCharginglocationsCharginglocationidRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/charging-locations/{chargingLocationId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetCharginglocationsCharginglocationidResponse res = new openapisdk.models.operations.GetCharginglocationsCharginglocationidResponse() {{
            onechargingLocationsPostRequestBodyContentApplication1jsonSchema = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema.class);
                res.onechargingLocationsPostRequestBodyContentApplication1jsonSchema = out;
            }
        }

        return res;
    }
	
	
    /**
     * postCharginglocations - Create Charging Location
    **/
    public openapisdk.models.operations.PostCharginglocationsResponse postCharginglocations(openapisdk.models.operations.PostCharginglocationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/charging-locations");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostCharginglocationsResponse res = new openapisdk.models.operations.PostCharginglocationsResponse() {{
            onechargingLocationsPostRequestBodyContentApplication1jsonSchema = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema.class);
                res.onechargingLocationsPostRequestBodyContentApplication1jsonSchema = out;
            }
        }

        return res;
    }
	
	
    /**
     * putCharginglocationsCharginglocationid - Update Charging Location
     *
     * Updates a charging location with new configuration
    **/
    public openapisdk.models.operations.PutCharginglocationsCharginglocationidResponse putCharginglocationsCharginglocationid(openapisdk.models.operations.PutCharginglocationsCharginglocationidRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/charging-locations/{chargingLocationId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutCharginglocationsCharginglocationidResponse res = new openapisdk.models.operations.PutCharginglocationsCharginglocationidResponse() {{
            onechargingLocationsPostRequestBodyContentApplication1jsonSchema = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema.class);
                res.onechargingLocationsPostRequestBodyContentApplication1jsonSchema = out;
            }
        }

        return res;
    }
	
}