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
exports.Workspaces = void 0;
var operations = __importStar(require("./models/operations"));
var utils = __importStar(require("../internal/utils"));
var Workspaces = /** @class */ (function () {
    function Workspaces(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * deleteWorkspacesWorkspaceHooksUid - Deletes the specified webhook subscription from the given workspace.
    **/
    Workspaces.prototype.deleteWorkspacesWorkspaceHooksUid = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteWorkspacesWorkspaceHooksUidRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/workspaces/{workspace}/hooks/{uid}", req.pathParams);
        var client = utils.createSecurityClient(this._defaultClient, req.security);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * getUserPermissionsWorkspaces - Returns an object for each workspace the caller is a member of, and
     * their effective role - the highest level of privilege the caller has.
     * If a user is a member of multiple groups with distinct roles, only the
     * highest level is returned.
     *
     * Permissions can be:
     *
     * * `owner`
     * * `collaborator`
     * * `member`
     *
     * Example:
     *
     * ```
     * $ curl https://api.bitbucket.org/2.0/user/permissions/workspaces
     *
     * {
     *   "pagelen": 10,
     *   "page": 1,
     *   "size": 1,
     *   "values": [
     *     {
     *       "type": "workspace_membership",
     *       "permission": "owner",
     *       "last_accessed": "2019-03-07T12:35:02.900024+00:00",
     *       "added_on": "2018-10-11T17:42:02.961424+00:00",
     *       "user": {
     *         "type": "user",
     *         "uuid": "{470c176d-3574-44ea-bb41-89e8638bcca4}",
     *         "nickname": "evzijst",
     *         "display_name": "Erik van Zijst",
     *       },
     *       "workspace": {
     *         "type": "workspace",
     *         "uuid": "{a15fb181-db1f-48f7-b41f-e1eff06929d6}",
     *         "slug": "bbworkspace1",
     *         "name": "Atlassian Bitbucket",
     *       }
     *     }
     *   ]
     * }
     * ```
     *
     * Results may be further [filtered or sorted](../../../meta/filtering) by
     * workspace or permission by adding the following query string parameters:
     *
     * * `q=workspace.slug="bbworkspace1"` or `q=permission="owner"`
     * * `sort=workspace.slug`
     *
     * Note that the query parameter values need to be URL escaped so that `=`
     * would become `%3D`.
    **/
    Workspaces.prototype.getUserPermissionsWorkspaces = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetUserPermissionsWorkspacesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/user/permissions/workspaces";
        var client = utils.createSecurityClient(this._defaultClient, req.security);
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
                        res.paginatedWorkspaceMemberships = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * getWorkspaces - Returns a list of workspaces accessible by the authenticated user.
     *
     * Example:
     *
     * ```
     * $ curl https://api.bitbucket.org/2.0/workspaces
     *
     * {
     *   "pagelen": 10,
     *   "page": 1,
     *   "size": 1,
     *   "values": [
     *     {
     *         "uuid": "{a15fb181-db1f-48f7-b41f-e1eff06929d6}",
     *         "links": {
     *             "owners": {
     *                 "href": "https://api.bitbucket.org/2.0/workspaces/bbworkspace1/members?q=permission%3D%22owner%22"
     *             },
     *             "self": {
     *                 "href": "https://api.bitbucket.org/2.0/workspaces/bbworkspace1"
     *             },
     *             "repositories": {
     *                 "href": "https://api.bitbucket.org/2.0/repositories/bbworkspace1"
     *             },
     *             "snippets": {
     *                 "href": "https://api.bitbucket.org/2.0/snippets/bbworkspace1"
     *             },
     *             "html": {
     *                 "href": "https://bitbucket.org/bbworkspace1/"
     *             },
     *             "avatar": {
     *                 "href": "https://bitbucket.org/workspaces/bbworkspace1/avatar/?ts=1543465801"
     *             },
     *             "members": {
     *                 "href": "https://api.bitbucket.org/2.0/workspaces/bbworkspace1/members"
     *             },
     *             "projects": {
     *                 "href": "https://api.bitbucket.org/2.0/workspaces/bbworkspace1/projects"
     *             }
     *         },
     *         "created_on": "2018-11-14T19:15:05.058566+00:00",
     *         "type": "workspace",
     *         "slug": "bbworkspace1",
     *         "is_private": true,
     *         "name": "Atlassian Bitbucket"
     *     }
     *   ]
     * }
     * ```
     *
     * Results may be further [filtered or sorted](../meta/filtering) by
     * workspace or permission by adding the following query string parameters:
     *
     * * `q=slug="bbworkspace1"` or `q=is_private=true`
     * * `sort=created_on`
     *
     * Note that the query parameter values need to be URL escaped so that `=`
     * would become `%3D`.
    **/
    Workspaces.prototype.getWorkspaces = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetWorkspacesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/workspaces";
        var client = utils.createSecurityClient(this._defaultClient, req.security);
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
                        res.paginatedWorkspaces = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * getWorkspacesWorkspace - Returns the requested workspace.
    **/
    Workspaces.prototype.getWorkspacesWorkspace = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetWorkspacesWorkspaceRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/workspaces/{workspace}", req.pathParams);
        var client = utils.createSecurityClient(this._defaultClient, req.security);
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
                        res.workspace = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * getWorkspacesWorkspaceHooks - Returns a paginated list of webhooks installed on this workspace.
    **/
    Workspaces.prototype.getWorkspacesWorkspaceHooks = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetWorkspacesWorkspaceHooksRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/workspaces/{workspace}/hooks", req.pathParams);
        var client = utils.createSecurityClient(this._defaultClient, req.security);
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
                        res.paginatedWebhookSubscriptions = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * getWorkspacesWorkspaceHooksUid - Returns the webhook with the specified id installed on the given
     * workspace.
    **/
    Workspaces.prototype.getWorkspacesWorkspaceHooksUid = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetWorkspacesWorkspaceHooksUidRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/workspaces/{workspace}/hooks/{uid}", req.pathParams);
        var client = utils.createSecurityClient(this._defaultClient, req.security);
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
                        res.webhookSubscription = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * getWorkspacesWorkspaceMembers - Returns all members of the requested workspace.
    **/
    Workspaces.prototype.getWorkspacesWorkspaceMembers = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetWorkspacesWorkspaceMembersRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/workspaces/{workspace}/members", req.pathParams);
        var client = utils.createSecurityClient(this._defaultClient, req.security);
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
                        res.paginatedWorkspaceMemberships = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * getWorkspacesWorkspaceMembersMember - Returns the workspace membership, which includes
     * a `User` object for the member and a `Workspace` object
     * for the requested workspace.
    **/
    Workspaces.prototype.getWorkspacesWorkspaceMembersMember = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetWorkspacesWorkspaceMembersMemberRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/workspaces/{workspace}/members/{member}", req.pathParams);
        var client = utils.createSecurityClient(this._defaultClient, req.security);
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
                        res.workspaceMembership = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * getWorkspacesWorkspacePermissions - Returns the list of members in a workspace
     * and their permission levels.
     * Permission can be:
     * * `owner`
     * * `collaborator`
     * * `member`
     *
     * Example:
     *
     * ```
     * $ curl -X https://api.bitbucket.org/2.0/workspaces/bbworkspace1/permissions
     *
     * {
     *     "pagelen": 10,
     *     "values": [
     *         {
     *             "permission": "owner",
     *             "type": "workspace_membership",
     *             "user": {
     *                 "type": "user",
     *                 "uuid": "{470c176d-3574-44ea-bb41-89e8638bcca4}",
     *                 "display_name": "Erik van Zijst",
     *             },
     *             "workspace": {
     *                 "type": "workspace",
     *                 "uuid": "{a15fb181-db1f-48f7-b41f-e1eff06929d6}",
     *                 "slug": "bbworkspace1",
     *                 "name": "Atlassian Bitbucket",
     *             }
     *         },
     *         {
     *             "permission": "member",
     *             "type": "workspace_membership",
     *             "user": {
     *                 "type": "user",
     *                 "nickname": "seanaty",
     *                 "display_name": "Sean Conaty",
     *                 "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
     *             },
     *             "workspace": {
     *                 "type": "workspace",
     *                 "uuid": "{a15fb181-db1f-48f7-b41f-e1eff06929d6}",
     *                 "slug": "bbworkspace1",
     *                 "name": "Atlassian Bitbucket",
     *             }
     *         }
     *     ],
     *     "page": 1,
     *     "size": 2
     * }
     * ```
     *
     * Results may be further [filtered](../../../meta/filtering) by
     * permission by adding the following query string parameters:
     *
     * * `q=permission="owner"`
    **/
    Workspaces.prototype.getWorkspacesWorkspacePermissions = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetWorkspacesWorkspacePermissionsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/workspaces/{workspace}/permissions", req.pathParams);
        var client = utils.createSecurityClient(this._defaultClient, req.security);
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
                        res.paginatedWorkspaceMemberships = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * getWorkspacesWorkspacePermissionsRepositories - Returns an object for each repository permission for all of a
     * workspace's repositories.
     *
     * Permissions returned are effective permissions: the highest level of
     * permission the user has. This does not distinguish between direct and
     * indirect (group) privileges.
     *
     * Only users with admin permission for the team may access this resource.
     *
     * Permissions can be:
     *
     * * `admin`
     * * `write`
     * * `read`
     *
     * Example:
     *
     * ```
     * $ curl https://api.bitbucket.org/2.0/workspaces/atlassian_tutorial/permissions/repositories
     *
     * {
     *   "pagelen": 10,
     *   "values": [
     *     {
     *       "type": "repository_permission",
     *       "user": {
     *         "type": "user",
     *         "display_name": "Erik van Zijst",
     *         "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
     *       },
     *       "repository": {
     *         "type": "repository",
     *         "name": "geordi",
     *         "full_name": "atlassian_tutorial/geordi",
     *         "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
     *       },
     *       "permission": "admin"
     *     },
     *     {
     *       "type": "repository_permission",
     *       "user": {
     *         "type": "user",
     *         "display_name": "Sean Conaty",
     *         "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
     *       },
     *       "repository": {
     *         "type": "repository",
     *         "name": "geordi",
     *         "full_name": "atlassian_tutorial/geordi",
     *         "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
     *       },
     *       "permission": "write"
     *     },
     *     {
     *       "type": "repository_permission",
     *       "user": {
     *         "type": "user",
     *         "display_name": "Jeff Zeng",
     *         "uuid": "{47f92a9a-c3a3-4d0b-bc4e-782a969c5c72}"
     *       },
     *       "repository": {
     *         "type": "repository",
     *         "name": "whee",
     *         "full_name": "atlassian_tutorial/whee",
     *         "uuid": "{30ba25e9-51ff-4555-8dd0-fc7ee2fa0895}"
     *       },
     *       "permission": "admin"
     *     }
     *   ],
     *   "page": 1,
     *   "size": 3
     * }
     * ```
     *
     * Results may be further [filtered or sorted](../../../../meta/filtering)
     * by repository, user, or permission by adding the following query string
     * parameters:
     *
     * * `q=repository.name="geordi"` or `q=permission>"read"`
     * * `sort=user.display_name`
     *
     * Note that the query parameter values need to be URL escaped so that `=`
     * would become `%3D`.
    **/
    Workspaces.prototype.getWorkspacesWorkspacePermissionsRepositories = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetWorkspacesWorkspacePermissionsRepositoriesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/workspaces/{workspace}/permissions/repositories", req.pathParams);
        var client = utils.createSecurityClient(this._defaultClient, req.security);
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
                        res.paginatedRepositoryPermissions = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * getWorkspacesWorkspacePermissionsRepositoriesRepoSlug - Returns an object for the repository permission of each user in the
     * requested repository.
     *
     * Permissions returned are effective permissions: the highest level of
     * permission the user has. This does not distinguish between direct and
     * indirect (group) privileges.
     *
     * Only users with admin permission for the repository may access this resource.
     *
     * Permissions can be:
     *
     * * `admin`
     * * `write`
     * * `read`
     *
     * Example:
     *
     * ```
     * $ curl https://api.bitbucket.org/2.0/workspaces/atlassian_tutorial/permissions/repositories/geordi
     *
     * {
     *   "pagelen": 10,
     *   "values": [
     *     {
     *       "type": "repository_permission",
     *       "user": {
     *         "type": "user",
     *         "display_name": "Erik van Zijst",
     *         "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
     *       },
     *       "repository": {
     *         "type": "repository",
     *         "name": "geordi",
     *         "full_name": "atlassian_tutorial/geordi",
     *         "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
     *       },
     *       "permission": "admin"
     *     },
     *     {
     *       "type": "repository_permission",
     *       "user": {
     *         "type": "user",
     *         "display_name": "Sean Conaty",
     *         "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
     *       },
     *       "repository": {
     *         "type": "repository",
     *         "name": "geordi",
     *         "full_name": "atlassian_tutorial/geordi",
     *         "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
     *       },
     *       "permission": "write"
     *     }
     *   ],
     *   "page": 1,
     *   "size": 2
     * }
     * ```
     *
     * Results may be further [filtered or sorted](../../../../meta/filtering)
     * by user, or permission by adding the following query string parameters:
     *
     * * `q=permission>"read"`
     * * `sort=user.display_name`
     *
     * Note that the query parameter values need to be URL escaped so that `=`
     * would become `%3D`.
    **/
    Workspaces.prototype.getWorkspacesWorkspacePermissionsRepositoriesRepoSlug = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/workspaces/{workspace}/permissions/repositories/{repo_slug}", req.pathParams);
        var client = utils.createSecurityClient(this._defaultClient, req.security);
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
                        res.paginatedRepositoryPermissions = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * getWorkspacesWorkspaceProjects - Returns the list of projects in this workspace.
    **/
    Workspaces.prototype.getWorkspacesWorkspaceProjects = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetWorkspacesWorkspaceProjectsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/workspaces/{workspace}/projects", req.pathParams);
        var client = utils.createSecurityClient(this._defaultClient, req.security);
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
                        res.paginatedProjects = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * getWorkspacesWorkspaceProjectsProjectKey - Returns the requested project.
    **/
    Workspaces.prototype.getWorkspacesWorkspaceProjectsProjectKey = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetWorkspacesWorkspaceProjectsProjectKeyRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/workspaces/{workspace}/projects/{project_key}", req.pathParams);
        var client = utils.createSecurityClient(this._defaultClient, req.security);
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
                        res.project = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * postWorkspacesWorkspaceHooks - Creates a new webhook on the specified workspace.
     *
     * Workspace webhooks are fired for events from all repositories contained
     * by that workspace.
     *
     * Note that only owners can install webhooks on workspaces.
    **/
    Workspaces.prototype.postWorkspacesWorkspaceHooks = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostWorkspacesWorkspaceHooksRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/workspaces/{workspace}/hooks", req.pathParams);
        var client = utils.createSecurityClient(this._defaultClient, req.security);
        var r = client.request(__assign({ url: url, method: "post" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.webhookSubscription = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * putWorkspacesWorkspaceHooksUid - Updates the specified webhook subscription.
     *
     * The following properties can be mutated:
     *
     * * `description`
     * * `url`
     * * `active`
     * * `events`
    **/
    Workspaces.prototype.putWorkspacesWorkspaceHooksUid = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutWorkspacesWorkspaceHooksUidRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/workspaces/{workspace}/hooks/{uid}", req.pathParams);
        var client = utils.createSecurityClient(this._defaultClient, req.security);
        var r = client.request(__assign({ url: url, method: "put" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.webhookSubscription = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    return Workspaces;
}());
exports.Workspaces = Workspaces;
