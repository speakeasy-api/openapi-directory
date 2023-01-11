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

public class Apps {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Apps(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * appsAddRepoToInstallation - Add a repository to an app installation
     *
     * Add a single repository to an installation. The authenticated user must have admin access to the repository.
     * 
     * You must use a personal access token (which you can create via the [command line](https://docs.github.com/enterprise-server@2.22/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/enterprise-server@2.22/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#add-a-repository-to-an-app-installation - API method documentation
    **/
    public openapisdk.models.operations.AppsAddRepoToInstallationResponse appsAddRepoToInstallation(openapisdk.models.operations.AppsAddRepoToInstallationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/user/installations/{installation_id}/repositories/{repository_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AppsAddRepoToInstallationResponse res = new openapisdk.models.operations.AppsAddRepoToInstallationResponse() {{
            basicError = null;
            basicError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 304) {
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }

        return res;
    }
	
	
    /**
     * appsCheckAuthorization - Check an authorization
     *
     * **Deprecation Notice:** GitHub Enterprise Server will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).
     * 
     * OAuth applications can use a special API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.22/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#check-an-authorization - API method documentation
    **/
    public openapisdk.models.operations.AppsCheckAuthorizationResponse appsCheckAuthorization(openapisdk.models.operations.AppsCheckAuthorizationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/applications/{client_id}/tokens/{access_token}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AppsCheckAuthorizationResponse res = new openapisdk.models.operations.AppsCheckAuthorizationResponse() {{
            authorization = null;
            basicError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.AppsCheckAuthorizationAuthorization out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AppsCheckAuthorizationAuthorization.class);
                res.authorization = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }

        return res;
    }
	
	
    /**
     * appsCheckToken - Check a token
     *
     * OAuth applications can use a special API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.22/rest/overview/other-authentication-methods#basic-authentication) to use this endpoint, where the username is the OAuth application `client_id` and the password is its `client_secret`. Invalid tokens will return `404 NOT FOUND`.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#check-a-token - API method documentation
    **/
    public openapisdk.models.operations.AppsCheckTokenResponse appsCheckToken(openapisdk.models.operations.AppsCheckTokenRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/applications/{client_id}/token", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AppsCheckTokenResponse res = new openapisdk.models.operations.AppsCheckTokenResponse() {{
            authorization = null;
            basicError = null;
            validationError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Authorization out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Authorization.class);
                res.authorization = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ValidationError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ValidationError.class);
                res.validationError = out;
            }
        }

        return res;
    }
	
	
    /**
     * appsCreateContentAttachment - Create a content attachment
     *
     * Creates an attachment under a content reference URL in the body or comment of an issue or pull request. Use the `id` and `repository` `full_name` of the content reference from the [`content_reference` event](https://docs.github.com/enterprise-server@2.22/webhooks/event-payloads/#content_reference) to create an attachment.
     * 
     * The app must create a content attachment within six hours of the content reference URL being posted. See "[Using content attachments](https://docs.github.com/enterprise-server@2.22/apps/using-content-attachments/)" for details about content attachments.
     * 
     * You must use an [installation access token](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#create-a-content-attachment - API method documentation
    **/
    public openapisdk.models.operations.AppsCreateContentAttachmentResponse appsCreateContentAttachment(openapisdk.models.operations.AppsCreateContentAttachmentRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/content_references/{content_reference_id}/attachments", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AppsCreateContentAttachmentResponse res = new openapisdk.models.operations.AppsCreateContentAttachmentResponse() {{
            contentReferenceAttachment = null;
            basicError = null;
            basicError = null;
            basicError = null;
            appsCreateContentAttachment415ApplicationJSONObject = null;
            validationError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ContentReferenceAttachment out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ContentReferenceAttachment.class);
                res.contentReferenceAttachment = out;
            }
        }
        else if (httpRes.statusCode() == 304) {
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 410) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 415) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.AppsCreateContentAttachment415ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AppsCreateContentAttachment415ApplicationJson.class);
                res.appsCreateContentAttachment415ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ValidationError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ValidationError.class);
                res.validationError = out;
            }
        }

        return res;
    }
	
	
    /**
     * appsCreateFromManifest - Create a GitHub App from a manifest
     *
     * Use this endpoint to complete the handshake necessary when implementing the [GitHub App Manifest flow](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/creating-github-apps-from-a-manifest/). When you create a GitHub App with the manifest flow, you receive a temporary `code` used to retrieve the GitHub App's `id`, `pem` (private key), and `webhook_secret`.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#create-a-github-app-from-a-manifest - API method documentation
    **/
    public openapisdk.models.operations.AppsCreateFromManifestResponse appsCreateFromManifest(openapisdk.models.operations.AppsCreateFromManifestRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/app-manifests/{code}/conversions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AppsCreateFromManifestResponse res = new openapisdk.models.operations.AppsCreateFromManifestResponse() {{
            gitHubApp = null;
            basicError = null;
            validationErrorSimple = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.gitHubApp = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ValidationErrorSimple out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ValidationErrorSimple.class);
                res.validationErrorSimple = out;
            }
        }

        return res;
    }
	
	
    /**
     * appsCreateInstallationAccessToken - Create an installation access token for an app
     *
     * Creates an installation access token that enables a GitHub App to make authenticated API requests for the app's installation on an organization or individual account. Installation tokens expire one hour from the time you create them. Using an expired token produces a status code of `401 - Unauthorized`, and requires creating a new installation token. By default the installation token has access to all repositories that the installation can access. To restrict the access to specific repositories, you can provide the `repository_ids` when creating the token. When you omit `repository_ids`, the response does not contain the `repositories` key.
     * 
     * You must use a [JWT](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/apps/#create-an-installation-access-token-for-an-app - API method documentation
    **/
    public openapisdk.models.operations.AppsCreateInstallationAccessTokenResponse appsCreateInstallationAccessToken(openapisdk.models.operations.AppsCreateInstallationAccessTokenRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/app/installations/{installation_id}/access_tokens", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AppsCreateInstallationAccessTokenResponse res = new openapisdk.models.operations.AppsCreateInstallationAccessTokenResponse() {{
            installationToken = null;
            basicError = null;
            basicError = null;
            basicError = null;
            appsCreateInstallationAccessToken415ApplicationJSONObject = null;
            validationError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.InstallationToken out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.InstallationToken.class);
                res.installationToken = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 415) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.AppsCreateInstallationAccessToken415ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AppsCreateInstallationAccessToken415ApplicationJson.class);
                res.appsCreateInstallationAccessToken415ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ValidationError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ValidationError.class);
                res.validationError = out;
            }
        }

        return res;
    }
	
	
    /**
     * appsDeleteAuthorization - Delete an app authorization
     *
     * OAuth application owners can revoke a grant for their OAuth application and a specific user. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.22/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. You must also provide a valid OAuth `access_token` as an input parameter and the grant for the token's owner will be deleted.
     * Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#delete-an-app-authorization - API method documentation
    **/
    public openapisdk.models.operations.AppsDeleteAuthorizationResponse appsDeleteAuthorization(openapisdk.models.operations.AppsDeleteAuthorizationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/applications/{client_id}/grant", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AppsDeleteAuthorizationResponse res = new openapisdk.models.operations.AppsDeleteAuthorizationResponse() {{
            validationError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ValidationError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ValidationError.class);
                res.validationError = out;
            }
        }

        return res;
    }
	
	
    /**
     * appsDeleteInstallation - Delete an installation for the authenticated app
     *
     * Uninstalls a GitHub App on a user, organization, or business account. If you prefer to temporarily suspend an app's access to your account's resources, then we recommend the "[Suspend an app installation](https://docs.github.com/enterprise-server@2.22/rest/reference/apps/#suspend-an-app-installation)" endpoint.
     * 
     * You must use a [JWT](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#delete-an-installation-for-the-authenticated-app - API method documentation
    **/
    public openapisdk.models.operations.AppsDeleteInstallationResponse appsDeleteInstallation(openapisdk.models.operations.AppsDeleteInstallationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/app/installations/{installation_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AppsDeleteInstallationResponse res = new openapisdk.models.operations.AppsDeleteInstallationResponse() {{
            basicError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }

        return res;
    }
	
	
    /**
     * appsDeleteToken - Delete an app token
     *
     * OAuth application owners can revoke a single token for an OAuth application. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.22/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#delete-an-app-token - API method documentation
    **/
    public openapisdk.models.operations.AppsDeleteTokenResponse appsDeleteToken(openapisdk.models.operations.AppsDeleteTokenRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/applications/{client_id}/token", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AppsDeleteTokenResponse res = new openapisdk.models.operations.AppsDeleteTokenResponse() {{
            validationError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ValidationError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ValidationError.class);
                res.validationError = out;
            }
        }

        return res;
    }
	
	
    /**
     * appsGetAuthenticated - Get the authenticated app
     *
     * Returns the GitHub App associated with the authentication credentials used. To see how many app installations are associated with this GitHub App, see the `installations_count` in the response. For more details about your app's installations, see the "[List installations for the authenticated app](https://docs.github.com/enterprise-server@2.22/rest/reference/apps#list-installations-for-the-authenticated-app)" endpoint.
     * 
     * You must use a [JWT](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#get-the-authenticated-app - API method documentation
    **/
    public openapisdk.models.operations.AppsGetAuthenticatedResponse appsGetAuthenticated() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/app");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AppsGetAuthenticatedResponse res = new openapisdk.models.operations.AppsGetAuthenticatedResponse() {{
            integration = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.integration = out;
            }
        }

        return res;
    }
	
	
    /**
     * appsGetBySlug - Get an app
     *
     * **Note**: The `:app_slug` is just the URL-friendly name of your GitHub App. You can find this on the settings page for your GitHub App (e.g., `https://github.com/settings/apps/:app_slug`).
     * 
     * If the GitHub App you specify is public, you can access this endpoint without authenticating. If the GitHub App you specify is private, you must authenticate with a [personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) or an [installation access token](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/apps/#get-an-app - API method documentation
    **/
    public openapisdk.models.operations.AppsGetBySlugResponse appsGetBySlug(openapisdk.models.operations.AppsGetBySlugRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/apps/{app_slug}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AppsGetBySlugResponse res = new openapisdk.models.operations.AppsGetBySlugResponse() {{
            integration = null;
            basicError = null;
            basicError = null;
            appsGetBySlug415ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.integration = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 415) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.AppsGetBySlug415ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AppsGetBySlug415ApplicationJson.class);
                res.appsGetBySlug415ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * appsGetInstallation - Get an installation for the authenticated app
     *
     * Enables an authenticated GitHub App to find an installation's information using the installation id. The installation's account type (`target_type`) will be either an organization or a user account, depending which account the repository belongs to.
     * 
     * You must use a [JWT](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#get-an-installation-for-the-authenticated-app - API method documentation
    **/
    public openapisdk.models.operations.AppsGetInstallationResponse appsGetInstallation(openapisdk.models.operations.AppsGetInstallationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/app/installations/{installation_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AppsGetInstallationResponse res = new openapisdk.models.operations.AppsGetInstallationResponse() {{
            installationGhes2 = null;
            basicError = null;
            appsGetInstallation415ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.InstallationGhes2 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.InstallationGhes2.class);
                res.installationGhes2 = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 415) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.AppsGetInstallation415ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AppsGetInstallation415ApplicationJson.class);
                res.appsGetInstallation415ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * appsGetOrgInstallation - Get an organization installation for the authenticated app
     *
     * Enables an authenticated GitHub App to find the organization's installation information.
     * 
     * You must use a [JWT](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#get-an-organization-installation-for-the-authenticated-app - API method documentation
    **/
    public openapisdk.models.operations.AppsGetOrgInstallationResponse appsGetOrgInstallation(openapisdk.models.operations.AppsGetOrgInstallationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/installation", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AppsGetOrgInstallationResponse res = new openapisdk.models.operations.AppsGetOrgInstallationResponse() {{
            installationGhes2 = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.InstallationGhes2 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.InstallationGhes2.class);
                res.installationGhes2 = out;
            }
        }

        return res;
    }
	
	
    /**
     * appsGetRepoInstallation - Get a repository installation for the authenticated app
     *
     * Enables an authenticated GitHub App to find the repository's installation information. The installation's account type will be either an organization or a user account, depending which account the repository belongs to.
     * 
     * You must use a [JWT](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#get-a-repository-installation-for-the-authenticated-app - API method documentation
    **/
    public openapisdk.models.operations.AppsGetRepoInstallationResponse appsGetRepoInstallation(openapisdk.models.operations.AppsGetRepoInstallationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/installation", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AppsGetRepoInstallationResponse res = new openapisdk.models.operations.AppsGetRepoInstallationResponse() {{
            installationGhes2 = null;
            basicError = null;
            basicError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.InstallationGhes2 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.InstallationGhes2.class);
                res.installationGhes2 = out;
            }
        }
        else if (httpRes.statusCode() == 301) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }

        return res;
    }
	
	
    /**
     * appsGetUserInstallation - Get a user installation for the authenticated app
     *
     * Enables an authenticated GitHub App to find the user’s installation information.
     * 
     * You must use a [JWT](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#get-a-user-installation-for-the-authenticated-app - API method documentation
    **/
    public openapisdk.models.operations.AppsGetUserInstallationResponse appsGetUserInstallation(openapisdk.models.operations.AppsGetUserInstallationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{username}/installation", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AppsGetUserInstallationResponse res = new openapisdk.models.operations.AppsGetUserInstallationResponse() {{
            installationGhes2 = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.InstallationGhes2 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.InstallationGhes2.class);
                res.installationGhes2 = out;
            }
        }

        return res;
    }
	
	
    /**
     * appsListInstallationReposForAuthenticatedUser - List repositories accessible to the user access token
     *
     * List repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access for an installation.
     * 
     * The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
     * 
     * You must use a [user-to-server OAuth access token](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.
     * 
     * The access the user has to each repository is included in the hash under the `permissions` key.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#list-repositories-accessible-to-the-user-access-token - API method documentation
    **/
    public openapisdk.models.operations.AppsListInstallationReposForAuthenticatedUserResponse appsListInstallationReposForAuthenticatedUser(openapisdk.models.operations.AppsListInstallationReposForAuthenticatedUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/user/installations/{installation_id}/repositories", request.pathParams);
        
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

        openapisdk.models.operations.AppsListInstallationReposForAuthenticatedUserResponse res = new openapisdk.models.operations.AppsListInstallationReposForAuthenticatedUserResponse() {{
            appsListInstallationReposForAuthenticatedUser200ApplicationJSONObject = null;
            basicError = null;
            basicError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.AppsListInstallationReposForAuthenticatedUser200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AppsListInstallationReposForAuthenticatedUser200ApplicationJson.class);
                res.appsListInstallationReposForAuthenticatedUser200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 304) {
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }

        return res;
    }
	
	
    /**
     * appsListInstallations - List installations for the authenticated app
     *
     * You must use a [JWT](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     * 
     * The permissions the installation has are included under the `permissions` key.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#list-installations-for-the-authenticated-app - API method documentation
    **/
    public openapisdk.models.operations.AppsListInstallationsResponse appsListInstallations(openapisdk.models.operations.AppsListInstallationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/app/installations");
        
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

        openapisdk.models.operations.AppsListInstallationsResponse res = new openapisdk.models.operations.AppsListInstallationsResponse() {{
            installationGhes2s = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.InstallationGhes2[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.InstallationGhes2[].class);
                res.installationGhes2s = out;
            }
        }

        return res;
    }
	
	
    /**
     * appsListInstallationsForAuthenticatedUser - List app installations accessible to the user access token
     *
     * Lists installations of your GitHub App that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.
     * 
     * You must use a [user-to-server OAuth access token](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.
     * 
     * The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
     * 
     * You can find the permissions for the installation under the `permissions` key.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#list-app-installations-accessible-to-the-user-access-token - API method documentation
    **/
    public openapisdk.models.operations.AppsListInstallationsForAuthenticatedUserResponse appsListInstallationsForAuthenticatedUser(openapisdk.models.operations.AppsListInstallationsForAuthenticatedUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/user/installations");
        
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

        openapisdk.models.operations.AppsListInstallationsForAuthenticatedUserResponse res = new openapisdk.models.operations.AppsListInstallationsForAuthenticatedUserResponse() {{
            appsListInstallationsForAuthenticatedUser200ApplicationJSONObject = null;
            basicError = null;
            basicError = null;
            appsListInstallationsForAuthenticatedUser415ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.AppsListInstallationsForAuthenticatedUser200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AppsListInstallationsForAuthenticatedUser200ApplicationJson.class);
                res.appsListInstallationsForAuthenticatedUser200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 304) {
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 415) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.AppsListInstallationsForAuthenticatedUser415ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AppsListInstallationsForAuthenticatedUser415ApplicationJson.class);
                res.appsListInstallationsForAuthenticatedUser415ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * appsListReposAccessibleToInstallation - List repositories accessible to the app installation
     *
     * List repositories that an app installation can access.
     * 
     * You must use an [installation access token](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#list-repositories-accessible-to-the-app-installation - API method documentation
    **/
    public openapisdk.models.operations.AppsListReposAccessibleToInstallationResponse appsListReposAccessibleToInstallation(openapisdk.models.operations.AppsListReposAccessibleToInstallationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/installation/repositories");
        
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

        openapisdk.models.operations.AppsListReposAccessibleToInstallationResponse res = new openapisdk.models.operations.AppsListReposAccessibleToInstallationResponse() {{
            appsListReposAccessibleToInstallation200ApplicationJSONObject = null;
            basicError = null;
            basicError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.AppsListReposAccessibleToInstallation200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AppsListReposAccessibleToInstallation200ApplicationJson.class);
                res.appsListReposAccessibleToInstallation200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 304) {
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }

        return res;
    }
	
	
    /**
     * appsRemoveRepoFromInstallation - Remove a repository from an app installation
     *
     * Remove a single repository from an installation. The authenticated user must have admin access to the repository.
     * 
     * You must use a personal access token (which you can create via the [command line](https://docs.github.com/enterprise-server@2.22/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/enterprise-server@2.22/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#remove-a-repository-from-an-app-installation - API method documentation
    **/
    public openapisdk.models.operations.AppsRemoveRepoFromInstallationResponse appsRemoveRepoFromInstallation(openapisdk.models.operations.AppsRemoveRepoFromInstallationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/user/installations/{installation_id}/repositories/{repository_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AppsRemoveRepoFromInstallationResponse res = new openapisdk.models.operations.AppsRemoveRepoFromInstallationResponse() {{
            basicError = null;
            basicError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 304) {
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }

        return res;
    }
	
	
    /**
     * appsResetAuthorization - Reset an authorization
     *
     * **Deprecation Notice:** GitHub Enterprise Server will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).
     * 
     * OAuth applications can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the "token" property in the response because changes take effect immediately. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.22/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#reset-an-authorization - API method documentation
    **/
    public openapisdk.models.operations.AppsResetAuthorizationResponse appsResetAuthorization(openapisdk.models.operations.AppsResetAuthorizationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/applications/{client_id}/tokens/{access_token}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AppsResetAuthorizationResponse res = new openapisdk.models.operations.AppsResetAuthorizationResponse() {{
            authorization = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
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
     * appsResetToken - Reset a token
     *
     * OAuth applications can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the "token" property in the response because changes take effect immediately. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.22/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#reset-a-token - API method documentation
    **/
    public openapisdk.models.operations.AppsResetTokenResponse appsResetToken(openapisdk.models.operations.AppsResetTokenRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/applications/{client_id}/token", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AppsResetTokenResponse res = new openapisdk.models.operations.AppsResetTokenResponse() {{
            authorization = null;
            validationError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Authorization out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Authorization.class);
                res.authorization = out;
            }
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ValidationError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ValidationError.class);
                res.validationError = out;
            }
        }

        return res;
    }
	
	
    /**
     * appsRevokeAuthorizationForApplication - Revoke an authorization for an application
     *
     * **Deprecation Notice:** GitHub Enterprise Server will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).
     * 
     * OAuth application owners can revoke a single token for an OAuth application. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.22/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#revoke-an-authorization-for-an-application - API method documentation
    **/
    public openapisdk.models.operations.AppsRevokeAuthorizationForApplicationResponse appsRevokeAuthorizationForApplication(openapisdk.models.operations.AppsRevokeAuthorizationForApplicationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/applications/{client_id}/tokens/{access_token}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AppsRevokeAuthorizationForApplicationResponse res = new openapisdk.models.operations.AppsRevokeAuthorizationForApplicationResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * appsRevokeGrantForApplication - Revoke a grant for an application
     *
     * **Deprecation Notice:** GitHub Enterprise Server will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).
     * 
     * OAuth application owners can revoke a grant for their OAuth application and a specific user. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.22/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. You must also provide a valid token as `:access_token` and the grant for the token's owner will be deleted.
     * 
     * Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the Applications settings page under "Authorized OAuth Apps" on GitHub Enterprise Server](https://github.com/settings/applications#authorized).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#revoke-a-grant-for-an-application - API method documentation
    **/
    public openapisdk.models.operations.AppsRevokeGrantForApplicationResponse appsRevokeGrantForApplication(openapisdk.models.operations.AppsRevokeGrantForApplicationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/applications/{client_id}/grants/{access_token}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AppsRevokeGrantForApplicationResponse res = new openapisdk.models.operations.AppsRevokeGrantForApplicationResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * appsRevokeInstallationAccessToken - Revoke an installation access token
     *
     * Revokes the installation token you're using to authenticate as an installation and access this endpoint.
     * 
     * Once an installation token is revoked, the token is invalidated and cannot be used. Other endpoints that require the revoked installation token must have a new installation token to work. You can create a new token using the "[Create an installation access token for an app](https://docs.github.com/enterprise-server@2.22/rest/reference/apps#create-an-installation-access-token-for-an-app)" endpoint.
     * 
     * You must use an [installation access token](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#revoke-an-installation-access-token - API method documentation
    **/
    public openapisdk.models.operations.AppsRevokeInstallationAccessTokenResponse appsRevokeInstallationAccessToken() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/installation/token");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AppsRevokeInstallationAccessTokenResponse res = new openapisdk.models.operations.AppsRevokeInstallationAccessTokenResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * appsSuspendInstallation - Suspend an app installation
     *
     * Suspends a GitHub App on a user, organization, or business account, which blocks the app from accessing the account's resources. When a GitHub App is suspended, the app's access to the GitHub Enterprise Server API or webhook events is blocked for that account.
     * 
     * You must use a [JWT](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#suspend-an-app-installation - API method documentation
    **/
    public openapisdk.models.operations.AppsSuspendInstallationResponse appsSuspendInstallation(openapisdk.models.operations.AppsSuspendInstallationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/app/installations/{installation_id}/suspended", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AppsSuspendInstallationResponse res = new openapisdk.models.operations.AppsSuspendInstallationResponse() {{
            basicError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }

        return res;
    }
	
	
    /**
     * appsUnsuspendInstallation - Unsuspend an app installation
     *
     * Removes a GitHub App installation suspension.
     * 
     * You must use a [JWT](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#unsuspend-an-app-installation - API method documentation
    **/
    public openapisdk.models.operations.AppsUnsuspendInstallationResponse appsUnsuspendInstallation(openapisdk.models.operations.AppsUnsuspendInstallationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/app/installations/{installation_id}/suspended", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AppsUnsuspendInstallationResponse res = new openapisdk.models.operations.AppsUnsuspendInstallationResponse() {{
            basicError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }

        return res;
    }
	
}