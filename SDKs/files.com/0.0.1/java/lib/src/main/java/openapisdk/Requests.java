package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Requests {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Requests(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteRequestsId - Delete Request
     *
     * Delete Request
    **/
    public openapisdk.models.operations.DeleteRequestsIdResponse deleteRequestsId(openapisdk.models.operations.DeleteRequestsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/requests/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteRequestsIdResponse res = new openapisdk.models.operations.DeleteRequestsIdResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 409) {
        }
        else if (httpRes.statusCode() == 412) {
        }
        else if (httpRes.statusCode() == 422) {
        }
        else if (httpRes.statusCode() == 423) {
        }
        else if (httpRes.statusCode() == 429) {
        }

        return res;
    }
	
	
    /**
     * getRequests - List Requests
     *
     * List Requests
    **/
    public openapisdk.models.operations.GetRequestsResponse getRequests(openapisdk.models.operations.GetRequestsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/requests");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRequestsResponse res = new openapisdk.models.operations.GetRequestsResponse() {{
            requestEntities = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.RequestEntity[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.RequestEntity[].class);
                res.requestEntities = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 409) {
        }
        else if (httpRes.statusCode() == 412) {
        }
        else if (httpRes.statusCode() == 422) {
        }
        else if (httpRes.statusCode() == 423) {
        }
        else if (httpRes.statusCode() == 429) {
        }

        return res;
    }
	
	
    /**
     * getRequestsFoldersPath - List Requests
     *
     * List Requests
    **/
    public openapisdk.models.operations.GetRequestsFoldersPathResponse getRequestsFoldersPath(openapisdk.models.operations.GetRequestsFoldersPathRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/requests/folders/{path}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRequestsFoldersPathResponse res = new openapisdk.models.operations.GetRequestsFoldersPathResponse() {{
            requestEntities = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.RequestEntity[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.RequestEntity[].class);
                res.requestEntities = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 409) {
        }
        else if (httpRes.statusCode() == 412) {
        }
        else if (httpRes.statusCode() == 422) {
        }
        else if (httpRes.statusCode() == 423) {
        }
        else if (httpRes.statusCode() == 429) {
        }

        return res;
    }
	
	
    /**
     * postRequests - Create Request
     *
     * Create Request
    **/
    public openapisdk.models.operations.PostRequestsResponse postRequests(openapisdk.models.operations.PostRequestsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/requests");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostRequestsResponse res = new openapisdk.models.operations.PostRequestsResponse() {{
            requestEntity = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.RequestEntity out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.RequestEntity.class);
                res.requestEntity = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 409) {
        }
        else if (httpRes.statusCode() == 412) {
        }
        else if (httpRes.statusCode() == 422) {
        }
        else if (httpRes.statusCode() == 423) {
        }
        else if (httpRes.statusCode() == 429) {
        }

        return res;
    }
	
}