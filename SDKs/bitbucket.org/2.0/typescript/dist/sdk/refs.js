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
exports.Refs = void 0;
var operations = __importStar(require("./models/operations"));
var utils = __importStar(require("../internal/utils"));
var Refs = /** @class */ (function () {
    function Refs(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * deleteRepositoriesWorkspaceRepoSlugRefsBranchesName - Delete a branch in the specified repository.
     *
     * The main branch is not allowed to be deleted and will return a 400
     * response.
     *
     * The branch name should not include any prefixes (e.g.
     * refs/heads).
    **/
    Refs.prototype.deleteRepositoriesWorkspaceRepoSlugRefsBranchesName = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/refs/branches/{name}", req.pathParams);
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
     * deleteRepositoriesWorkspaceRepoSlugRefsTagsName - Delete a tag in the specified repository.
     *
     * For Git, the tag name should not include any prefixes (e.g. refs/tags).
     * For Mercurial, this adds a commit to the main branch that removes the
     * specified tag.
    **/
    Refs.prototype.deleteRepositoriesWorkspaceRepoSlugRefsTagsName = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRepositoriesWorkspaceRepoSlugRefsTagsNameRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/refs/tags/{name}", req.pathParams);
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
     * getRepositoriesWorkspaceRepoSlugRefs - Returns the branches and tags in the repository.
     *
     * By default, results will be in the order the underlying source control system returns them and identical to
     * the ordering one sees when running "$ git show-ref". Note that this follows simple
     * lexical ordering of the ref names.
     *
     * This can be undesirable as it does apply any natural sorting semantics, meaning for instance that refs are
     * sorted ["branch1", "branch10", "branch2", "v10", "v11", "v9"] instead of ["branch1", "branch2",
     * "branch10", "v9", "v10", "v11"].
     *
     * Sorting can be changed using the ?sort= query parameter. When using ?sort=name to explicitly sort on ref name,
     * Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.
    **/
    Refs.prototype.getRepositoriesWorkspaceRepoSlugRefs = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRepositoriesWorkspaceRepoSlugRefsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/refs", req.pathParams);
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
                        res.paginatedRefs = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
     * getRepositoriesWorkspaceRepoSlugRefsBranches - Returns a list of all open branches within the specified repository.
     *         Results will be in the order the source control manager returns them.
     *
     *         ```
     *         $ curl -s https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches?pagelen=1 | jq .
     *         {
     *           "pagelen": 1,
     *           "size": 187,
     *           "values": [
     *             {
     *               "name": "issue-9.3/AUI-5343-assistive-class",
     *               "links": {
     *                 "commits": {
     *                   "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commits/issue-9.3/AUI-5343-assistive-class"
     *                 },
     *                 "self": {
     *                   "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches/issue-9.3/AUI-5343-assistive-class"
     *                 },
     *                 "html": {
     *                   "href": "https://bitbucket.org/atlassian/aui/branch/issue-9.3/AUI-5343-assistive-class"
     *                 }
     *               },
     *               "default_merge_strategy": "squash",
     *               "merge_strategies": [
     *                 "merge_commit",
     *                 "squash",
     *                 "fast_forward"
     *               ],
     *               "type": "branch",
     *               "target": {
     *                 "hash": "e5d1cde9069fcb9f0af90403a4de2150c125a148",
     *                 "repository": {
     *                   "links": {
     *                     "self": {
     *                       "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui"
     *                     },
     *                     "html": {
     *                       "href": "https://bitbucket.org/atlassian/aui"
     *                     },
     *                     "avatar": {
     *                       "href": "https://bytebucket.org/ravatar/%7B585074de-7b60-4fd1-81ed-e0bc7fafbda5%7D?ts=86317"
     *                     }
     *                   },
     *                   "type": "repository",
     *                   "name": "aui",
     *                   "full_name": "atlassian/aui",
     *                   "uuid": "{585074de-7b60-4fd1-81ed-e0bc7fafbda5}"
     *                 },
     *                 "links": {
     *                   "self": {
     *                     "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e5d1cde9069fcb9f0af90403a4de2150c125a148"
     *                   },
     *                   "comments": {
     *                     "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e5d1cde9069fcb9f0af90403a4de2150c125a148/comments"
     *                   },
     *                   "patch": {
     *                     "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/patch/e5d1cde9069fcb9f0af90403a4de2150c125a148"
     *                   },
     *                   "html": {
     *                     "href": "https://bitbucket.org/atlassian/aui/commits/e5d1cde9069fcb9f0af90403a4de2150c125a148"
     *                   },
     *                   "diff": {
     *                     "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/diff/e5d1cde9069fcb9f0af90403a4de2150c125a148"
     *                   },
     *                   "approve": {
     *                     "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e5d1cde9069fcb9f0af90403a4de2150c125a148/approve"
     *                   },
     *                   "statuses": {
     *                     "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e5d1cde9069fcb9f0af90403a4de2150c125a148/statuses"
     *                   }
     *                 },
     *                 "author": {
     *                   "raw": "Marcin Konopka <mkonopka@atlassian.com>",
     *                   "type": "author",
     *                   "user": {
     *                     "display_name": "Marcin Konopka",
     *                     "uuid": "{47cc24f4-2a05-4420-88fe-0417535a110a}",
     *                     "links": {
     *                       "self": {
     *                         "href": "https://api.bitbucket.org/2.0/users/%7B47cc24f4-2a05-4420-88fe-0417535a110a%7D"
     *                       },
     *                       "html": {
     *                         "href": "https://bitbucket.org/%7B47cc24f4-2a05-4420-88fe-0417535a110a%7D/"
     *                       },
     *                       "avatar": {
     *                         "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/initials/MK-1.png"
     *                       }
     *                     },
     *                     "nickname": "Marcin Konopka",
     *                     "type": "user",
     *                     "account_id": "60113d2b47a9540069f4de03"
     *                   }
     *                 },
     *                 "parents": [
     *                   {
     *                     "hash": "87f7fc92b00464ae47b13ef65c91884e4ac9be51",
     *                     "type": "commit",
     *                     "links": {
     *                       "self": {
     *                         "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/87f7fc92b00464ae47b13ef65c91884e4ac9be51"
     *                       },
     *                       "html": {
     *                         "href": "https://bitbucket.org/atlassian/aui/commits/87f7fc92b00464ae47b13ef65c91884e4ac9be51"
     *                       }
     *                     }
     *                   }
     *                 ],
     *                 "date": "2021-04-13T13:44:49+00:00",
     *                 "message": "wip
     * ",
     *                 "type": "commit"
     *               }
     *             }
     *           ],
     *           "page": 1,
     *           "next": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches?pagelen=1&page=2"
     *         }
     *         ```
     *
     *         Branches support [filtering and sorting](../../../../../meta/filtering)
     *         that can be used to search for specific branches. For instance, to find
     *         all branches that have "stab" in their name:
     *
     *         ```
     *         curl -s https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches -G --data-urlencode 'q=name ~ "stab"'
     *         ```
     *
     *         By default, results will be in the order the underlying source control system returns them and identical to
     *         the ordering one sees when running "$ hg branches" or "$ git branch --list". Note that this follows simple
     *         lexical ordering of the ref names.
     *
     *         This can be undesirable as it does apply any natural sorting semantics, meaning for instance that tags are
     *         sorted ["v10", "v11", "v9"] instead of ["v9", "v10", "v11"].
     *
     *         Sorting can be changed using the ?q= query parameter. When using ?q=name to explicitly sort on ref name,
     *         Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.
    **/
    Refs.prototype.getRepositoriesWorkspaceRepoSlugRefsBranches = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRepositoriesWorkspaceRepoSlugRefsBranchesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/refs/branches", req.pathParams);
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
                        res.paginatedBranches = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
     * getRepositoriesWorkspaceRepoSlugRefsBranchesName - Returns a branch object within the specified repository.
     *
     *         ```
     *         $ curl -s https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches/master | jq .
     *         {
     *           "name": "master",
     *           "links": {
     *             "commits": {
     *               "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commits/master"
     *             },
     *             "self": {
     *               "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches/master"
     *             },
     *             "html": {
     *               "href": "https://bitbucket.org/atlassian/aui/branch/master"
     *             }
     *           },
     *           "default_merge_strategy": "squash",
     *           "merge_strategies": [
     *             "merge_commit",
     *             "squash",
     *             "fast_forward"
     *           ],
     *           "type": "branch",
     *           "target": {
     *             "hash": "e7d158ff7ed5538c28f94cd97a9ad569680fc94e",
     *             "repository": {
     *               "links": {
     *                 "self": {
     *                   "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui"
     *                 },
     *                 "html": {
     *                   "href": "https://bitbucket.org/atlassian/aui"
     *                 },
     *                 "avatar": {
     *                   "href": "https://bytebucket.org/ravatar/%7B585074de-7b60-4fd1-81ed-e0bc7fafbda5%7D?ts=86317"
     *                 }
     *               },
     *               "type": "repository",
     *               "name": "aui",
     *               "full_name": "atlassian/aui",
     *               "uuid": "{585074de-7b60-4fd1-81ed-e0bc7fafbda5}"
     *             },
     *             "links": {
     *               "self": {
     *                 "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e7d158ff7ed5538c28f94cd97a9ad569680fc94e"
     *               },
     *               "comments": {
     *                 "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e7d158ff7ed5538c28f94cd97a9ad569680fc94e/comments"
     *               },
     *               "patch": {
     *                 "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/patch/e7d158ff7ed5538c28f94cd97a9ad569680fc94e"
     *               },
     *               "html": {
     *                 "href": "https://bitbucket.org/atlassian/aui/commits/e7d158ff7ed5538c28f94cd97a9ad569680fc94e"
     *               },
     *               "diff": {
     *                 "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/diff/e7d158ff7ed5538c28f94cd97a9ad569680fc94e"
     *               },
     *               "approve": {
     *                 "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e7d158ff7ed5538c28f94cd97a9ad569680fc94e/approve"
     *               },
     *               "statuses": {
     *                 "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e7d158ff7ed5538c28f94cd97a9ad569680fc94e/statuses"
     *               }
     *             },
     *             "author": {
     *               "raw": "psre-renovate-bot <psre-renovate-bot@atlassian.com>",
     *               "type": "author",
     *               "user": {
     *                 "display_name": "psre-renovate-bot",
     *                 "uuid": "{250a442a-3ab3-4fcb-87c3-3c8f3df65ec7}",
     *                 "links": {
     *                   "self": {
     *                     "href": "https://api.bitbucket.org/2.0/users/%7B250a442a-3ab3-4fcb-87c3-3c8f3df65ec7%7D"
     *                   },
     *                   "html": {
     *                     "href": "https://bitbucket.org/%7B250a442a-3ab3-4fcb-87c3-3c8f3df65ec7%7D/"
     *                   },
     *                   "avatar": {
     *                     "href": "https://secure.gravatar.com/avatar/6972ee037c9f36360170a86f544071a2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FP-3.png"
     *                   }
     *                 },
     *                 "nickname": "Renovate Bot",
     *                 "type": "user",
     *                 "account_id": "5d5355e8c6b9320d9ea5b28d"
     *               }
     *             },
     *             "parents": [
     *               {
     *                 "hash": "eab868a309e75733de80969a7bed1ec6d4651e06",
     *                 "type": "commit",
     *                 "links": {
     *                   "self": {
     *                     "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/eab868a309e75733de80969a7bed1ec6d4651e06"
     *                   },
     *                   "html": {
     *                     "href": "https://bitbucket.org/atlassian/aui/commits/eab868a309e75733de80969a7bed1ec6d4651e06"
     *                   }
     *                 }
     *               }
     *             ],
     *             "date": "2021-04-12T06:44:38+00:00",
     *             "message": "Merged in issue/NONE-renovate-master-babel-monorepo (pull request #2883)
     *
     * chore(deps): update babel monorepo to v7.13.15 (master)
     *
     * Approved-by: Chris "Daz" Darroch
     * ",
     *             "type": "commit"
     *           }
     *         }
     *         ```
     *
     *         This call requires authentication. Private repositories require the
     *         caller to authenticate with an account that has appropriate
     *         authorization.
     *
     *         For Git, the branch name should not include any prefixes (e.g.
     *         refs/heads).
    **/
    Refs.prototype.getRepositoriesWorkspaceRepoSlugRefsBranchesName = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRepositoriesWorkspaceRepoSlugRefsBranchesNameRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/refs/branches/{name}", req.pathParams);
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
                        res.branch = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
     * getRepositoriesWorkspaceRepoSlugRefsTags - Returns the tags in the repository.
     *
     * By default, results will be in the order the underlying source control system returns them and identical to
     * the ordering one sees when running "$ hg tags" or "$ git tag --list". Note that this follows simple
     * lexical ordering of the ref names.
     *
     * This can be undesirable as it does apply any natural sorting semantics, meaning for instance that tags are
     * sorted ["v10", "v11", "v9"] instead of ["v9", "v10", "v11"].
     *
     * Sorting can be changed using the ?sort= query parameter. When using ?sort=name to explicitly sort on ref name,
     * Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.
    **/
    Refs.prototype.getRepositoriesWorkspaceRepoSlugRefsTags = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRepositoriesWorkspaceRepoSlugRefsTagsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/refs/tags", req.pathParams);
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
                        res.paginatedTags = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
     * getRepositoriesWorkspaceRepoSlugRefsTagsName - Returns the specified tag.
     *
     * ```
     * $ curl -s https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/tags/3.8 -G | jq .
     * {
     *   "name": "3.8",
     *   "links": {
     *     "commits": {
     *       "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commits/3.8"
     *     },
     *     "self": {
     *       "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/tags/3.8"
     *     },
     *     "html": {
     *       "href": "https://bitbucket.org/seanfarley/hg/commits/tag/3.8"
     *     }
     *   },
     *   "tagger": {
     *     "raw": "Matt Mackall <mpm@selenic.com>",
     *     "type": "author",
     *     "user": {
     *       "username": "mpmselenic",
     *       "nickname": "mpmselenic",
     *       "display_name": "Matt Mackall",
     *       "type": "user",
     *       "uuid": "{a4934530-db4c-419c-a478-9ab4964c2ee7}",
     *       "links": {
     *         "self": {
     *           "href": "https://api.bitbucket.org/2.0/users/mpmselenic"
     *         },
     *         "html": {
     *           "href": "https://bitbucket.org/mpmselenic/"
     *         },
     *         "avatar": {
     *           "href": "https://bitbucket.org/account/mpmselenic/avatar/32/"
     *         }
     *       }
     *     }
     *   },
     *   "date": "2016-05-01T18:52:25+00:00",
     *   "message": "Added tag 3.8 for changeset f85de28eae32",
     *   "type": "tag",
     *   "target": {
     *     "hash": "f85de28eae32e7d3064b1a1321309071bbaaa069",
     *     "repository": {
     *       "links": {
     *         "self": {
     *           "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg"
     *         },
     *         "html": {
     *           "href": "https://bitbucket.org/seanfarley/hg"
     *         },
     *         "avatar": {
     *           "href": "https://bitbucket.org/seanfarley/hg/avatar/32/"
     *         }
     *       },
     *       "type": "repository",
     *       "name": "hg",
     *       "full_name": "seanfarley/hg",
     *       "uuid": "{c75687fb-e99d-4579-9087-190dbd406d30}"
     *     },
     *     "links": {
     *       "self": {
     *         "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069"
     *       },
     *       "comments": {
     *         "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/comments"
     *       },
     *       "patch": {
     *         "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/patch/f85de28eae32e7d3064b1a1321309071bbaaa069"
     *       },
     *       "html": {
     *         "href": "https://bitbucket.org/seanfarley/hg/commits/f85de28eae32e7d3064b1a1321309071bbaaa069"
     *       },
     *       "diff": {
     *         "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/diff/f85de28eae32e7d3064b1a1321309071bbaaa069"
     *       },
     *       "approve": {
     *         "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/approve"
     *       },
     *       "statuses": {
     *         "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/statuses"
     *       }
     *     },
     *     "author": {
     *       "raw": "Sean Farley <sean@farley.io>",
     *       "type": "author",
     *       "user": {
     *         "username": "seanfarley",
     *         "nickname": "seanfarley",
     *         "display_name": "Sean Farley",
     *         "type": "user",
     *         "uuid": "{a295f8a8-5876-4d43-89b5-3ad8c6c3c51d}",
     *         "links": {
     *           "self": {
     *             "href": "https://api.bitbucket.org/2.0/users/seanfarley"
     *           },
     *           "html": {
     *             "href": "https://bitbucket.org/seanfarley/"
     *           },
     *           "avatar": {
     *             "href": "https://bitbucket.org/account/seanfarley/avatar/32/"
     *           }
     *         }
     *       }
     *     },
     *     "parents": [
     *       {
     *         "hash": "9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2",
     *         "type": "commit",
     *         "links": {
     *           "self": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2"
     *           },
     *           "html": {
     *             "href": "https://bitbucket.org/seanfarley/hg/commits/9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2"
     *           }
     *         }
     *       }
     *     ],
     *     "date": "2016-05-01T04:21:17+00:00",
     *     "message": "debian: alphabetize build deps",
     *     "type": "commit"
     *   }
     * }
     * ```
    **/
    Refs.prototype.getRepositoriesWorkspaceRepoSlugRefsTagsName = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRepositoriesWorkspaceRepoSlugRefsTagsNameRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/refs/tags/{name}", req.pathParams);
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
                        res.tag = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
     * postRepositoriesWorkspaceRepoSlugRefsBranches - Creates a new branch in the specified repository.
     *
     * The payload of the POST should consist of a JSON document that
     * contains the name of the tag and the target hash.
     *
     * ```
     * curl https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/branches \
     * -s -u seanfarley -X POST -H "Content-Type: application/json" \
     * -d '{
     *     "name" : "smf/create-feature",
     *     "target" : {
     *         "hash" : "default",
     *     }
     * }'
     * ```
     *
     * This call requires authentication. Private repositories require the
     * caller to authenticate with an account that has appropriate
     * authorization.
     *
     * The branch name should not include any prefixes (e.g.
     * refs/heads). This endpoint does support using short hash prefixes for
     * the commit hash, but it may return a 400 response if the provided
     * prefix is ambiguous. Using a full commit hash is the preferred
     * approach.
    **/
    Refs.prototype.postRepositoriesWorkspaceRepoSlugRefsBranches = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRepositoriesWorkspaceRepoSlugRefsBranchesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/refs/branches", req.pathParams);
        var client = utils.createSecurityClient(this._defaultClient, req.security);
        var r = client.request(__assign({ url: url, method: "post" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.branch = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
     * postRepositoriesWorkspaceRepoSlugRefsTags - Creates a new tag in the specified repository.
     *
     * The payload of the POST should consist of a JSON document that
     * contains the name of the tag and the target hash.
     *
     * ```
     * curl https://api.bitbucket.org/2.0/repositories/jdoe/myrepo/refs/tags \
     * -s -u jdoe -X POST -H "Content-Type: application/json" \
     * -d '{
     *     "name" : "new-tag-name",
     *     "target" : {
     *         "hash" : "a1b2c3d4e5f6",
     *     }
     * }'
     * ```
     *
     * This endpoint does support using short hash prefixes for the commit
     * hash, but it may return a 400 response if the provided prefix is
     * ambiguous. Using a full commit hash is the preferred approach.
    **/
    Refs.prototype.postRepositoriesWorkspaceRepoSlugRefsTags = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRepositoriesWorkspaceRepoSlugRefsTagsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/refs/tags", req.pathParams);
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
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.tag = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    return Refs;
}());
exports.Refs = Refs;
