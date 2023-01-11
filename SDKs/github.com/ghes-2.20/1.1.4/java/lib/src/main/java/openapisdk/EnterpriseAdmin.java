package openapisdk;

import openapisdk.utils.HTTPClient;
import java.util.function.Function;
import java.util.stream.Collectors;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class EnterpriseAdmin {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public EnterpriseAdmin(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * enterpriseAdminAddAuthorizedSshKey - Add an authorized SSH key
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#add-an-authorized-ssh-key - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminAddAuthorizedSshKeyResponse enterpriseAdminAddAuthorizedSshKey(openapisdk.models.operations.EnterpriseAdminAddAuthorizedSshKeyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/api/settings/authorized-keys");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminAddAuthorizedSshKeyResponse res = new openapisdk.models.operations.EnterpriseAdminAddAuthorizedSshKeyResponse() {{
            sshKeys = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SshKey[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SshKey[].class);
                res.sshKeys = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminCreateEnterpriseServerLicense - Create a GitHub license
     *
     * When you boot a GitHub instance for the first time, you can use the following endpoint to upload a license:
     * 
     * Note that you need to POST to [`/setup/api/configure`](https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#start-a-configuration-process) to start the actual configuration process.
     * 
     * When using this endpoint, your GitHub instance must have a password set. This can be accomplished two ways:
     * 
     * 1.  If you're working directly with the API before accessing the web interface, you must pass in the password parameter to set your password.
     * 2.  If you set up your instance via the web interface before accessing the API, your calls to this endpoint do not need the password parameter.
     * 
     * For a list of the available settings, see the [Get settings endpoint](https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#get-settings).
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#create-a-github-enterprise-server-license - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminCreateEnterpriseServerLicenseResponse enterpriseAdminCreateEnterpriseServerLicense(openapisdk.models.operations.EnterpriseAdminCreateEnterpriseServerLicenseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/api/start");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminCreateEnterpriseServerLicenseResponse res = new openapisdk.models.operations.EnterpriseAdminCreateEnterpriseServerLicenseResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 202) {
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminCreateGlobalWebhook - Create a global webhook
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#create-a-global-webhook - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminCreateGlobalWebhookResponse enterpriseAdminCreateGlobalWebhook(openapisdk.models.operations.EnterpriseAdminCreateGlobalWebhookRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/admin/hooks");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminCreateGlobalWebhookResponse res = new openapisdk.models.operations.EnterpriseAdminCreateGlobalWebhookResponse() {{
            globalHook = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GlobalHook out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GlobalHook.class);
                res.globalHook = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminCreateImpersonationOAuthToken - Create an impersonation OAuth token
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#create-an-impersonation-oauth-token - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminCreateImpersonationOAuthTokenResponse enterpriseAdminCreateImpersonationOAuthToken(openapisdk.models.operations.EnterpriseAdminCreateImpersonationOAuthTokenRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/admin/users/{username}/authorizations", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminCreateImpersonationOAuthTokenResponse res = new openapisdk.models.operations.EnterpriseAdminCreateImpersonationOAuthTokenResponse() {{
            authorization = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Authorization out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Authorization.class);
                res.authorization = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminCreateOrg - Create an organization
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#create-an-organization - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminCreateOrgResponse enterpriseAdminCreateOrg(openapisdk.models.operations.EnterpriseAdminCreateOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/admin/organizations");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminCreateOrgResponse res = new openapisdk.models.operations.EnterpriseAdminCreateOrgResponse() {{
            organizationSimple = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.OrganizationSimple out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.OrganizationSimple.class);
                res.organizationSimple = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminCreatePreReceiveEnvironment - Create a pre-receive environment
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#create-a-pre-receive-environment - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminCreatePreReceiveEnvironmentResponse enterpriseAdminCreatePreReceiveEnvironment(openapisdk.models.operations.EnterpriseAdminCreatePreReceiveEnvironmentRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/admin/pre-receive-environments");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminCreatePreReceiveEnvironmentResponse res = new openapisdk.models.operations.EnterpriseAdminCreatePreReceiveEnvironmentResponse() {{
            preReceiveEnvironment = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreReceiveEnvironment out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreReceiveEnvironment.class);
                res.preReceiveEnvironment = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminCreatePreReceiveHook - Create a pre-receive hook
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#create-a-pre-receive-hook - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminCreatePreReceiveHookResponse enterpriseAdminCreatePreReceiveHook(openapisdk.models.operations.EnterpriseAdminCreatePreReceiveHookRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/admin/pre-receive-hooks");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminCreatePreReceiveHookResponse res = new openapisdk.models.operations.EnterpriseAdminCreatePreReceiveHookResponse() {{
            preReceiveHook = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreReceiveHook out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreReceiveHook.class);
                res.preReceiveHook = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminCreateUser - Create a user
     *
     * If an external authentication mechanism is used, the login name should match the login name in the external system. If you are using LDAP authentication, you should also [update the LDAP mapping](https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#update-ldap-mapping-for-a-user) for the user.
     * 
     * The login name will be normalized to only contain alphanumeric characters or single hyphens. For example, if you send `"octo_cat"` as the login, a user named `"octo-cat"` will be created.
     * 
     * If the login name or email address is already associated with an account, the server will return a `422` response.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#create-a-user - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminCreateUserResponse enterpriseAdminCreateUser(openapisdk.models.operations.EnterpriseAdminCreateUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/admin/users");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminCreateUserResponse res = new openapisdk.models.operations.EnterpriseAdminCreateUserResponse() {{
            simpleUser = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SimpleUser out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SimpleUser.class);
                res.simpleUser = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminDeleteGlobalWebhook - Delete a global webhook
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#delete-a-global-webhook - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminDeleteGlobalWebhookResponse enterpriseAdminDeleteGlobalWebhook(openapisdk.models.operations.EnterpriseAdminDeleteGlobalWebhookRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/admin/hooks/{hook_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminDeleteGlobalWebhookResponse res = new openapisdk.models.operations.EnterpriseAdminDeleteGlobalWebhookResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminDeleteImpersonationOAuthToken - Delete an impersonation OAuth token
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#delete-an-impersonation-oauth-token - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminDeleteImpersonationOAuthTokenResponse enterpriseAdminDeleteImpersonationOAuthToken(openapisdk.models.operations.EnterpriseAdminDeleteImpersonationOAuthTokenRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/admin/users/{username}/authorizations", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminDeleteImpersonationOAuthTokenResponse res = new openapisdk.models.operations.EnterpriseAdminDeleteImpersonationOAuthTokenResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminDeletePersonalAccessToken - Delete a personal access token
     *
     * Deletes a personal access token. Returns a `403 - Forbidden` status when a personal access token is in use. For example, if you access this endpoint with the same personal access token that you are trying to delete, you will receive this error.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#delete-a-personal-access-token - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminDeletePersonalAccessTokenResponse enterpriseAdminDeletePersonalAccessToken(openapisdk.models.operations.EnterpriseAdminDeletePersonalAccessTokenRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/admin/tokens/{token_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminDeletePersonalAccessTokenResponse res = new openapisdk.models.operations.EnterpriseAdminDeletePersonalAccessTokenResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminDeletePreReceiveEnvironment - Delete a pre-receive environment
     *
     * If you attempt to delete an environment that cannot be deleted, you will receive a `422 Unprocessable Entity` response.
     * 
     * The possible error messages are:
     * 
     * *   _Cannot modify or delete the default environment_
     * *   _Cannot delete environment that has hooks_
     * *   _Cannot delete environment when download is in progress_
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#delete-a-pre-receive-environment - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminDeletePreReceiveEnvironmentResponse enterpriseAdminDeletePreReceiveEnvironment(openapisdk.models.operations.EnterpriseAdminDeletePreReceiveEnvironmentRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/admin/pre-receive-environments/{pre_receive_environment_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminDeletePreReceiveEnvironmentResponse res = new openapisdk.models.operations.EnterpriseAdminDeletePreReceiveEnvironmentResponse() {{
            enterpriseAdminDeletePreReceiveEnvironment422ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJson.class);
                res.enterpriseAdminDeletePreReceiveEnvironment422ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminDeletePreReceiveHook - Delete a pre-receive hook
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#delete-a-pre-receive-hook - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminDeletePreReceiveHookResponse enterpriseAdminDeletePreReceiveHook(openapisdk.models.operations.EnterpriseAdminDeletePreReceiveHookRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/admin/pre-receive-hooks/{pre_receive_hook_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminDeletePreReceiveHookResponse res = new openapisdk.models.operations.EnterpriseAdminDeletePreReceiveHookResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminDeletePublicKey - Delete a public key
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#delete-a-public-key - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminDeletePublicKeyResponse enterpriseAdminDeletePublicKey(openapisdk.models.operations.EnterpriseAdminDeletePublicKeyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/admin/keys/{key_ids}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminDeletePublicKeyResponse res = new openapisdk.models.operations.EnterpriseAdminDeletePublicKeyResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminDeleteUser - Delete a user
     *
     * Deleting a user will delete all their repositories, gists, applications, and personal settings. [Suspending a user](https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#suspend-a-user) is often a better option.
     * 
     * You can delete any user account except your own.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#delete-a-user - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminDeleteUserResponse enterpriseAdminDeleteUser(openapisdk.models.operations.EnterpriseAdminDeleteUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/admin/users/{username}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminDeleteUserResponse res = new openapisdk.models.operations.EnterpriseAdminDeleteUserResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminDemoteSiteAdministrator - Demote a site administrator
     *
     * You can demote any user account except your own.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#demote-a-site-administrator - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminDemoteSiteAdministratorResponse enterpriseAdminDemoteSiteAdministrator(openapisdk.models.operations.EnterpriseAdminDemoteSiteAdministratorRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{username}/site_admin", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminDemoteSiteAdministratorResponse res = new openapisdk.models.operations.EnterpriseAdminDemoteSiteAdministratorResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminEnableOrDisableMaintenanceMode - Enable or disable maintenance mode
     *
     * The possible values for `enabled` are `true` and `false`. When it's `false`, the attribute `when` is ignored and the maintenance mode is turned off. `when` defines the time period when the maintenance was enabled.
     * 
     * The possible values for `when` are `now` or any date parseable by [mojombo/chronic](https://github.com/mojombo/chronic).
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#enable-or-disable-maintenance-mode - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminEnableOrDisableMaintenanceModeResponse enterpriseAdminEnableOrDisableMaintenanceMode(openapisdk.models.operations.EnterpriseAdminEnableOrDisableMaintenanceModeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/api/maintenance");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminEnableOrDisableMaintenanceModeResponse res = new openapisdk.models.operations.EnterpriseAdminEnableOrDisableMaintenanceModeResponse() {{
            maintenanceStatus = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.MaintenanceStatus out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.MaintenanceStatus.class);
                res.maintenanceStatus = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminGetAllAuthorizedSshKeys - Get all authorized SSH keys
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#get-all-authorized-ssh-keys - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminGetAllAuthorizedSshKeysResponse enterpriseAdminGetAllAuthorizedSshKeys() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/api/settings/authorized-keys");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminGetAllAuthorizedSshKeysResponse res = new openapisdk.models.operations.EnterpriseAdminGetAllAuthorizedSshKeysResponse() {{
            sshKeys = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SshKey[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SshKey[].class);
                res.sshKeys = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminGetConfigurationStatus - Get the configuration status
     *
     * This endpoint allows you to check the status of the most recent configuration process:
     * 
     * Note that you may need to wait several seconds after you start a process before you can check its status.
     * 
     * The different statuses are:
     * 
     * | Status        | Description                       |
     * | ------------- | --------------------------------- |
     * | `PENDING`     | The job has not started yet       |
     * | `CONFIGURING` | The job is running                |
     * | `DONE`        | The job has finished correctly    |
     * | `FAILED`      | The job has finished unexpectedly |
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#get-the-configuration-status - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminGetConfigurationStatusResponse enterpriseAdminGetConfigurationStatus() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/api/configcheck");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminGetConfigurationStatusResponse res = new openapisdk.models.operations.EnterpriseAdminGetConfigurationStatusResponse() {{
            configurationStatus = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConfigurationStatus out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConfigurationStatus.class);
                res.configurationStatus = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminGetDownloadStatusForPreReceiveEnvironment - Get the download status for a pre-receive environment
     *
     * In addition to seeing the download status at the "[Get a pre-receive environment](#get-a-pre-receive-environment)" endpoint, there is also this separate endpoint for just the download status.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#get-the-download-status-for-a-pre-receive-environment - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentResponse enterpriseAdminGetDownloadStatusForPreReceiveEnvironment(openapisdk.models.operations.EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/admin/pre-receive-environments/{pre_receive_environment_id}/downloads/latest", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentResponse res = new openapisdk.models.operations.EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentResponse() {{
            preReceiveEnvironmentDownloadStatus = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreReceiveEnvironmentDownloadStatus out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreReceiveEnvironmentDownloadStatus.class);
                res.preReceiveEnvironmentDownloadStatus = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminGetGlobalWebhook - Get a global webhook
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#get-a-global-webhook - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminGetGlobalWebhookResponse enterpriseAdminGetGlobalWebhook(openapisdk.models.operations.EnterpriseAdminGetGlobalWebhookRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/admin/hooks/{hook_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminGetGlobalWebhookResponse res = new openapisdk.models.operations.EnterpriseAdminGetGlobalWebhookResponse() {{
            globalHook = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GlobalHook out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GlobalHook.class);
                res.globalHook = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminGetLicenseInformation - Get license information
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#get-license-information - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminGetLicenseInformationResponse enterpriseAdminGetLicenseInformation() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/enterprise/settings/license");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminGetLicenseInformationResponse res = new openapisdk.models.operations.EnterpriseAdminGetLicenseInformationResponse() {{
            licenseInfo = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LicenseInfo out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LicenseInfo.class);
                res.licenseInfo = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminGetMaintenanceStatus - Get the maintenance status
     *
     * Check your installation's maintenance status:
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#get-the-maintenance-status - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminGetMaintenanceStatusResponse enterpriseAdminGetMaintenanceStatus() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/api/maintenance");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminGetMaintenanceStatusResponse res = new openapisdk.models.operations.EnterpriseAdminGetMaintenanceStatusResponse() {{
            maintenanceStatus = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.MaintenanceStatus out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.MaintenanceStatus.class);
                res.maintenanceStatus = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminGetPreReceiveEnvironment - Get a pre-receive environment
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#get-a-pre-receive-environment - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminGetPreReceiveEnvironmentResponse enterpriseAdminGetPreReceiveEnvironment(openapisdk.models.operations.EnterpriseAdminGetPreReceiveEnvironmentRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/admin/pre-receive-environments/{pre_receive_environment_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminGetPreReceiveEnvironmentResponse res = new openapisdk.models.operations.EnterpriseAdminGetPreReceiveEnvironmentResponse() {{
            preReceiveEnvironment = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreReceiveEnvironment out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreReceiveEnvironment.class);
                res.preReceiveEnvironment = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminGetPreReceiveHook - Get a pre-receive hook
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#get-a-pre-receive-hook - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminGetPreReceiveHookResponse enterpriseAdminGetPreReceiveHook(openapisdk.models.operations.EnterpriseAdminGetPreReceiveHookRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/admin/pre-receive-hooks/{pre_receive_hook_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminGetPreReceiveHookResponse res = new openapisdk.models.operations.EnterpriseAdminGetPreReceiveHookResponse() {{
            preReceiveHook = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreReceiveHook out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreReceiveHook.class);
                res.preReceiveHook = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminGetPreReceiveHookForOrg - Get a pre-receive hook for an organization
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-an-organization - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminGetPreReceiveHookForOrgResponse enterpriseAdminGetPreReceiveHookForOrg(openapisdk.models.operations.EnterpriseAdminGetPreReceiveHookForOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminGetPreReceiveHookForOrgResponse res = new openapisdk.models.operations.EnterpriseAdminGetPreReceiveHookForOrgResponse() {{
            orgPreReceiveHook = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.OrgPreReceiveHook out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.OrgPreReceiveHook.class);
                res.orgPreReceiveHook = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminGetPreReceiveHookForRepo - Get a pre-receive hook for a repository
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-a-repository - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminGetPreReceiveHookForRepoResponse enterpriseAdminGetPreReceiveHookForRepo(openapisdk.models.operations.EnterpriseAdminGetPreReceiveHookForRepoRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminGetPreReceiveHookForRepoResponse res = new openapisdk.models.operations.EnterpriseAdminGetPreReceiveHookForRepoResponse() {{
            repositoryPreReceiveHook = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.RepositoryPreReceiveHook out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.RepositoryPreReceiveHook.class);
                res.repositoryPreReceiveHook = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminGetSettings - Get settings
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#get-settings - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminGetSettingsResponse enterpriseAdminGetSettings() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/api/settings");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminGetSettingsResponse res = new openapisdk.models.operations.EnterpriseAdminGetSettingsResponse() {{
            enterpriseSettings = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.EnterpriseSettings out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.EnterpriseSettings.class);
                res.enterpriseSettings = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminGetTypeStats - Get statistics
     *
     * There are a variety of types to choose from:
     * 
     * | Type         | Description                                                                                         |
     * | ------------ | --------------------------------------------------------------------------------------------------- |
     * | `issues`     | The number of open and closed issues.                                                               |
     * | `hooks`      | The number of active and inactive hooks.                                                            |
     * | `milestones` | The number of open and closed milestones.                                                           |
     * | `orgs`       | The number of organizations, teams, team members, and disabled organizations.                       |
     * | `comments`   | The number of comments on issues, pull requests, commits, and gists.                                |
     * | `pages`      | The number of GitHub Pages sites.                                                                   |
     * | `users`      | The number of suspended and admin users.                                                            |
     * | `gists`      | The number of private and public gists.                                                             |
     * | `pulls`      | The number of merged, mergeable, and unmergeable pull requests.                                     |
     * | `repos`      | The number of organization-owned repositories, root repositories, forks, pushed commits, and wikis. |
     * | `all`        | All of the statistics listed above.                                                                 |
     * 
     * These statistics are cached and will be updated approximately every 10 minutes.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#get-statistics - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminGetTypeStatsResponse enterpriseAdminGetTypeStats(openapisdk.models.operations.EnterpriseAdminGetTypeStatsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/enterprise/stats/{type}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminGetTypeStatsResponse res = new openapisdk.models.operations.EnterpriseAdminGetTypeStatsResponse() {{
            enterpriseAdminGetTypeStats200ApplicationJSONAnyOf = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.enterpriseAdminGetTypeStats200ApplicationJSONAnyOf = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminListGlobalWebhooks - List global webhooks
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#list-global-webhooks - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminListGlobalWebhooksResponse enterpriseAdminListGlobalWebhooks(openapisdk.models.operations.EnterpriseAdminListGlobalWebhooksRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/admin/hooks");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminListGlobalWebhooksResponse res = new openapisdk.models.operations.EnterpriseAdminListGlobalWebhooksResponse() {{
            globalHooks = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GlobalHook[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GlobalHook[].class);
                res.globalHooks = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminListPersonalAccessTokens - List personal access tokens
     *
     * Lists personal access tokens for all users, including admin users.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#list-personal-access-tokens - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminListPersonalAccessTokensResponse enterpriseAdminListPersonalAccessTokens(openapisdk.models.operations.EnterpriseAdminListPersonalAccessTokensRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/admin/tokens");
        
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

        openapisdk.models.operations.EnterpriseAdminListPersonalAccessTokensResponse res = new openapisdk.models.operations.EnterpriseAdminListPersonalAccessTokensResponse() {{
            authorizations = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Authorization[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Authorization[].class);
                res.authorizations = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminListPreReceiveEnvironments - List pre-receive environments
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#list-pre-receive-environments - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminListPreReceiveEnvironmentsResponse enterpriseAdminListPreReceiveEnvironments(openapisdk.models.operations.EnterpriseAdminListPreReceiveEnvironmentsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/admin/pre-receive-environments");
        
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

        openapisdk.models.operations.EnterpriseAdminListPreReceiveEnvironmentsResponse res = new openapisdk.models.operations.EnterpriseAdminListPreReceiveEnvironmentsResponse() {{
            preReceiveEnvironments = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreReceiveEnvironment[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreReceiveEnvironment[].class);
                res.preReceiveEnvironments = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminListPreReceiveHooks - List pre-receive hooks
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#list-pre-receive-hooks - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminListPreReceiveHooksResponse enterpriseAdminListPreReceiveHooks(openapisdk.models.operations.EnterpriseAdminListPreReceiveHooksRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/admin/pre-receive-hooks");
        
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

        openapisdk.models.operations.EnterpriseAdminListPreReceiveHooksResponse res = new openapisdk.models.operations.EnterpriseAdminListPreReceiveHooksResponse() {{
            preReceiveHooks = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreReceiveHook[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreReceiveHook[].class);
                res.preReceiveHooks = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminListPreReceiveHooksForOrg - List pre-receive hooks for an organization
     *
     * List all pre-receive hooks that are enabled or testing for this organization as well as any disabled hooks that can be configured at the organization level. Globally disabled pre-receive hooks that do not allow downstream configuration are not listed.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#list-pre-receive-hooks-for-an-organization - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminListPreReceiveHooksForOrgResponse enterpriseAdminListPreReceiveHooksForOrg(openapisdk.models.operations.EnterpriseAdminListPreReceiveHooksForOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/pre-receive-hooks", request.pathParams);
        
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

        openapisdk.models.operations.EnterpriseAdminListPreReceiveHooksForOrgResponse res = new openapisdk.models.operations.EnterpriseAdminListPreReceiveHooksForOrgResponse() {{
            orgPreReceiveHooks = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.OrgPreReceiveHook[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.OrgPreReceiveHook[].class);
                res.orgPreReceiveHooks = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminListPreReceiveHooksForRepo - List pre-receive hooks for a repository
     *
     * List all pre-receive hooks that are enabled or testing for this repository as well as any disabled hooks that are allowed to be enabled at the repository level. Pre-receive hooks that are disabled at a higher level and are not configurable will not be listed.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#list-pre-receive-hooks-for-a-repository - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminListPreReceiveHooksForRepoResponse enterpriseAdminListPreReceiveHooksForRepo(openapisdk.models.operations.EnterpriseAdminListPreReceiveHooksForRepoRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/pre-receive-hooks", request.pathParams);
        
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

        openapisdk.models.operations.EnterpriseAdminListPreReceiveHooksForRepoResponse res = new openapisdk.models.operations.EnterpriseAdminListPreReceiveHooksForRepoResponse() {{
            repositoryPreReceiveHooks = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.RepositoryPreReceiveHook[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.RepositoryPreReceiveHook[].class);
                res.repositoryPreReceiveHooks = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminListPublicKeys - List public keys
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#list-public-keys - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminListPublicKeysResponse enterpriseAdminListPublicKeys(openapisdk.models.operations.EnterpriseAdminListPublicKeysRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/admin/keys");
        
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

        openapisdk.models.operations.EnterpriseAdminListPublicKeysResponse res = new openapisdk.models.operations.EnterpriseAdminListPublicKeysResponse() {{
            enterprisePublicKeys = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.EnterprisePublicKey[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.EnterprisePublicKey[].class);
                res.enterprisePublicKeys = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminPingGlobalWebhook - Ping a global webhook
     *
     * This will trigger a [ping event](https://docs.github.com/enterprise-server@2.20/webhooks/#ping-event) to be sent to the webhook.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#ping-a-global-webhook - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminPingGlobalWebhookResponse enterpriseAdminPingGlobalWebhook(openapisdk.models.operations.EnterpriseAdminPingGlobalWebhookRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/admin/hooks/{hook_id}/pings", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminPingGlobalWebhookResponse res = new openapisdk.models.operations.EnterpriseAdminPingGlobalWebhookResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminPromoteUserToBeSiteAdministrator - Promote a user to be a site administrator
     *
     * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#promote-a-user-to-be-a-site-administrator - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminPromoteUserToBeSiteAdministratorResponse enterpriseAdminPromoteUserToBeSiteAdministrator(openapisdk.models.operations.EnterpriseAdminPromoteUserToBeSiteAdministratorRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{username}/site_admin", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminPromoteUserToBeSiteAdministratorResponse res = new openapisdk.models.operations.EnterpriseAdminPromoteUserToBeSiteAdministratorResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminRemoveAuthorizedSshKey - Remove an authorized SSH key
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#remove-an-authorized-ssh-key - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminRemoveAuthorizedSshKeyResponse enterpriseAdminRemoveAuthorizedSshKey(openapisdk.models.operations.EnterpriseAdminRemoveAuthorizedSshKeyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/api/settings/authorized-keys");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminRemoveAuthorizedSshKeyResponse res = new openapisdk.models.operations.EnterpriseAdminRemoveAuthorizedSshKeyResponse() {{
            sshKeys = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SshKey[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SshKey[].class);
                res.sshKeys = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminRemovePreReceiveHookEnforcementForOrg - Remove pre-receive hook enforcement for an organization
     *
     * Removes any overrides for this hook at the org level for this org.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminRemovePreReceiveHookEnforcementForOrgResponse enterpriseAdminRemovePreReceiveHookEnforcementForOrg(openapisdk.models.operations.EnterpriseAdminRemovePreReceiveHookEnforcementForOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminRemovePreReceiveHookEnforcementForOrgResponse res = new openapisdk.models.operations.EnterpriseAdminRemovePreReceiveHookEnforcementForOrgResponse() {{
            orgPreReceiveHook = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.OrgPreReceiveHook out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.OrgPreReceiveHook.class);
                res.orgPreReceiveHook = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminRemovePreReceiveHookEnforcementForRepo - Remove pre-receive hook enforcement for a repository
     *
     * Deletes any overridden enforcement on this repository for the specified hook.
     * 
     * Responds with effective values inherited from owner and/or global level.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminRemovePreReceiveHookEnforcementForRepoResponse enterpriseAdminRemovePreReceiveHookEnforcementForRepo(openapisdk.models.operations.EnterpriseAdminRemovePreReceiveHookEnforcementForRepoRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminRemovePreReceiveHookEnforcementForRepoResponse res = new openapisdk.models.operations.EnterpriseAdminRemovePreReceiveHookEnforcementForRepoResponse() {{
            repositoryPreReceiveHook = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.RepositoryPreReceiveHook out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.RepositoryPreReceiveHook.class);
                res.repositoryPreReceiveHook = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminSetSettings - Set settings
     *
     * For a list of the available settings, see the [Get settings endpoint](https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#get-settings).
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#set-settings - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminSetSettingsResponse enterpriseAdminSetSettings(openapisdk.models.operations.EnterpriseAdminSetSettingsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/api/settings");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminSetSettingsResponse res = new openapisdk.models.operations.EnterpriseAdminSetSettingsResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminStartConfigurationProcess - Start a configuration process
     *
     * This endpoint allows you to start a configuration process at any time for your updated settings to take effect:
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#start-a-configuration-process - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminStartConfigurationProcessResponse enterpriseAdminStartConfigurationProcess() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/api/configure");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminStartConfigurationProcessResponse res = new openapisdk.models.operations.EnterpriseAdminStartConfigurationProcessResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 202) {
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminStartPreReceiveEnvironmentDownload - Start a pre-receive environment download
     *
     * Triggers a new download of the environment tarball from the environment's `image_url`. When the download is finished, the newly downloaded tarball will overwrite the existing environment.
     * 
     * If a download cannot be triggered, you will receive a `422 Unprocessable Entity` response.
     * 
     * The possible error messages are:
     * 
     * * _Cannot modify or delete the default environment_
     * * _Can not start a new download when a download is in progress_
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#start-a-pre-receive-environment-download - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse enterpriseAdminStartPreReceiveEnvironmentDownload(openapisdk.models.operations.EnterpriseAdminStartPreReceiveEnvironmentDownloadRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/admin/pre-receive-environments/{pre_receive_environment_id}/downloads", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse res = new openapisdk.models.operations.EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse() {{
            preReceiveEnvironmentDownloadStatus = null;
            enterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 202) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreReceiveEnvironmentDownloadStatus out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreReceiveEnvironmentDownloadStatus.class);
                res.preReceiveEnvironmentDownloadStatus = out;
            }
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJson.class);
                res.enterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminSuspendUser - Suspend a user
     *
     * If your GitHub instance uses [LDAP Sync with Active Directory LDAP servers](https://help.github.com/enterprise/admin/guides/user-management/using-ldap), Active Directory LDAP-authenticated users cannot be suspended through this API. If you attempt to suspend an Active Directory LDAP-authenticated user through this API, it will return a `403` response.
     * 
     * You can suspend any user account except your own.
     * 
     * Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#suspend-a-user - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminSuspendUserResponse enterpriseAdminSuspendUser(openapisdk.models.operations.EnterpriseAdminSuspendUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{username}/suspended", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminSuspendUserResponse res = new openapisdk.models.operations.EnterpriseAdminSuspendUserResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminSyncLdapMappingForTeam - Sync LDAP mapping for a team
     *
     * Note that this API call does not automatically initiate an LDAP sync. Rather, if a `201` is returned, the sync job is queued successfully, and is performed when the instance is ready.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#sync-ldap-mapping-for-a-team - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminSyncLdapMappingForTeamResponse enterpriseAdminSyncLdapMappingForTeam(openapisdk.models.operations.EnterpriseAdminSyncLdapMappingForTeamRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/admin/ldap/teams/{team_id}/sync", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminSyncLdapMappingForTeamResponse res = new openapisdk.models.operations.EnterpriseAdminSyncLdapMappingForTeamResponse() {{
            enterpriseAdminSyncLdapMappingForTeam201ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.EnterpriseAdminSyncLdapMappingForTeam201ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.EnterpriseAdminSyncLdapMappingForTeam201ApplicationJson.class);
                res.enterpriseAdminSyncLdapMappingForTeam201ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminSyncLdapMappingForUser - Sync LDAP mapping for a user
     *
     * Note that this API call does not automatically initiate an LDAP sync. Rather, if a `201` is returned, the sync job is queued successfully, and is performed when the instance is ready.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#sync-ldap-mapping-for-a-user - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminSyncLdapMappingForUserResponse enterpriseAdminSyncLdapMappingForUser(openapisdk.models.operations.EnterpriseAdminSyncLdapMappingForUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/admin/ldap/users/{username}/sync", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminSyncLdapMappingForUserResponse res = new openapisdk.models.operations.EnterpriseAdminSyncLdapMappingForUserResponse() {{
            enterpriseAdminSyncLdapMappingForUser201ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.EnterpriseAdminSyncLdapMappingForUser201ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.EnterpriseAdminSyncLdapMappingForUser201ApplicationJson.class);
                res.enterpriseAdminSyncLdapMappingForUser201ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminUnsuspendUser - Unsuspend a user
     *
     * If your GitHub instance uses [LDAP Sync with Active Directory LDAP servers](https://help.github.com/enterprise/admin/guides/user-management/using-ldap), this API is disabled and will return a `403` response. Active Directory LDAP-authenticated users cannot be unsuspended using the API.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#unsuspend-a-user - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminUnsuspendUserResponse enterpriseAdminUnsuspendUser(openapisdk.models.operations.EnterpriseAdminUnsuspendUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{username}/suspended", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminUnsuspendUserResponse res = new openapisdk.models.operations.EnterpriseAdminUnsuspendUserResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminUpdateGlobalWebhook - Update a global webhook
     *
     * Parameters that are not provided will be overwritten with the default value or removed if no default exists.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#update-a-global-webhook - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminUpdateGlobalWebhookResponse enterpriseAdminUpdateGlobalWebhook(openapisdk.models.operations.EnterpriseAdminUpdateGlobalWebhookRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/admin/hooks/{hook_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminUpdateGlobalWebhookResponse res = new openapisdk.models.operations.EnterpriseAdminUpdateGlobalWebhookResponse() {{
            globalHook2 = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GlobalHook2 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GlobalHook2.class);
                res.globalHook2 = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminUpdateLdapMappingForTeam - Update LDAP mapping for a team
     *
     * Updates the [distinguished name](https://www.ldap.com/ldap-dns-and-rdns) (DN) of the LDAP entry to map to a team. [LDAP synchronization](https://help.github.com/enterprise/admin/guides/user-management/using-ldap/#enabling-ldap-sync) must be enabled to map LDAP entries to a team. Use the [Create a team](https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#create-a-team) endpoint to create a team with LDAP mapping.
     * 
     * You can also update the LDAP mapping of a child team.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#update-ldap-mapping-for-a-team - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminUpdateLdapMappingForTeamResponse enterpriseAdminUpdateLdapMappingForTeam(openapisdk.models.operations.EnterpriseAdminUpdateLdapMappingForTeamRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/admin/ldap/teams/{team_id}/mapping", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminUpdateLdapMappingForTeamResponse res = new openapisdk.models.operations.EnterpriseAdminUpdateLdapMappingForTeamResponse() {{
            ldapMappingTeam = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LdapMappingTeam out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LdapMappingTeam.class);
                res.ldapMappingTeam = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminUpdateLdapMappingForUser - Update LDAP mapping for a user
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#update-ldap-mapping-for-a-user - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminUpdateLdapMappingForUserResponse enterpriseAdminUpdateLdapMappingForUser(openapisdk.models.operations.EnterpriseAdminUpdateLdapMappingForUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/admin/ldap/users/{username}/mapping", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminUpdateLdapMappingForUserResponse res = new openapisdk.models.operations.EnterpriseAdminUpdateLdapMappingForUserResponse() {{
            ldapMappingUser = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LdapMappingUser out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LdapMappingUser.class);
                res.ldapMappingUser = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminUpdateOrgName - Update an organization name
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#update-an-organization-name - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminUpdateOrgNameResponse enterpriseAdminUpdateOrgName(openapisdk.models.operations.EnterpriseAdminUpdateOrgNameRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/admin/organizations/{org}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminUpdateOrgNameResponse res = new openapisdk.models.operations.EnterpriseAdminUpdateOrgNameResponse() {{
            enterpriseAdminUpdateOrgName202ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 202) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.EnterpriseAdminUpdateOrgName202ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.EnterpriseAdminUpdateOrgName202ApplicationJson.class);
                res.enterpriseAdminUpdateOrgName202ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminUpdatePreReceiveEnvironment - Update a pre-receive environment
     *
     * You cannot modify the default environment. If you attempt to modify the default environment, you will receive a `422 Unprocessable Entity` response.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#update-a-pre-receive-environment - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminUpdatePreReceiveEnvironmentResponse enterpriseAdminUpdatePreReceiveEnvironment(openapisdk.models.operations.EnterpriseAdminUpdatePreReceiveEnvironmentRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/admin/pre-receive-environments/{pre_receive_environment_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminUpdatePreReceiveEnvironmentResponse res = new openapisdk.models.operations.EnterpriseAdminUpdatePreReceiveEnvironmentResponse() {{
            preReceiveEnvironment = null;
            enterpriseAdminUpdatePreReceiveEnvironment422ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreReceiveEnvironment out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreReceiveEnvironment.class);
                res.preReceiveEnvironment = out;
            }
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJson.class);
                res.enterpriseAdminUpdatePreReceiveEnvironment422ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminUpdatePreReceiveHook - Update a pre-receive hook
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#update-a-pre-receive-hook - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminUpdatePreReceiveHookResponse enterpriseAdminUpdatePreReceiveHook(openapisdk.models.operations.EnterpriseAdminUpdatePreReceiveHookRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/admin/pre-receive-hooks/{pre_receive_hook_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminUpdatePreReceiveHookResponse res = new openapisdk.models.operations.EnterpriseAdminUpdatePreReceiveHookResponse() {{
            preReceiveHook = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreReceiveHook out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreReceiveHook.class);
                res.preReceiveHook = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminUpdatePreReceiveHookEnforcementForOrg - Update pre-receive hook enforcement for an organization
     *
     * For pre-receive hooks which are allowed to be configured at the org level, you can set `enforcement` and `allow_downstream_configuration`
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-an-organization - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgResponse enterpriseAdminUpdatePreReceiveHookEnforcementForOrg(openapisdk.models.operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgResponse res = new openapisdk.models.operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgResponse() {{
            orgPreReceiveHook = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.OrgPreReceiveHook out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.OrgPreReceiveHook.class);
                res.orgPreReceiveHook = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminUpdatePreReceiveHookEnforcementForRepo - Update pre-receive hook enforcement for a repository
     *
     * For pre-receive hooks which are allowed to be configured at the repo level, you can set `enforcement`
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-a-repository - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoResponse enterpriseAdminUpdatePreReceiveHookEnforcementForRepo(openapisdk.models.operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoResponse res = new openapisdk.models.operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoResponse() {{
            repositoryPreReceiveHook = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.RepositoryPreReceiveHook out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.RepositoryPreReceiveHook.class);
                res.repositoryPreReceiveHook = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminUpdateUsernameForUser - Update the username for a user
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#update-the-username-for-a-user - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminUpdateUsernameForUserResponse enterpriseAdminUpdateUsernameForUser(openapisdk.models.operations.EnterpriseAdminUpdateUsernameForUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/admin/users/{username}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminUpdateUsernameForUserResponse res = new openapisdk.models.operations.EnterpriseAdminUpdateUsernameForUserResponse() {{
            enterpriseAdminUpdateUsernameForUser202ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 202) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.EnterpriseAdminUpdateUsernameForUser202ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.EnterpriseAdminUpdateUsernameForUser202ApplicationJson.class);
                res.enterpriseAdminUpdateUsernameForUser202ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminUpgradeLicense - Upgrade a license
     *
     * This API upgrades your license and also triggers the configuration process:
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/enterprise-admin#upgrade-a-license - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminUpgradeLicenseResponse enterpriseAdminUpgradeLicense(openapisdk.models.operations.EnterpriseAdminUpgradeLicenseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/api/upgrade");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminUpgradeLicenseResponse res = new openapisdk.models.operations.EnterpriseAdminUpgradeLicenseResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 202) {
        }

        return res;
    }
	
}