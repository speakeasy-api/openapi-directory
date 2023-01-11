package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class Ssh {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Ssh(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteUsersSelectedUserSshKeysKeyId - Deletes a specific SSH public key from a user's account
     * 
     * Example:
     * ```
     * $ curl -X DELETE https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/{b15b6026-9c02-4626-b4ad-b905f99f763a}
     * ```
    **/
    public openapisdk.models.operations.DeleteUsersSelectedUserSshKeysKeyIdResponse deleteUsersSelectedUserSshKeysKeyId(openapisdk.models.operations.DeleteUsersSelectedUserSshKeysKeyIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{selected_user}/ssh-keys/{key_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteUsersSelectedUserSshKeysKeyIdResponse res = new openapisdk.models.operations.DeleteUsersSelectedUserSshKeysKeyIdResponse() {{
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * getUsersSelectedUserSshKeys - Returns a paginated list of the user's SSH public keys.
     * 
     * Example:
     * 
     * ```
     * $ curl https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys
     * {
     *     "page": 1,
     *     "pagelen": 10,
     *     "size": 1,
     *     "values": [
     *         {
     *             "comment": "user@myhost",
     *             "created_on": "2018-03-14T13:17:05.196003+00:00",
     *             "key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY",
     *             "label": "",
     *             "last_used": "2018-03-20T13:18:05.196003+00:00",
     *             "links": {
     *                 "self": {
     *                     "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a"
     *                 }
     *             },
     *             "owner": {
     *                 "display_name": "Mark Adams",
     *                 "links": {
     *                     "avatar": {
     *                         "href": "https://bitbucket.org/account/markadams-atl/avatar/32/"
     *                     },
     *                     "html": {
     *                         "href": "https://bitbucket.org/markadams-atl/"
     *                     },
     *                     "self": {
     *                         "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}"
     *                     }
     *                 },
     *                 "type": "user",
     *                 "username": "markadams-atl",
     *                 "nickname": "markadams-atl",
     *                 "uuid": "{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}"
     *             },
     *             "type": "ssh_key",
     *             "uuid": "{b15b6026-9c02-4626-b4ad-b905f99f763a}"
     *         }
     *     ]
     * }
     * ```
    **/
    public openapisdk.models.operations.GetUsersSelectedUserSshKeysResponse getUsersSelectedUserSshKeys(openapisdk.models.operations.GetUsersSelectedUserSshKeysRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{selected_user}/ssh-keys", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUsersSelectedUserSshKeysResponse res = new openapisdk.models.operations.GetUsersSelectedUserSshKeysResponse() {{
            paginatedSshUserKeys = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedSshUserKeys out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedSshUserKeys.class);
                res.paginatedSshUserKeys = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * getUsersSelectedUserSshKeysKeyId - Returns a specific SSH public key belonging to a user.
     * 
     * Example:
     * ```
     * $ curl https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/{fbe4bbab-f6f7-4dde-956b-5c58323c54b3}
     * 
     * {
     *     "comment": "user@myhost",
     *     "created_on": "2018-03-14T13:17:05.196003+00:00",
     *     "key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY",
     *     "label": "",
     *     "last_used": "2018-03-20T13:18:05.196003+00:00",
     *     "links": {
     *         "self": {
     *             "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a"
     *         }
     *     },
     *     "owner": {
     *         "display_name": "Mark Adams",
     *         "links": {
     *             "avatar": {
     *                 "href": "https://bitbucket.org/account/markadams-atl/avatar/32/"
     *             },
     *             "html": {
     *                 "href": "https://bitbucket.org/markadams-atl/"
     *             },
     *             "self": {
     *                 "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}"
     *             }
     *         },
     *         "type": "user",
     *         "username": "markadams-atl",
     *         "nickname": "markadams-atl",
     *         "uuid": "{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}"
     *     },
     *     "type": "ssh_key",
     *     "uuid": "{b15b6026-9c02-4626-b4ad-b905f99f763a}"
     * }
     * ```
    **/
    public openapisdk.models.operations.GetUsersSelectedUserSshKeysKeyIdResponse getUsersSelectedUserSshKeysKeyId(openapisdk.models.operations.GetUsersSelectedUserSshKeysKeyIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{selected_user}/ssh-keys/{key_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUsersSelectedUserSshKeysKeyIdResponse res = new openapisdk.models.operations.GetUsersSelectedUserSshKeysKeyIdResponse() {{
            sshAccountKey = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.sshAccountKey = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * postUsersSelectedUserSshKeys - Adds a new SSH public key to the specified user account and returns the resulting key.
     * 
     * Example:
     * ```
     * $ curl -X POST -H "Content-Type: application/json" -d '{"key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY user@myhost"}' https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys
     * 
     * {
     *     "comment": "user@myhost",
     *     "created_on": "2018-03-14T13:17:05.196003+00:00",
     *     "key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY",
     *     "label": "",
     *     "last_used": "2018-03-20T13:18:05.196003+00:00",
     *     "links": {
     *         "self": {
     *             "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a"
     *         }
     *     },
     *     "owner": {
     *         "display_name": "Mark Adams",
     *         "links": {
     *             "avatar": {
     *                 "href": "https://bitbucket.org/account/markadams-atl/avatar/32/"
     *             },
     *             "html": {
     *                 "href": "https://bitbucket.org/markadams-atl/"
     *             },
     *             "self": {
     *                 "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}"
     *             }
     *         },
     *         "type": "user",
     *         "username": "markadams-atl",
     *         "nickname": "markadams-atl",
     *         "uuid": "{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}"
     *     },
     *     "type": "ssh_key",
     *     "uuid": "{b15b6026-9c02-4626-b4ad-b905f99f763a}"
     * }
     * ```
    **/
    public openapisdk.models.operations.PostUsersSelectedUserSshKeysResponse postUsersSelectedUserSshKeys(openapisdk.models.operations.PostUsersSelectedUserSshKeysRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{selected_user}/ssh-keys", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostUsersSelectedUserSshKeysResponse res = new openapisdk.models.operations.PostUsersSelectedUserSshKeysResponse() {{
            sshAccountKey = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.sshAccountKey = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * putUsersSelectedUserSshKeysKeyId - Updates a specific SSH public key on a user's account
     * 
     * Note: Only the 'comment' field can be updated using this API. To modify the key or comment values, you must delete and add the key again.
     * 
     * Example:
     * ```
     * $ curl -X PUT -H "Content-Type: application/json" -d '{"label": "Work key"}' https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/{b15b6026-9c02-4626-b4ad-b905f99f763a}
     * 
     * {
     *     "comment": "",
     *     "created_on": "2018-03-14T13:17:05.196003+00:00",
     *     "key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY",
     *     "label": "Work key",
     *     "last_used": "2018-03-20T13:18:05.196003+00:00",
     *     "links": {
     *         "self": {
     *             "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a"
     *         }
     *     },
     *     "owner": {
     *         "display_name": "Mark Adams",
     *         "links": {
     *             "avatar": {
     *                 "href": "https://bitbucket.org/account/markadams-atl/avatar/32/"
     *             },
     *             "html": {
     *                 "href": "https://bitbucket.org/markadams-atl/"
     *             },
     *             "self": {
     *                 "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}"
     *             }
     *         },
     *         "type": "user",
     *         "username": "markadams-atl",
     *         "nickname": "markadams-atl",
     *         "uuid": "{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}"
     *     },
     *     "type": "ssh_key",
     *     "uuid": "{b15b6026-9c02-4626-b4ad-b905f99f763a}"
     * }
     * ```
    **/
    public openapisdk.models.operations.PutUsersSelectedUserSshKeysKeyIdResponse putUsersSelectedUserSshKeysKeyId(openapisdk.models.operations.PutUsersSelectedUserSshKeysKeyIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{selected_user}/ssh-keys/{key_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutUsersSelectedUserSshKeysKeyIdResponse res = new openapisdk.models.operations.PutUsersSelectedUserSshKeysKeyIdResponse() {{
            sshAccountKey = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.sshAccountKey = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
}