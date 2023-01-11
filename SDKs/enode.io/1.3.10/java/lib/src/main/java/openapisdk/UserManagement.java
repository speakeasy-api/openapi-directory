package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class UserManagement {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public UserManagement(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteUsersUserid - Unlink User
     *
     * Deletes a User and all of their data permanently, and invalidates any associated sessions, authorization codes, and access/refresh tokens
    **/
    public openapisdk.models.operations.DeleteUsersUseridResponse deleteUsersUserid(openapisdk.models.operations.DeleteUsersUseridRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{userId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteUsersUseridResponse res = new openapisdk.models.operations.DeleteUsersUseridResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteUsersUseridAuthorization - Deauthorize User
     *
     * Deletes the User's stored vendor authorizations and credentials, invalidates any associated sessions, authorization codes, and access/refresh tokens.
     * 
     * All other User data is retained, and if the User is sent through the Link User flow in the future their account will be just as they left it.
     * 
     * No webhook events will be generated for a deauthorized user.
    **/
    public openapisdk.models.operations.DeleteUsersUseridAuthorizationResponse deleteUsersUseridAuthorization(openapisdk.models.operations.DeleteUsersUseridAuthorizationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{userId}/authorization", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteUsersUseridAuthorizationResponse res = new openapisdk.models.operations.DeleteUsersUseridAuthorizationResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * postUsersUseridLink - Link User
     *
     * Creates an Enode Link session attached to the provided User ID. If this User does not exist, it will be created. The returned `linkState` gives the user short-lived access to Enode Link.
    **/
    public openapisdk.models.operations.PostUsersUseridLinkResponse postUsersUseridLink(openapisdk.models.operations.PostUsersUseridLinkRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{userId}/link", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostUsersUseridLinkResponse res = new openapisdk.models.operations.PostUsersUseridLinkResponse() {{
            postUsersUseridLink200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostUsersUseridLink200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostUsersUseridLink200ApplicationJson.class);
                res.postUsersUseridLink200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}