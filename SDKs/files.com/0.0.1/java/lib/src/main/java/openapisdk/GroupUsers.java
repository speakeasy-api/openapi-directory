package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class GroupUsers {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public GroupUsers(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteGroupUsersId - Delete Group User
     *
     * Delete Group User
    **/
    public openapisdk.models.operations.DeleteGroupUsersIdResponse deleteGroupUsersId(openapisdk.models.operations.DeleteGroupUsersIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/group_users/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
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

        openapisdk.models.operations.DeleteGroupUsersIdResponse res = new openapisdk.models.operations.DeleteGroupUsersIdResponse() {{
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
     * getGroupUsers - List Group Users
     *
     * List Group Users
    **/
    public openapisdk.models.operations.GetGroupUsersResponse getGroupUsers(openapisdk.models.operations.GetGroupUsersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/group_users");
        
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

        openapisdk.models.operations.GetGroupUsersResponse res = new openapisdk.models.operations.GetGroupUsersResponse() {{
            groupUserEntities = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GroupUserEntity[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GroupUserEntity[].class);
                res.groupUserEntities = out;
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
     * patchGroupUsersId - Update Group User
     *
     * Update Group User
    **/
    public openapisdk.models.operations.PatchGroupUsersIdResponse patchGroupUsersId(openapisdk.models.operations.PatchGroupUsersIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/group_users/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PatchGroupUsersIdResponse res = new openapisdk.models.operations.PatchGroupUsersIdResponse() {{
            groupUserEntity = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GroupUserEntity out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GroupUserEntity.class);
                res.groupUserEntity = out;
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
     * postGroupUsers - Create Group User
     *
     * Create Group User
    **/
    public openapisdk.models.operations.PostGroupUsersResponse postGroupUsers(openapisdk.models.operations.PostGroupUsersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/group_users");
        
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

        openapisdk.models.operations.PostGroupUsersResponse res = new openapisdk.models.operations.PostGroupUsersResponse() {{
            groupUserEntity = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GroupUserEntity out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GroupUserEntity.class);
                res.groupUserEntity = out;
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