package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Packages {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Packages(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * packagesDeletePackageForAuthenticatedUser - Delete a package for the authenticated user
     *
     * Deletes a package owned by the authenticated user. You cannot delete a public package if any version of the package has more than 25 downloads. In this scenario, contact GitHub support for further assistance.
     * 
     * To use this endpoint, you must authenticate using an access token with the `packages:read` and `packages:delete` scope.
     * If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#delete-a-package-for-the-authenticated-user - API method documentation
    **/
    public openapisdk.models.operations.PackagesDeletePackageForAuthenticatedUserResponse packagesDeletePackageForAuthenticatedUser(openapisdk.models.operations.PackagesDeletePackageForAuthenticatedUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/user/packages/{package_type}/{package_name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PackagesDeletePackageForAuthenticatedUserResponse res = new openapisdk.models.operations.PackagesDeletePackageForAuthenticatedUserResponse() {{
            basicError = null;
            basicError = null;
            basicError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
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

        return res;
    }
	
	
    /**
     * packagesDeletePackageForOrg - Delete a package for an organization
     *
     * Deletes an entire package in an organization. You cannot delete a public package if any version of the package has more than 25 downloads. In this scenario, contact GitHub support for further assistance.
     * 
     * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `packages:read` scope. In addition:
     * - If `package_type` is not `container`, your token must also include the `repo` scope.
     * - If `package_type` is `container`, you must also have admin permissions to the container you want to delete.
     *
     * https://docs.github.com/rest/reference/packages#delete-a-package-for-an-organization - API method documentation
    **/
    public openapisdk.models.operations.PackagesDeletePackageForOrgResponse packagesDeletePackageForOrg(openapisdk.models.operations.PackagesDeletePackageForOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/packages/{package_type}/{package_name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PackagesDeletePackageForOrgResponse res = new openapisdk.models.operations.PackagesDeletePackageForOrgResponse() {{
            basicError = null;
            basicError = null;
            basicError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
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

        return res;
    }
	
	
    /**
     * packagesDeletePackageVersionForAuthenticatedUser - Delete a package version for the authenticated user
     *
     * Deletes a specific package version for a package owned by the authenticated user.  If the package is public and the package version has more than 25 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance.
     * 
     * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `packages:read` scope.
     * If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#delete-a-package-version-for-the-authenticated-user - API method documentation
    **/
    public openapisdk.models.operations.PackagesDeletePackageVersionForAuthenticatedUserResponse packagesDeletePackageVersionForAuthenticatedUser(openapisdk.models.operations.PackagesDeletePackageVersionForAuthenticatedUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/user/packages/{package_type}/{package_name}/versions/{package_version_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PackagesDeletePackageVersionForAuthenticatedUserResponse res = new openapisdk.models.operations.PackagesDeletePackageVersionForAuthenticatedUserResponse() {{
            basicError = null;
            basicError = null;
            basicError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
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

        return res;
    }
	
	
    /**
     * packagesDeletePackageVersionForOrg - Delete package version for an organization
     *
     * Deletes a specific package version in an organization. If the package is public and the package version has more than 25 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance.
     * 
     * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `packages:read` scope. In addition:
     * - If `package_type` is not `container`, your token must also include the `repo` scope.
     * - If `package_type` is `container`, you must also have admin permissions to the container you want to delete.
     *
     * https://docs.github.com/rest/reference/packages#delete-a-package-version-for-an-organization - API method documentation
    **/
    public openapisdk.models.operations.PackagesDeletePackageVersionForOrgResponse packagesDeletePackageVersionForOrg(openapisdk.models.operations.PackagesDeletePackageVersionForOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PackagesDeletePackageVersionForOrgResponse res = new openapisdk.models.operations.PackagesDeletePackageVersionForOrgResponse() {{
            basicError = null;
            basicError = null;
            basicError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
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

        return res;
    }
	
	
    /**
     * packagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUser - Get all package versions for a package owned by the authenticated user
     *
     * Returns all package versions for a package owned by the authenticated user.
     * 
     * To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
     * If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#get-all-package-versions-for-a-package-owned-by-the-authenticated-user - API method documentation
    **/
    public openapisdk.models.operations.PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserResponse packagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUser(openapisdk.models.operations.PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/user/packages/{package_type}/{package_name}/versions", request.pathParams);
        
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

        openapisdk.models.operations.PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserResponse res = new openapisdk.models.operations.PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserResponse() {{
            packageVersions = null;
            basicError = null;
            basicError = null;
            basicError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PackageVersion[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PackageVersion[].class);
                res.packageVersions = out;
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

        return res;
    }
	
	
    /**
     * packagesGetAllPackageVersionsForPackageOwnedByOrg - Get all package versions for a package owned by an organization
     *
     * Returns all package versions for a package owned by an organization.
     * 
     * To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
     * If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#get-all-package-versions-for-a-package-owned-by-the-authenticated-user - API method documentation
    **/
    public openapisdk.models.operations.PackagesGetAllPackageVersionsForPackageOwnedByOrgResponse packagesGetAllPackageVersionsForPackageOwnedByOrg(openapisdk.models.operations.PackagesGetAllPackageVersionsForPackageOwnedByOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/packages/{package_type}/{package_name}/versions", request.pathParams);
        
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

        openapisdk.models.operations.PackagesGetAllPackageVersionsForPackageOwnedByOrgResponse res = new openapisdk.models.operations.PackagesGetAllPackageVersionsForPackageOwnedByOrgResponse() {{
            packageVersions = null;
            basicError = null;
            basicError = null;
            basicError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PackageVersion[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PackageVersion[].class);
                res.packageVersions = out;
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

        return res;
    }
	
	
    /**
     * packagesGetAllPackageVersionsForPackageOwnedByUser - Get all package versions for a package owned by a user
     *
     * Returns all package versions for a public package owned by a specified user.
     * 
     * To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
     * If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#get-all-package-versions-for-a-package-owned-by-a-user - API method documentation
    **/
    public openapisdk.models.operations.PackagesGetAllPackageVersionsForPackageOwnedByUserResponse packagesGetAllPackageVersionsForPackageOwnedByUser(openapisdk.models.operations.PackagesGetAllPackageVersionsForPackageOwnedByUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{username}/packages/{package_type}/{package_name}/versions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PackagesGetAllPackageVersionsForPackageOwnedByUserResponse res = new openapisdk.models.operations.PackagesGetAllPackageVersionsForPackageOwnedByUserResponse() {{
            packageVersions = null;
            basicError = null;
            basicError = null;
            basicError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PackageVersion[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PackageVersion[].class);
                res.packageVersions = out;
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

        return res;
    }
	
	
    /**
     * packagesGetPackageForAuthenticatedUser - Get a package for the authenticated user
     *
     * Gets a specific package for a package owned by the authenticated user.
     * 
     * To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
     * If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#get-a-package-for-the-authenticated-user - API method documentation
    **/
    public openapisdk.models.operations.PackagesGetPackageForAuthenticatedUserResponse packagesGetPackageForAuthenticatedUser(openapisdk.models.operations.PackagesGetPackageForAuthenticatedUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/user/packages/{package_type}/{package_name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PackagesGetPackageForAuthenticatedUserResponse res = new openapisdk.models.operations.PackagesGetPackageForAuthenticatedUserResponse() {{
            package_ = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Package out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Package.class);
                res.package_ = out;
            }
        }

        return res;
    }
	
	
    /**
     * packagesGetPackageForOrganization - Get a package for an organization
     *
     * Gets a specific package in an organization.
     * 
     * To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
     * If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#get-a-package-for-an-organization - API method documentation
    **/
    public openapisdk.models.operations.PackagesGetPackageForOrganizationResponse packagesGetPackageForOrganization(openapisdk.models.operations.PackagesGetPackageForOrganizationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/packages/{package_type}/{package_name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PackagesGetPackageForOrganizationResponse res = new openapisdk.models.operations.PackagesGetPackageForOrganizationResponse() {{
            package_ = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Package out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Package.class);
                res.package_ = out;
            }
        }

        return res;
    }
	
	
    /**
     * packagesGetPackageForUser - Get a package for a user
     *
     * Gets a specific package metadata for a public package owned by a user.
     * 
     * To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
     * If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#get-a-package-for-a-user - API method documentation
    **/
    public openapisdk.models.operations.PackagesGetPackageForUserResponse packagesGetPackageForUser(openapisdk.models.operations.PackagesGetPackageForUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{username}/packages/{package_type}/{package_name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PackagesGetPackageForUserResponse res = new openapisdk.models.operations.PackagesGetPackageForUserResponse() {{
            package_ = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Package out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Package.class);
                res.package_ = out;
            }
        }

        return res;
    }
	
	
    /**
     * packagesGetPackageVersionForAuthenticatedUser - Get a package version for the authenticated user
     *
     * Gets a specific package version for a package owned by the authenticated user.
     * 
     * To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
     * If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#get-a-package-version-for-the-authenticated-user - API method documentation
    **/
    public openapisdk.models.operations.PackagesGetPackageVersionForAuthenticatedUserResponse packagesGetPackageVersionForAuthenticatedUser(openapisdk.models.operations.PackagesGetPackageVersionForAuthenticatedUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/user/packages/{package_type}/{package_name}/versions/{package_version_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PackagesGetPackageVersionForAuthenticatedUserResponse res = new openapisdk.models.operations.PackagesGetPackageVersionForAuthenticatedUserResponse() {{
            packageVersion = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PackageVersion out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PackageVersion.class);
                res.packageVersion = out;
            }
        }

        return res;
    }
	
	
    /**
     * packagesGetPackageVersionForOrganization - Get a package version for an organization
     *
     * Gets a specific package version in an organization.
     * 
     * You must authenticate using an access token with the `packages:read` scope.
     * If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#get-a-package-version-for-an-organization - API method documentation
    **/
    public openapisdk.models.operations.PackagesGetPackageVersionForOrganizationResponse packagesGetPackageVersionForOrganization(openapisdk.models.operations.PackagesGetPackageVersionForOrganizationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PackagesGetPackageVersionForOrganizationResponse res = new openapisdk.models.operations.PackagesGetPackageVersionForOrganizationResponse() {{
            packageVersion = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PackageVersion out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PackageVersion.class);
                res.packageVersion = out;
            }
        }

        return res;
    }
	
	
    /**
     * packagesGetPackageVersionForUser - Get a package version for a user
     *
     * Gets a specific package version for a public package owned by a specified user.
     * 
     * At this time, to use this endpoint, you must authenticate using an access token with the `packages:read` scope.
     * If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#get-a-package-version-for-a-user - API method documentation
    **/
    public openapisdk.models.operations.PackagesGetPackageVersionForUserResponse packagesGetPackageVersionForUser(openapisdk.models.operations.PackagesGetPackageVersionForUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PackagesGetPackageVersionForUserResponse res = new openapisdk.models.operations.PackagesGetPackageVersionForUserResponse() {{
            packageVersion = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PackageVersion out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PackageVersion.class);
                res.packageVersion = out;
            }
        }

        return res;
    }
	
	
    /**
     * packagesRestorePackageForAuthenticatedUser - Restore a package for the authenticated user
     *
     * Restores a package owned by the authenticated user.
     * 
     * You can restore a deleted package under the following conditions:
     *   - The package was deleted within the last 30 days.
     *   - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
     * 
     * To use this endpoint, you must authenticate using an access token with the `packages:read` and `packages:write` scope. If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#restore-a-package-for-the-authenticated-user - API method documentation
    **/
    public openapisdk.models.operations.PackagesRestorePackageForAuthenticatedUserResponse packagesRestorePackageForAuthenticatedUser(openapisdk.models.operations.PackagesRestorePackageForAuthenticatedUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/user/packages/{package_type}/{package_name}/restore", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
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

        openapisdk.models.operations.PackagesRestorePackageForAuthenticatedUserResponse res = new openapisdk.models.operations.PackagesRestorePackageForAuthenticatedUserResponse() {{
            basicError = null;
            basicError = null;
            basicError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
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

        return res;
    }
	
	
    /**
     * packagesRestorePackageForOrg - Restore a package for an organization
     *
     * Restores an entire package in an organization.
     * 
     * You can restore a deleted package under the following conditions:
     *   - The package was deleted within the last 30 days.
     *   - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
     * 
     * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `packages:read` and `packages:write` scope. In addition:
     * - If `package_type` is not `container`, your token must also include the `repo` scope.
     * - If `package_type` is `container`, you must also have admin permissions to the container that you want to restore.
     *
     * https://docs.github.com/rest/reference/packages#restore-a-package-for-an-organization - API method documentation
    **/
    public openapisdk.models.operations.PackagesRestorePackageForOrgResponse packagesRestorePackageForOrg(openapisdk.models.operations.PackagesRestorePackageForOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/packages/{package_type}/{package_name}/restore", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
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

        openapisdk.models.operations.PackagesRestorePackageForOrgResponse res = new openapisdk.models.operations.PackagesRestorePackageForOrgResponse() {{
            basicError = null;
            basicError = null;
            basicError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
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

        return res;
    }
	
	
    /**
     * packagesRestorePackageVersionForAuthenticatedUser - Restore a package version for the authenticated user
     *
     * Restores a package version owned by the authenticated user.
     * 
     * You can restore a deleted package version under the following conditions:
     *   - The package was deleted within the last 30 days.
     *   - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
     * 
     * To use this endpoint, you must authenticate using an access token with the `packages:read` and `packages:write` scope. If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#restore-a-package-version-for-the-authenticated-user - API method documentation
    **/
    public openapisdk.models.operations.PackagesRestorePackageVersionForAuthenticatedUserResponse packagesRestorePackageVersionForAuthenticatedUser(openapisdk.models.operations.PackagesRestorePackageVersionForAuthenticatedUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PackagesRestorePackageVersionForAuthenticatedUserResponse res = new openapisdk.models.operations.PackagesRestorePackageVersionForAuthenticatedUserResponse() {{
            basicError = null;
            basicError = null;
            basicError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
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

        return res;
    }
	
	
    /**
     * packagesRestorePackageVersionForOrg - Restore package version for an organization
     *
     * Restores a specific package version in an organization.
     * 
     * You can restore a deleted package under the following conditions:
     *   - The package was deleted within the last 30 days.
     *   - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
     * 
     * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `packages:read` and `packages:write` scope. In addition:
     * - If `package_type` is not `container`, your token must also include the `repo` scope.
     * - If `package_type` is `container`, you must also have admin permissions to the container that you want to restore.
     *
     * https://docs.github.com/rest/reference/packages#restore-a-package-version-for-an-organization - API method documentation
    **/
    public openapisdk.models.operations.PackagesRestorePackageVersionForOrgResponse packagesRestorePackageVersionForOrg(openapisdk.models.operations.PackagesRestorePackageVersionForOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PackagesRestorePackageVersionForOrgResponse res = new openapisdk.models.operations.PackagesRestorePackageVersionForOrgResponse() {{
            basicError = null;
            basicError = null;
            basicError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
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

        return res;
    }
	
}