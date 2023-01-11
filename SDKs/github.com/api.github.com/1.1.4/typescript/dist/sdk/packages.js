"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Packages = void 0;
var operations = __importStar(require("./models/operations"));
var utils = __importStar(require("../internal/utils"));
var Packages = /** @class */ (function () {
    function Packages(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
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
    Packages.prototype.packagesDeletePackageForAuthenticatedUser = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PackagesDeletePackageForAuthenticatedUserRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/user/packages/{package_type}/{package_name}", req.pathParams);
        var client = this._defaultClient;
        var r = client.request(__assign({ url: url, method: "delete" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
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
    Packages.prototype.packagesDeletePackageForOrg = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PackagesDeletePackageForOrgRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/orgs/{org}/packages/{package_type}/{package_name}", req.pathParams);
        var client = this._defaultClient;
        var r = client.request(__assign({ url: url, method: "delete" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
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
    Packages.prototype.packagesDeletePackageVersionForAuthenticatedUser = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PackagesDeletePackageVersionForAuthenticatedUserRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/user/packages/{package_type}/{package_name}/versions/{package_version_id}", req.pathParams);
        var client = this._defaultClient;
        var r = client.request(__assign({ url: url, method: "delete" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
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
    Packages.prototype.packagesDeletePackageVersionForOrg = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PackagesDeletePackageVersionForOrgRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}", req.pathParams);
        var client = this._defaultClient;
        var r = client.request(__assign({ url: url, method: "delete" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
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
    Packages.prototype.packagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUser = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/user/packages/{package_type}/{package_name}/versions", req.pathParams);
        var client = this._defaultClient;
        var qpSerializer = utils.getQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var r = client.request(__assign({ url: url, method: "get" }, requestConfig));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.packageVersions = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
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
    Packages.prototype.packagesGetAllPackageVersionsForPackageOwnedByOrg = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PackagesGetAllPackageVersionsForPackageOwnedByOrgRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/orgs/{org}/packages/{package_type}/{package_name}/versions", req.pathParams);
        var client = this._defaultClient;
        var qpSerializer = utils.getQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var r = client.request(__assign({ url: url, method: "get" }, requestConfig));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.packageVersions = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
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
    Packages.prototype.packagesGetAllPackageVersionsForPackageOwnedByUser = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PackagesGetAllPackageVersionsForPackageOwnedByUserRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/users/{username}/packages/{package_type}/{package_name}/versions", req.pathParams);
        var client = this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.packageVersions = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
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
    Packages.prototype.packagesGetPackageForAuthenticatedUser = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PackagesGetPackageForAuthenticatedUserRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/user/packages/{package_type}/{package_name}", req.pathParams);
        var client = this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.package = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
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
    Packages.prototype.packagesGetPackageForOrganization = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PackagesGetPackageForOrganizationRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/orgs/{org}/packages/{package_type}/{package_name}", req.pathParams);
        var client = this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.package = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
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
    Packages.prototype.packagesGetPackageForUser = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PackagesGetPackageForUserRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/users/{username}/packages/{package_type}/{package_name}", req.pathParams);
        var client = this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.package = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
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
    Packages.prototype.packagesGetPackageVersionForAuthenticatedUser = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PackagesGetPackageVersionForAuthenticatedUserRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/user/packages/{package_type}/{package_name}/versions/{package_version_id}", req.pathParams);
        var client = this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.packageVersion = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
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
    Packages.prototype.packagesGetPackageVersionForOrganization = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PackagesGetPackageVersionForOrganizationRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}", req.pathParams);
        var client = this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.packageVersion = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
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
    Packages.prototype.packagesGetPackageVersionForUser = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PackagesGetPackageVersionForUserRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}", req.pathParams);
        var client = this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.packageVersion = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
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
    Packages.prototype.packagesRestorePackageForAuthenticatedUser = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PackagesRestorePackageForAuthenticatedUserRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/user/packages/{package_type}/{package_name}/restore", req.pathParams);
        var client = this._defaultClient;
        var qpSerializer = utils.getQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var r = client.request(__assign({ url: url, method: "post" }, requestConfig));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
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
    Packages.prototype.packagesRestorePackageForOrg = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PackagesRestorePackageForOrgRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/orgs/{org}/packages/{package_type}/{package_name}/restore", req.pathParams);
        var client = this._defaultClient;
        var qpSerializer = utils.getQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var r = client.request(__assign({ url: url, method: "post" }, requestConfig));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
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
    Packages.prototype.packagesRestorePackageVersionForAuthenticatedUser = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PackagesRestorePackageVersionForAuthenticatedUserRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore", req.pathParams);
        var client = this._defaultClient;
        var r = client.request(__assign({ url: url, method: "post" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
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
    Packages.prototype.packagesRestorePackageVersionForOrg = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PackagesRestorePackageVersionForOrgRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore", req.pathParams);
        var client = this._defaultClient;
        var r = client.request(__assign({ url: url, method: "post" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    return Packages;
}());
exports.Packages = Packages;
