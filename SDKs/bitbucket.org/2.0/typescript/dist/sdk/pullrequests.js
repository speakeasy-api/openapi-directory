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
exports.Pullrequests = void 0;
var operations = __importStar(require("./models/operations"));
var utils = __importStar(require("../internal/utils"));
var Pullrequests = /** @class */ (function () {
    function Pullrequests(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * deleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername - Removes a default reviewer from the repository.
    **/
    Pullrequests.prototype.deleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}", req.pathParams);
        var client = utils.createSecurityClient(this._defaultClient, req.security);
        var r = client.request(__assign({ url: url, method: "delete" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove - Redact the authenticated user's approval of the specified pull
     * request.
    **/
    Pullrequests.prototype.deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/approve", req.pathParams);
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
     * deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId - Deletes a specific pull request comment.
    **/
    Pullrequests.prototype.deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}", req.pathParams);
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
    Pullrequests.prototype.deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChanges = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/request-changes", req.pathParams);
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
     * getPullrequestsForCommit - Returns a paginated list of all pull requests as part of which this commit was reviewed. Pull Request Commit Links app must be installed first before using this API; installation automatically occurs when 'Go to pull request' is clicked from the web interface for a commit's details.
    **/
    Pullrequests.prototype.getPullrequestsForCommit = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetPullrequestsForCommitRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/pullrequests", req.pathParams);
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
                        res.paginatedPullrequests = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.paginatedPullrequests = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
     * getPullrequestsSelectedUser - Returns all pull requests authored by the specified user.
     *
     * By default only open pull requests are returned. This can be controlled
     * using the `state` query parameter. To retrieve pull requests that are
     * in one of multiple states, repeat the `state` parameter for each
     * individual state.
     *
     * This endpoint also supports filtering and sorting of the results. See
     * [filtering and sorting](../../../../meta/filtering) for more details.
    **/
    Pullrequests.prototype.getPullrequestsSelectedUser = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetPullrequestsSelectedUserRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/pullrequests/{selected_user}", req.pathParams);
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
                        res.paginatedPullrequests = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
     * getRepositoriesWorkspaceRepoSlugDefaultReviewers - Returns the repository's default reviewers.
     *
     * These are the users that are automatically added as reviewers on every
     * new pull request that is created.
    **/
    Pullrequests.prototype.getRepositoriesWorkspaceRepoSlugDefaultReviewers = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/default-reviewers", req.pathParams);
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
                    break;
            }
            return res;
        });
    };
    /**
     * getRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername - Returns the specified reviewer.
     *
     * This can be used to test whether a user is among the repository's
     * default reviewers list. A 404 indicates that that specified user is not
     * a default reviewer.
    **/
    Pullrequests.prototype.getRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}", req.pathParams);
        var client = utils.createSecurityClient(this._defaultClient, req.security);
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * getRepositoriesWorkspaceRepoSlugPullrequests - Returns all pull requests on the specified repository.
     *
     * By default only open pull requests are returned. This can be controlled
     * using the `state` query parameter. To retrieve pull requests that are
     * in one of multiple states, repeat the `state` parameter for each
     * individual state.
     *
     * This endpoint also supports filtering and sorting of the results. See
     * [filtering and sorting](../../../../meta/filtering) for more details.
    **/
    Pullrequests.prototype.getRepositoriesWorkspaceRepoSlugPullrequests = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRepositoriesWorkspaceRepoSlugPullrequestsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests", req.pathParams);
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
                        res.paginatedPullrequests = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
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
     * getRepositoriesWorkspaceRepoSlugPullrequestsActivity - Returns a paginated list of the pull request's activity log.
     *
     * This handler serves both a v20 and internal endpoint. The v20 endpoint
     * returns reviewer comments, updates, approvals and request changes. The internal
     * endpoint includes those plus tasks and attachments.
     *
     * Comments created on a file or a line of code have an inline property.
     *
     * Comment example:
     * ```
     * {
     *     "pagelen": 20,
     *     "values": [
     *         {
     *             "comment": {
     *                 "links": {
     *                     "self": {
     *                         "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695/comments/118571088"
     *                     },
     *                     "html": {
     *                         "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695/_/diff#comment-118571088"
     *                     }
     *                 },
     *                 "deleted": false,
     *                 "pullrequest": {
     *                     "type": "pullrequest",
     *                     "id": 5695,
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                         }
     *                     },
     *                     "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *                 },
     *                 "content": {
     *                     "raw": "inline with to a dn from lines",
     *                     "markup": "markdown",
     *                     "html": "<p>inline with to a dn from lines</p>",
     *                     "type": "rendered"
     *                 },
     *                 "created_on": "2019-09-27T00:33:46.039178+00:00",
     *                 "user": {
     *                     "display_name": "Name Lastname",
     *                     "uuid": "{}",
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/%7B%7D/"
     *                         },
     *                         "avatar": {
     *                             "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
     *                         }
     *                     },
     *                     "type": "user",
     *                     "nickname": "Name",
     *                     "account_id": ""
     *                 },
     *                 "created_on": "2019-09-27T00:33:46.039178+00:00",
     *                 "user": {
     *                     "display_name": "Name Lastname",
     *                     "uuid": "{}",
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/%7B%7D/"
     *                         },
     *                         "avatar": {
     *                             "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
     *                         }
     *                     },
     *                     "type": "user",
     *                     "nickname": "Name",
     *                     "account_id": ""
     *                 },
     *                 "updated_on": "2019-09-27T00:33:46.055384+00:00",
     *                 "inline": {
     *                     "context_lines": "",
     *                     "to": null,
     *                     "path": "",
     *                     "outdated": false,
     *                     "from": 211
     *                 },
     *                 "type": "pullrequest_comment",
     *                 "id": 118571088
     *             },
     *             "pull_request": {
     *                 "type": "pullrequest",
     *                 "id": 5695,
     *                 "links": {
     *                     "self": {
     *                         "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                     },
     *                     "html": {
     *                         "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                     }
     *                 },
     *                 "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *             }
     *         }
     *     ]
     * }
     * ```
     *
     * Updates include a state property of OPEN, MERGED, or DECLINED.
     *
     * Update example:
     * ```
     * {
     *     "pagelen": 20,
     *     "values": [
     *         {
     *             "update": {
     *                 "description": "",
     *                 "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it",
     *                 "destination": {
     *                     "commit": {
     *                         "type": "commit",
     *                         "hash": "6a2c16e4a152",
     *                         "links": {
     *                             "self": {
     *                                 "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/6a2c16e4a152"
     *                             },
     *                             "html": {
     *                                 "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6a2c16e4a152"
     *                             }
     *                         }
     *                     },
     *                     "branch": {
     *                         "name": "master"
     *                     },
     *                     "repository": {
     *                         "name": "Atlaskit-MK-2",
     *                         "type": "repository",
     *                         "full_name": "atlassian/atlaskit-mk-2",
     *                         "links": {
     *                             "self": {
     *                                 "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2"
     *                             },
     *                             "html": {
     *                                 "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
     *                             },
     *                             "avatar": {
     *                                 "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
     *                             }
     *                         },
     *                         "uuid": "{}"
     *                     }
     *                 },
     *                 "reason": "",
     *                 "source": {
     *                     "commit": {
     *                         "type": "commit",
     *                         "hash": "728c8bad1813",
     *                         "links": {
     *                             "self": {
     *                                 "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/728c8bad1813"
     *                             },
     *                             "html": {
     *                                 "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/728c8bad1813"
     *                             }
     *                         }
     *                     },
     *                     "branch": {
     *                         "name": "username/NONE-add-onClick-prop-for-accessibility"
     *                     },
     *                     "repository": {
     *                         "name": "Atlaskit-MK-2",
     *                         "type": "repository",
     *                         "full_name": "atlassian/atlaskit-mk-2",
     *                         "links": {
     *                             "self": {
     *                                 "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2"
     *                             },
     *                             "html": {
     *                                 "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
     *                             },
     *                             "avatar": {
     *                                 "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
     *                             }
     *                         },
     *                         "uuid": "{}"
     *                     }
     *                 },
     *                 "state": "OPEN",
     *                 "author": {
     *                     "display_name": "Name Lastname",
     *                     "uuid": "{}",
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/%7B%7D/"
     *                         },
     *                         "avatar": {
     *                             "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
     *                         }
     *                     },
     *                     "type": "user",
     *                     "nickname": "Name",
     *                     "account_id": ""
     *                 },
     *                 "date": "2019-05-10T06:48:25.305565+00:00"
     *             },
     *             "pull_request": {
     *                 "type": "pullrequest",
     *                 "id": 5695,
     *                 "links": {
     *                     "self": {
     *                         "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                     },
     *                     "html": {
     *                         "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                     }
     *                 },
     *                 "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *             }
     *         }
     *     ]
     * }
     * ```
     *
     * Approval example:
     * ```
     * {
     *     "pagelen": 20,
     *     "values": [
     *         {
     *             "approval": {
     *                 "date": "2019-09-27T00:37:19.849534+00:00",
     *                 "pullrequest": {
     *                     "type": "pullrequest",
     *                     "id": 5695,
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                         }
     *                     },
     *                     "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *                 },
     *                 "user": {
     *                     "display_name": "Name Lastname",
     *                     "uuid": "{}",
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/%7B%7D/"
     *                         },
     *                         "avatar": {
     *                             "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
     *                         }
     *                     },
     *                     "type": "user",
     *                     "nickname": "Name",
     *                     "account_id": ""
     *                 }
     *             },
     *             "pull_request": {
     *                 "type": "pullrequest",
     *                 "id": 5695,
     *                 "links": {
     *                     "self": {
     *                         "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                     },
     *                     "html": {
     *                         "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                     }
     *                 },
     *                 "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *             }
     *         }
     *     ]
     * }
     * ```
    **/
    Pullrequests.prototype.getRepositoriesWorkspaceRepoSlugPullrequestsActivity = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRepositoriesWorkspaceRepoSlugPullrequestsActivityRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/activity", req.pathParams);
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
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
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
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId - Returns the specified pull request.
    **/
    Pullrequests.prototype.getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}", req.pathParams);
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
                        res.pullrequest = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
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
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivity - Returns a paginated list of the pull request's activity log.
     *
     * This handler serves both a v20 and internal endpoint. The v20 endpoint
     * returns reviewer comments, updates, approvals and request changes. The internal
     * endpoint includes those plus tasks and attachments.
     *
     * Comments created on a file or a line of code have an inline property.
     *
     * Comment example:
     * ```
     * {
     *     "pagelen": 20,
     *     "values": [
     *         {
     *             "comment": {
     *                 "links": {
     *                     "self": {
     *                         "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695/comments/118571088"
     *                     },
     *                     "html": {
     *                         "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695/_/diff#comment-118571088"
     *                     }
     *                 },
     *                 "deleted": false,
     *                 "pullrequest": {
     *                     "type": "pullrequest",
     *                     "id": 5695,
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                         }
     *                     },
     *                     "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *                 },
     *                 "content": {
     *                     "raw": "inline with to a dn from lines",
     *                     "markup": "markdown",
     *                     "html": "<p>inline with to a dn from lines</p>",
     *                     "type": "rendered"
     *                 },
     *                 "created_on": "2019-09-27T00:33:46.039178+00:00",
     *                 "user": {
     *                     "display_name": "Name Lastname",
     *                     "uuid": "{}",
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/%7B%7D/"
     *                         },
     *                         "avatar": {
     *                             "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
     *                         }
     *                     },
     *                     "type": "user",
     *                     "nickname": "Name",
     *                     "account_id": ""
     *                 },
     *                 "created_on": "2019-09-27T00:33:46.039178+00:00",
     *                 "user": {
     *                     "display_name": "Name Lastname",
     *                     "uuid": "{}",
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/%7B%7D/"
     *                         },
     *                         "avatar": {
     *                             "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
     *                         }
     *                     },
     *                     "type": "user",
     *                     "nickname": "Name",
     *                     "account_id": ""
     *                 },
     *                 "updated_on": "2019-09-27T00:33:46.055384+00:00",
     *                 "inline": {
     *                     "context_lines": "",
     *                     "to": null,
     *                     "path": "",
     *                     "outdated": false,
     *                     "from": 211
     *                 },
     *                 "type": "pullrequest_comment",
     *                 "id": 118571088
     *             },
     *             "pull_request": {
     *                 "type": "pullrequest",
     *                 "id": 5695,
     *                 "links": {
     *                     "self": {
     *                         "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                     },
     *                     "html": {
     *                         "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                     }
     *                 },
     *                 "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *             }
     *         }
     *     ]
     * }
     * ```
     *
     * Updates include a state property of OPEN, MERGED, or DECLINED.
     *
     * Update example:
     * ```
     * {
     *     "pagelen": 20,
     *     "values": [
     *         {
     *             "update": {
     *                 "description": "",
     *                 "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it",
     *                 "destination": {
     *                     "commit": {
     *                         "type": "commit",
     *                         "hash": "6a2c16e4a152",
     *                         "links": {
     *                             "self": {
     *                                 "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/6a2c16e4a152"
     *                             },
     *                             "html": {
     *                                 "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6a2c16e4a152"
     *                             }
     *                         }
     *                     },
     *                     "branch": {
     *                         "name": "master"
     *                     },
     *                     "repository": {
     *                         "name": "Atlaskit-MK-2",
     *                         "type": "repository",
     *                         "full_name": "atlassian/atlaskit-mk-2",
     *                         "links": {
     *                             "self": {
     *                                 "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2"
     *                             },
     *                             "html": {
     *                                 "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
     *                             },
     *                             "avatar": {
     *                                 "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
     *                             }
     *                         },
     *                         "uuid": "{}"
     *                     }
     *                 },
     *                 "reason": "",
     *                 "source": {
     *                     "commit": {
     *                         "type": "commit",
     *                         "hash": "728c8bad1813",
     *                         "links": {
     *                             "self": {
     *                                 "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/728c8bad1813"
     *                             },
     *                             "html": {
     *                                 "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/728c8bad1813"
     *                             }
     *                         }
     *                     },
     *                     "branch": {
     *                         "name": "username/NONE-add-onClick-prop-for-accessibility"
     *                     },
     *                     "repository": {
     *                         "name": "Atlaskit-MK-2",
     *                         "type": "repository",
     *                         "full_name": "atlassian/atlaskit-mk-2",
     *                         "links": {
     *                             "self": {
     *                                 "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2"
     *                             },
     *                             "html": {
     *                                 "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
     *                             },
     *                             "avatar": {
     *                                 "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
     *                             }
     *                         },
     *                         "uuid": "{}"
     *                     }
     *                 },
     *                 "state": "OPEN",
     *                 "author": {
     *                     "display_name": "Name Lastname",
     *                     "uuid": "{}",
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/%7B%7D/"
     *                         },
     *                         "avatar": {
     *                             "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
     *                         }
     *                     },
     *                     "type": "user",
     *                     "nickname": "Name",
     *                     "account_id": ""
     *                 },
     *                 "date": "2019-05-10T06:48:25.305565+00:00"
     *             },
     *             "pull_request": {
     *                 "type": "pullrequest",
     *                 "id": 5695,
     *                 "links": {
     *                     "self": {
     *                         "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                     },
     *                     "html": {
     *                         "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                     }
     *                 },
     *                 "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *             }
     *         }
     *     ]
     * }
     * ```
     *
     * Approval example:
     * ```
     * {
     *     "pagelen": 20,
     *     "values": [
     *         {
     *             "approval": {
     *                 "date": "2019-09-27T00:37:19.849534+00:00",
     *                 "pullrequest": {
     *                     "type": "pullrequest",
     *                     "id": 5695,
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                         }
     *                     },
     *                     "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *                 },
     *                 "user": {
     *                     "display_name": "Name Lastname",
     *                     "uuid": "{}",
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/%7B%7D/"
     *                         },
     *                         "avatar": {
     *                             "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
     *                         }
     *                     },
     *                     "type": "user",
     *                     "nickname": "Name",
     *                     "account_id": ""
     *                 }
     *             },
     *             "pull_request": {
     *                 "type": "pullrequest",
     *                 "id": 5695,
     *                 "links": {
     *                     "self": {
     *                         "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                     },
     *                     "html": {
     *                         "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                     }
     *                 },
     *                 "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *             }
     *         }
     *     ]
     * }
     * ```
    **/
    Pullrequests.prototype.getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivity = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/activity", req.pathParams);
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
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
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
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments - Returns a paginated list of the pull request's comments.
     *
     * This includes both global, inline comments and replies.
     *
     * The default sorting is oldest to newest and can be overridden with
     * the `sort` query parameter.
     *
     * This endpoint also supports filtering and sorting of the results. See
     * [filtering and sorting](../../../../../../meta/filtering) for more
     * details.
    **/
    Pullrequests.prototype.getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments", req.pathParams);
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
                        res.paginatedPullrequestComments = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId - Returns a specific pull request comment.
    **/
    Pullrequests.prototype.getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}", req.pathParams);
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
                        res.pullrequestComment = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommits - Returns a paginated list of the pull request's commits.
     *
     * These are the commits that are being merged into the destination
     * branch when the pull requests gets accepted.
    **/
    Pullrequests.prototype.getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommits = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/commits", req.pathParams);
        var client = utils.createSecurityClient(this._defaultClient, req.security);
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiff - Redirects to the [repository diff](../../diff/%7Bspec%7D)
     * with the revspec that corresponds to the pull request.
    **/
    Pullrequests.prototype.getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiff = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/diff", req.pathParams);
        var client = utils.createSecurityClient(this._defaultClient, req.security);
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 302:
                    break;
            }
            return res;
        });
    };
    /**
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstat - Redirects to the [repository diffstat](../../diffstat/%7Bspec%7D)
     * with the revspec that corresponds to the pull request.
    **/
    Pullrequests.prototype.getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstat = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/diffstat", req.pathParams);
        var client = utils.createSecurityClient(this._defaultClient, req.security);
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 302:
                    break;
            }
            return res;
        });
    };
    /**
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskId - When merging a pull request takes too long, the client receives a
     * task ID along with a 202 status code. The task ID can be used in a call
     * to this endpoint to check the status of a merge task.
     *
     * ```
     * curl -X GET https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/<task_id>
     * ```
     *
     * If the merge task is not yet finished, a PENDING status will be returned.
     *
     * ```
     * HTTP/2 200
     * {
     *     "task_status": "PENDING",
     *     "links": {
     *         "self": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/<task_id>"
     *         }
     *     }
     * }
     * ```
     *
     * If the merge was successful, a SUCCESS status will be returned.
     *
     * ```
     * HTTP/2 200
     * {
     *     "task_status": "SUCCESS",
     *     "links": {
     *         "self": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/<task_id>"
     *         }
     *     },
     *     "merge_result": <the merged pull request object>
     * }
     * ```
     *
     * If the merge task failed, an error will be returned.
     *
     * ```
     * {
     *     "type": "error",
     *     "error": {
     *         "message": "<error message>"
     *     }
     * }
     * ```
    **/
    Pullrequests.prototype.getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/merge/task-status/{task_id}", req.pathParams);
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
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    break;
            }
            return res;
        });
    };
    /**
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatch - Redirects to the [repository patch](../../patch/%7Bspec%7D)
     * with the revspec that corresponds to pull request.
    **/
    Pullrequests.prototype.getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatch = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/patch", req.pathParams);
        var client = utils.createSecurityClient(this._defaultClient, req.security);
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 302:
                    break;
            }
            return res;
        });
    };
    /**
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatuses - Returns all statuses (e.g. build results) for the given pull
     * request.
    **/
    Pullrequests.prototype.getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatuses = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/statuses", req.pathParams);
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
                        res.paginatedCommitstatuses = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
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
     * postRepositoriesWorkspaceRepoSlugPullrequests - Creates a new pull request where the destination repository is
     * this repository and the author is the authenticated user.
     *
     * The minimum required fields to create a pull request are `title` and
     * `source`, specified by a branch name.
     *
     * ```
     * curl https://api.bitbucket.org/2.0/repositories/my-username/my-repository/pullrequests \
     *     -u my-username:my-password \
     *     --request POST \
     *     --header 'Content-Type: application/json' \
     *     --data '{
     *         "title": "My Title",
     *         "source": {
     *             "branch": {
     *                 "name": "staging"
     *             }
     *         }
     *     }'
     * ```
     *
     * If the pull request's `destination` is not specified, it will default
     * to the `repository.mainbranch`. To open a pull request to a
     * different branch, say from a feature branch to a staging branch,
     * specify a `destination` (same format as the `source`):
     *
     * ```
     * {
     *     "title": "My Title",
     *     "source": {
     *         "branch": {
     *             "name": "my-feature-branch"
     *         }
     *     },
     *     "destination": {
     *         "branch": {
     *             "name": "staging"
     *         }
     *     }
     * }
     * ```
     *
     * Reviewers can be specified by adding an array of user objects as the
     * `reviewers` property.
     *
     * ```
     * {
     *     "title": "My Title",
     *     "source": {
     *         "branch": {
     *             "name": "my-feature-branch"
     *         }
     *     },
     *     "reviewers": [
     *         {
     *             "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
     *         }
     *     ]
     * }
     * ```
     *
     * Other fields:
     *
     * * `description` - a string
     * * `close_source_branch` - boolean that specifies if the source branch should be closed upon merging
    **/
    Pullrequests.prototype.postRepositoriesWorkspaceRepoSlugPullrequests = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRepositoriesWorkspaceRepoSlugPullrequestsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = utils.createSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var r = client.request(__assign({ url: url, method: "post", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.pullrequest = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
     * postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove - Approve the specified pull request as the authenticated user.
    **/
    Pullrequests.prototype.postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/approve", req.pathParams);
        var client = utils.createSecurityClient(this._defaultClient, req.security);
        var r = client.request(__assign({ url: url, method: "post" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.participant = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
     * postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments - Creates a new pull request comment.
     *
     * Returns the newly created pull request comment.
    **/
    Pullrequests.prototype.postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = utils.createSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        var r = client.request(__assign({ url: url, method: "post", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.pullrequestComment = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
     * postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDecline - Declines the pull request.
    **/
    Pullrequests.prototype.postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDecline = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/decline", req.pathParams);
        var client = utils.createSecurityClient(this._defaultClient, req.security);
        var r = client.request(__assign({ url: url, method: "post" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.pullrequest = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 555:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMerge - Merges the pull request.
    **/
    Pullrequests.prototype.postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMerge = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/merge", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = utils.createSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = utils.getQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var r = client.request(__assign({ url: url, method: "post", headers: headers, data: reqBody }, requestConfig));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.pullrequest = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 555:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    Pullrequests.prototype.postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChanges = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/request-changes", req.pathParams);
        var client = utils.createSecurityClient(this._defaultClient, req.security);
        var r = client.request(__assign({ url: url, method: "post" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.participant = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
     * putRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername - Adds the specified user to the repository's list of default
     * reviewers.
     *
     * This method is idempotent. Adding a user a second time has no effect.
    **/
    Pullrequests.prototype.putRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}", req.pathParams);
        var client = utils.createSecurityClient(this._defaultClient, req.security);
        var r = client.request(__assign({ url: url, method: "put" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                default:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId - Mutates the specified pull request.
     *
     * This can be used to change the pull request's branches or description.
     *
     * Only open pull requests can be mutated.
    **/
    Pullrequests.prototype.putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = utils.createSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var r = client.request(__assign({ url: url, method: "put", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.pullrequest = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
     * putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId - Updates a specific pull request comment.
    **/
    Pullrequests.prototype.putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = utils.createSecurityClient(this._defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        var r = client.request(__assign({ url: url, method: "put", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.pullrequestComment = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
    return Pullrequests;
}());
exports.Pullrequests = Pullrequests;
