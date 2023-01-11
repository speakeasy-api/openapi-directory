package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class Interactions {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Interactions(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * interactionsGetRestrictionsForAuthenticatedUser - Get interaction restrictions for your public repositories
     *
     * Shows which type of GitHub user can interact with your public repositories and when the restriction expires. If there are no restrictions, you will see an empty response.
     *
     * https://docs.github.com/rest/reference/interactions#get-interaction-restrictions-for-your-public-repositories - API method documentation
    **/
    public openapisdk.models.operations.InteractionsGetRestrictionsForAuthenticatedUserResponse interactionsGetRestrictionsForAuthenticatedUser() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/user/interaction-limits");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.InteractionsGetRestrictionsForAuthenticatedUserResponse res = new openapisdk.models.operations.InteractionsGetRestrictionsForAuthenticatedUserResponse() {{
            interactionLimitResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.InteractionLimitResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.InteractionLimitResponse.class);
                res.interactionLimitResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * interactionsGetRestrictionsForOrg - Get interaction restrictions for an organization
     *
     * Shows which type of GitHub user can interact with this organization and when the restriction expires. If there is no restrictions, you will see an empty response.
     *
     * https://docs.github.com/rest/reference/interactions#get-interaction-restrictions-for-an-organization - API method documentation
    **/
    public openapisdk.models.operations.InteractionsGetRestrictionsForOrgResponse interactionsGetRestrictionsForOrg(openapisdk.models.operations.InteractionsGetRestrictionsForOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/interaction-limits", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.InteractionsGetRestrictionsForOrgResponse res = new openapisdk.models.operations.InteractionsGetRestrictionsForOrgResponse() {{
            interactionLimitResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.InteractionLimitResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.InteractionLimitResponse.class);
                res.interactionLimitResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * interactionsGetRestrictionsForRepo - Get interaction restrictions for a repository
     *
     * Shows which type of GitHub user can interact with this repository and when the restriction expires. If there are no restrictions, you will see an empty response.
     *
     * https://docs.github.com/rest/reference/interactions#get-interaction-restrictions-for-a-repository - API method documentation
    **/
    public openapisdk.models.operations.InteractionsGetRestrictionsForRepoResponse interactionsGetRestrictionsForRepo(openapisdk.models.operations.InteractionsGetRestrictionsForRepoRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/interaction-limits", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.InteractionsGetRestrictionsForRepoResponse res = new openapisdk.models.operations.InteractionsGetRestrictionsForRepoResponse() {{
            interactionLimitResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.InteractionLimitResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.InteractionLimitResponse.class);
                res.interactionLimitResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * interactionsRemoveRestrictionsForAuthenticatedUser - Remove interaction restrictions from your public repositories
     *
     * Removes any interaction restrictions from your public repositories.
     *
     * https://docs.github.com/rest/reference/interactions#remove-interaction-restrictions-from-your-public-repositories - API method documentation
    **/
    public openapisdk.models.operations.InteractionsRemoveRestrictionsForAuthenticatedUserResponse interactionsRemoveRestrictionsForAuthenticatedUser() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/user/interaction-limits");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.InteractionsRemoveRestrictionsForAuthenticatedUserResponse res = new openapisdk.models.operations.InteractionsRemoveRestrictionsForAuthenticatedUserResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * interactionsRemoveRestrictionsForOrg - Remove interaction restrictions for an organization
     *
     * Removes all interaction restrictions from public repositories in the given organization. You must be an organization owner to remove restrictions.
     *
     * https://docs.github.com/rest/reference/interactions#remove-interaction-restrictions-for-an-organization - API method documentation
    **/
    public openapisdk.models.operations.InteractionsRemoveRestrictionsForOrgResponse interactionsRemoveRestrictionsForOrg(openapisdk.models.operations.InteractionsRemoveRestrictionsForOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/interaction-limits", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.InteractionsRemoveRestrictionsForOrgResponse res = new openapisdk.models.operations.InteractionsRemoveRestrictionsForOrgResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * interactionsRemoveRestrictionsForRepo - Remove interaction restrictions for a repository
     *
     * Removes all interaction restrictions from the given repository. You must have owner or admin access to remove restrictions. If the interaction limit is set for the user or organization that owns this repository, you will receive a `409 Conflict` response and will not be able to use this endpoint to change the interaction limit for a single repository.
     *
     * https://docs.github.com/rest/reference/interactions#remove-interaction-restrictions-for-a-repository - API method documentation
    **/
    public openapisdk.models.operations.InteractionsRemoveRestrictionsForRepoResponse interactionsRemoveRestrictionsForRepo(openapisdk.models.operations.InteractionsRemoveRestrictionsForRepoRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/interaction-limits", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.InteractionsRemoveRestrictionsForRepoResponse res = new openapisdk.models.operations.InteractionsRemoveRestrictionsForRepoResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 409) {
        }

        return res;
    }
	
	
    /**
     * interactionsSetRestrictionsForAuthenticatedUser - Set interaction restrictions for your public repositories
     *
     * Temporarily restricts which type of GitHub user can interact with your public repositories. Setting the interaction limit at the user level will overwrite any interaction limits that are set for individual repositories owned by the user.
     *
     * https://docs.github.com/rest/reference/interactions#set-interaction-restrictions-for-your-public-repositories - API method documentation
    **/
    public openapisdk.models.operations.InteractionsSetRestrictionsForAuthenticatedUserResponse interactionsSetRestrictionsForAuthenticatedUser(openapisdk.models.operations.InteractionsSetRestrictionsForAuthenticatedUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/user/interaction-limits");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.InteractionsSetRestrictionsForAuthenticatedUserResponse res = new openapisdk.models.operations.InteractionsSetRestrictionsForAuthenticatedUserResponse() {{
            interactionLimitResponse = null;
            validationError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.InteractionLimitResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.InteractionLimitResponse.class);
                res.interactionLimitResponse = out;
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
     * interactionsSetRestrictionsForOrg - Set interaction restrictions for an organization
     *
     * Temporarily restricts interactions to a certain type of GitHub user in any public repository in the given organization. You must be an organization owner to set these restrictions. Setting the interaction limit at the organization level will overwrite any interaction limits that are set for individual repositories owned by the organization.
     *
     * https://docs.github.com/rest/reference/interactions#set-interaction-restrictions-for-an-organization - API method documentation
    **/
    public openapisdk.models.operations.InteractionsSetRestrictionsForOrgResponse interactionsSetRestrictionsForOrg(openapisdk.models.operations.InteractionsSetRestrictionsForOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/interaction-limits", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.InteractionsSetRestrictionsForOrgResponse res = new openapisdk.models.operations.InteractionsSetRestrictionsForOrgResponse() {{
            interactionLimitResponse = null;
            validationError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.InteractionLimitResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.InteractionLimitResponse.class);
                res.interactionLimitResponse = out;
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
     * interactionsSetRestrictionsForRepo - Set interaction restrictions for a repository
     *
     * Temporarily restricts interactions to a certain type of GitHub user within the given repository. You must have owner or admin access to set these restrictions. If an interaction limit is set for the user or organization that owns this repository, you will receive a `409 Conflict` response and will not be able to use this endpoint to change the interaction limit for a single repository.
     *
     * https://docs.github.com/rest/reference/interactions#set-interaction-restrictions-for-a-repository - API method documentation
    **/
    public openapisdk.models.operations.InteractionsSetRestrictionsForRepoResponse interactionsSetRestrictionsForRepo(openapisdk.models.operations.InteractionsSetRestrictionsForRepoRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/interaction-limits", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.InteractionsSetRestrictionsForRepoResponse res = new openapisdk.models.operations.InteractionsSetRestrictionsForRepoResponse() {{
            interactionLimitResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.InteractionLimitResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.InteractionLimitResponse.class);
                res.interactionLimitResponse = out;
            }
        }
        else if (httpRes.statusCode() == 409) {
        }

        return res;
    }
	
}