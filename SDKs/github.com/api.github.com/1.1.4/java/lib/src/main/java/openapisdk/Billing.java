package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;

public class Billing {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Billing(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * billingGetGithubActionsBillingGhe - Get GitHub Actions billing for an enterprise
     *
     * Gets the summary of the free and paid GitHub Actions minutes used.
     * 
     * Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
     * 
     * The authenticated user must be an enterprise admin.
     *
     * https://docs.github.com/rest/reference/billing/#get-github-actions-billing-for-an-enterprise - API method documentation
    **/
    public openapisdk.models.operations.BillingGetGithubActionsBillingGheResponse billingGetGithubActionsBillingGhe(openapisdk.models.operations.BillingGetGithubActionsBillingGheRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/enterprises/{enterprise}/settings/billing/actions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.BillingGetGithubActionsBillingGheResponse res = new openapisdk.models.operations.BillingGetGithubActionsBillingGheResponse() {{
            actionsBillingUsage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ActionsBillingUsage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ActionsBillingUsage.class);
                res.actionsBillingUsage = out;
            }
        }

        return res;
    }
	
	
    /**
     * billingGetGithubActionsBillingOrg - Get GitHub Actions billing for an organization
     *
     * Gets the summary of the free and paid GitHub Actions minutes used.
     * 
     * Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage returned includes any minute multipliers for macOS and Windows runners, and is rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
     * 
     * Access tokens must have the `repo` or `admin:org` scope.
     *
     * https://docs.github.com/rest/reference/billing/#get-github-actions-billing-for-an-organization - API method documentation
    **/
    public openapisdk.models.operations.BillingGetGithubActionsBillingOrgResponse billingGetGithubActionsBillingOrg(openapisdk.models.operations.BillingGetGithubActionsBillingOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/settings/billing/actions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.BillingGetGithubActionsBillingOrgResponse res = new openapisdk.models.operations.BillingGetGithubActionsBillingOrgResponse() {{
            actionsBillingUsage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ActionsBillingUsage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ActionsBillingUsage.class);
                res.actionsBillingUsage = out;
            }
        }

        return res;
    }
	
	
    /**
     * billingGetGithubActionsBillingUser - Get GitHub Actions billing for a user
     *
     * Gets the summary of the free and paid GitHub Actions minutes used.
     * 
     * Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage returned includes any minute multipliers for macOS and Windows runners, and is rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
     * 
     * Access tokens must have the `user` scope.
     *
     * https://docs.github.com/rest/reference/billing/#get-github-actions-billing-for-a-user - API method documentation
    **/
    public openapisdk.models.operations.BillingGetGithubActionsBillingUserResponse billingGetGithubActionsBillingUser(openapisdk.models.operations.BillingGetGithubActionsBillingUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{username}/settings/billing/actions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.BillingGetGithubActionsBillingUserResponse res = new openapisdk.models.operations.BillingGetGithubActionsBillingUserResponse() {{
            actionsBillingUsage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ActionsBillingUsage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ActionsBillingUsage.class);
                res.actionsBillingUsage = out;
            }
        }

        return res;
    }
	
	
    /**
     * billingGetGithubPackagesBillingGhe - Get GitHub Packages billing for an enterprise
     *
     * Gets the free and paid storage used for GitHub Packages in gigabytes.
     * 
     * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
     * 
     * The authenticated user must be an enterprise admin.
     *
     * https://docs.github.com/rest/reference/billing/#get-github-packages-billing-for-an-enterprise - API method documentation
    **/
    public openapisdk.models.operations.BillingGetGithubPackagesBillingGheResponse billingGetGithubPackagesBillingGhe(openapisdk.models.operations.BillingGetGithubPackagesBillingGheRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/enterprises/{enterprise}/settings/billing/packages", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.BillingGetGithubPackagesBillingGheResponse res = new openapisdk.models.operations.BillingGetGithubPackagesBillingGheResponse() {{
            packagesBillingUsage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PackagesBillingUsage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PackagesBillingUsage.class);
                res.packagesBillingUsage = out;
            }
        }

        return res;
    }
	
	
    /**
     * billingGetGithubPackagesBillingOrg - Get GitHub Packages billing for an organization
     *
     * Gets the free and paid storage usued for GitHub Packages in gigabytes.
     * 
     * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
     * 
     * Access tokens must have the `repo` or `admin:org` scope.
     *
     * https://docs.github.com/rest/reference/billing/#get-github-packages-billing-for-an-organization - API method documentation
    **/
    public openapisdk.models.operations.BillingGetGithubPackagesBillingOrgResponse billingGetGithubPackagesBillingOrg(openapisdk.models.operations.BillingGetGithubPackagesBillingOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/settings/billing/packages", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.BillingGetGithubPackagesBillingOrgResponse res = new openapisdk.models.operations.BillingGetGithubPackagesBillingOrgResponse() {{
            packagesBillingUsage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PackagesBillingUsage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PackagesBillingUsage.class);
                res.packagesBillingUsage = out;
            }
        }

        return res;
    }
	
	
    /**
     * billingGetGithubPackagesBillingUser - Get GitHub Packages billing for a user
     *
     * Gets the free and paid storage used for GitHub Packages in gigabytes.
     * 
     * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
     * 
     * Access tokens must have the `user` scope.
     *
     * https://docs.github.com/rest/reference/billing/#get-github-packages-billing-for-a-user - API method documentation
    **/
    public openapisdk.models.operations.BillingGetGithubPackagesBillingUserResponse billingGetGithubPackagesBillingUser(openapisdk.models.operations.BillingGetGithubPackagesBillingUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{username}/settings/billing/packages", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.BillingGetGithubPackagesBillingUserResponse res = new openapisdk.models.operations.BillingGetGithubPackagesBillingUserResponse() {{
            packagesBillingUsage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PackagesBillingUsage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PackagesBillingUsage.class);
                res.packagesBillingUsage = out;
            }
        }

        return res;
    }
	
	
    /**
     * billingGetSharedStorageBillingGhe - Get shared storage billing for an enterprise
     *
     * Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.
     * 
     * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
     * 
     * The authenticated user must be an enterprise admin.
     *
     * https://docs.github.com/rest/reference/billing/#get-shared-storage-billing-for-an-enterprise - API method documentation
    **/
    public openapisdk.models.operations.BillingGetSharedStorageBillingGheResponse billingGetSharedStorageBillingGhe(openapisdk.models.operations.BillingGetSharedStorageBillingGheRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/enterprises/{enterprise}/settings/billing/shared-storage", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.BillingGetSharedStorageBillingGheResponse res = new openapisdk.models.operations.BillingGetSharedStorageBillingGheResponse() {{
            combinedBillingUsage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CombinedBillingUsage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CombinedBillingUsage.class);
                res.combinedBillingUsage = out;
            }
        }

        return res;
    }
	
	
    /**
     * billingGetSharedStorageBillingOrg - Get shared storage billing for an organization
     *
     * Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.
     * 
     * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
     * 
     * Access tokens must have the `repo` or `admin:org` scope.
     *
     * https://docs.github.com/rest/reference/billing/#get-shared-storage-billing-for-an-organization - API method documentation
    **/
    public openapisdk.models.operations.BillingGetSharedStorageBillingOrgResponse billingGetSharedStorageBillingOrg(openapisdk.models.operations.BillingGetSharedStorageBillingOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/settings/billing/shared-storage", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.BillingGetSharedStorageBillingOrgResponse res = new openapisdk.models.operations.BillingGetSharedStorageBillingOrgResponse() {{
            combinedBillingUsage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CombinedBillingUsage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CombinedBillingUsage.class);
                res.combinedBillingUsage = out;
            }
        }

        return res;
    }
	
	
    /**
     * billingGetSharedStorageBillingUser - Get shared storage billing for a user
     *
     * Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.
     * 
     * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
     * 
     * Access tokens must have the `user` scope.
     *
     * https://docs.github.com/rest/reference/billing/#get-shared-storage-billing-for-a-user - API method documentation
    **/
    public openapisdk.models.operations.BillingGetSharedStorageBillingUserResponse billingGetSharedStorageBillingUser(openapisdk.models.operations.BillingGetSharedStorageBillingUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{username}/settings/billing/shared-storage", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.BillingGetSharedStorageBillingUserResponse res = new openapisdk.models.operations.BillingGetSharedStorageBillingUserResponse() {{
            combinedBillingUsage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CombinedBillingUsage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CombinedBillingUsage.class);
                res.combinedBillingUsage = out;
            }
        }

        return res;
    }
	
}