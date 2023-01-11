package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;

public class Properties {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Properties(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteCommitHostedPropertyValue - Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a commit.
    **/
    public openapisdk.models.operations.DeleteCommitHostedPropertyValueResponse deleteCommitHostedPropertyValue(openapisdk.models.operations.DeleteCommitHostedPropertyValueRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteCommitHostedPropertyValueResponse res = new openapisdk.models.operations.DeleteCommitHostedPropertyValueResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deletePullRequestHostedPropertyValue - Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a pull request.
    **/
    public openapisdk.models.operations.DeletePullRequestHostedPropertyValueResponse deletePullRequestHostedPropertyValue(openapisdk.models.operations.DeletePullRequestHostedPropertyValueRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeletePullRequestHostedPropertyValueResponse res = new openapisdk.models.operations.DeletePullRequestHostedPropertyValueResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteRepositoryHostedPropertyValue - Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a repository.
    **/
    public openapisdk.models.operations.DeleteRepositoryHostedPropertyValueResponse deleteRepositoryHostedPropertyValue(openapisdk.models.operations.DeleteRepositoryHostedPropertyValueRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteRepositoryHostedPropertyValueResponse res = new openapisdk.models.operations.DeleteRepositoryHostedPropertyValueResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteUserHostedPropertyValue - Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a user.
    **/
    public openapisdk.models.operations.DeleteUserHostedPropertyValueResponse deleteUserHostedPropertyValue(openapisdk.models.operations.DeleteUserHostedPropertyValueRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{selected_user}/properties/{app_key}/{property_name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteUserHostedPropertyValueResponse res = new openapisdk.models.operations.DeleteUserHostedPropertyValueResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * getCommitHostedPropertyValue - Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a commit.
    **/
    public openapisdk.models.operations.GetCommitHostedPropertyValueResponse getCommitHostedPropertyValue(openapisdk.models.operations.GetCommitHostedPropertyValueRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetCommitHostedPropertyValueResponse res = new openapisdk.models.operations.GetCommitHostedPropertyValueResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * getPullRequestHostedPropertyValue - Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a pull request.
    **/
    public openapisdk.models.operations.GetPullRequestHostedPropertyValueResponse getPullRequestHostedPropertyValue(openapisdk.models.operations.GetPullRequestHostedPropertyValueRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPullRequestHostedPropertyValueResponse res = new openapisdk.models.operations.GetPullRequestHostedPropertyValueResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * getRepositoryHostedPropertyValue - Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a repository.
    **/
    public openapisdk.models.operations.GetRepositoryHostedPropertyValueResponse getRepositoryHostedPropertyValue(openapisdk.models.operations.GetRepositoryHostedPropertyValueRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoryHostedPropertyValueResponse res = new openapisdk.models.operations.GetRepositoryHostedPropertyValueResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * retrieveUserHostedPropertyValue - Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a user.
    **/
    public openapisdk.models.operations.RetrieveUserHostedPropertyValueResponse retrieveUserHostedPropertyValue(openapisdk.models.operations.RetrieveUserHostedPropertyValueRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{selected_user}/properties/{app_key}/{property_name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RetrieveUserHostedPropertyValueResponse res = new openapisdk.models.operations.RetrieveUserHostedPropertyValueResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * updateCommitHostedPropertyValue - Update an [application property](/cloud/bitbucket/application-properties/) value stored against a commit.
    **/
    public openapisdk.models.operations.UpdateCommitHostedPropertyValueResponse updateCommitHostedPropertyValue(openapisdk.models.operations.UpdateCommitHostedPropertyValueRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateCommitHostedPropertyValueResponse res = new openapisdk.models.operations.UpdateCommitHostedPropertyValueResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * updatePullRequestHostedPropertyValue - Update an [application property](/cloud/bitbucket/application-properties/) value stored against a pull request.
    **/
    public openapisdk.models.operations.UpdatePullRequestHostedPropertyValueResponse updatePullRequestHostedPropertyValue(openapisdk.models.operations.UpdatePullRequestHostedPropertyValueRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdatePullRequestHostedPropertyValueResponse res = new openapisdk.models.operations.UpdatePullRequestHostedPropertyValueResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * updateRepositoryHostedPropertyValue - Update an [application property](/cloud/bitbucket/application-properties/) value stored against a repository.
    **/
    public openapisdk.models.operations.UpdateRepositoryHostedPropertyValueResponse updateRepositoryHostedPropertyValue(openapisdk.models.operations.UpdateRepositoryHostedPropertyValueRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateRepositoryHostedPropertyValueResponse res = new openapisdk.models.operations.UpdateRepositoryHostedPropertyValueResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * updateUserHostedPropertyValue - Update an [application property](/cloud/bitbucket/application-properties/) value stored against a user.
    **/
    public openapisdk.models.operations.UpdateUserHostedPropertyValueResponse updateUserHostedPropertyValue(openapisdk.models.operations.UpdateUserHostedPropertyValueRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{selected_user}/properties/{app_key}/{property_name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateUserHostedPropertyValueResponse res = new openapisdk.models.operations.UpdateUserHostedPropertyValueResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
}