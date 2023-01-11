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
exports.BranchingModel = void 0;
var operations = __importStar(require("./models/operations"));
var utils = __importStar(require("../internal/utils"));
var BranchingModel = /** @class */ (function () {
    function BranchingModel(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * getRepositoriesWorkspaceRepoSlugBranchingModel - Return the branching model as applied to the repository. This view is
     * read-only. The branching model settings can be changed using the
     * [settings](branching-model/settings#get) API.
     *
     * The returned object:
     *
     * 1. Always has a `development` property. `development.branch` contains
     *    the actual repository branch object that is considered to be the
     *    `development` branch. `development.branch` will not be present
     *    if it does not exist.
     * 2. Might have a `production` property. `production` will not
     *    be present when `production` is disabled.
     *    `production.branch` contains the actual branch object that is
     *    considered to be the `production` branch. `production.branch` will
     *    not be present if it does not exist.
     * 3. Always has a `branch_types` array which contains all enabled branch
     *    types.
     *
     * Example body:
     *
     * ```
     * {
     *   "development": {
     *     "name": "master",
     *     "branch": {
     *       "type": "branch",
     *       "name": "master",
     *       "target": {
     *         "hash": "16dffcb0de1b22e249db6799532074cf32efe80f"
     *       }
     *     },
     *     "use_mainbranch": true
     *   },
     *   "production": {
     *     "name": "production",
     *     "branch": {
     *       "type": "branch",
     *       "name": "production",
     *       "target": {
     *         "hash": "16dffcb0de1b22e249db6799532074cf32efe80f"
     *       }
     *     },
     *     "use_mainbranch": false
     *   },
     *   "branch_types": [
     *     {
     *       "kind": "release",
     *       "prefix": "release/"
     *     },
     *     {
     *       "kind": "hotfix",
     *       "prefix": "hotfix/"
     *     },
     *     {
     *       "kind": "feature",
     *       "prefix": "feature/"
     *     },
     *     {
     *       "kind": "bugfix",
     *       "prefix": "bugfix/"
     *     }
     *   ],
     *   "type": "branching_model",
     *   "links": {
     *     "self": {
     *       "href": "https://api.bitbucket.org/.../branching-model"
     *     }
     *   }
     * }
     * ```
    **/
    BranchingModel.prototype.getRepositoriesWorkspaceRepoSlugBranchingModel = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRepositoriesWorkspaceRepoSlugBranchingModelRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/branching-model", req.pathParams);
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
                        res.branchingModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
     * getRepositoriesWorkspaceRepoSlugBranchingModelSettings - Return the branching model configuration for a repository. The returned
     * object:
     *
     * 1. Always has a `development` property for the development branch.
     * 2. Always a `production` property for the production branch. The
     *    production branch can be disabled.
     * 3. The `branch_types` contains all the branch types.
     *
     * This is the raw configuration for the branching model. A client
     * wishing to see the branching model with its actual current branches may
     * find the [active model API](../branching-model#get) more useful.
     *
     * Example body:
     *
     * ```
     * {
     *   "development": {
     *     "is_valid": true,
     *     "name": null,
     *     "use_mainbranch": true
     *   },
     *   "production": {
     *     "is_valid": true,
     *     "name": "production",
     *     "use_mainbranch": false,
     *     "enabled": false
     *   },
     *   "branch_types": [
     *     {
     *       "kind": "release",
     *       "enabled": true,
     *       "prefix": "release/"
     *     },
     *     {
     *       "kind": "hotfix",
     *       "enabled": true,
     *       "prefix": "hotfix/"
     *     },
     *     {
     *       "kind": "feature",
     *       "enabled": true,
     *       "prefix": "feature/"
     *     },
     *     {
     *       "kind": "bugfix",
     *       "enabled": false,
     *       "prefix": "bugfix/"
     *     }
     *   ],
     *   "type": "branching_model_settings",
     *   "links": {
     *     "self": {
     *       "href": "https://api.bitbucket.org/.../branching-model/settings"
     *     }
     *   }
     * }
     * ```
    **/
    BranchingModel.prototype.getRepositoriesWorkspaceRepoSlugBranchingModelSettings = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/branching-model/settings", req.pathParams);
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
                        res.branchingModelSettings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
     * putRepositoriesWorkspaceRepoSlugBranchingModelSettings - Update the branching model configuration for a repository.
     *
     * The `development` branch can be configured to a specific branch or to
     * track the main branch. When set to a specific branch it must
     * currently exist. Only the passed properties will be updated. The
     * properties not passed will be left unchanged. A request without a
     * `development` property will leave the development branch unchanged.
     *
     * It is possible for the `development` branch to be invalid. This
     * happens when it points at a specific branch that has been
     * deleted. This is indicated in the `is_valid` field for the branch. It is
     * not possible to update the settings for `development` if that
     * would leave the branch in an invalid state. Such a request will be
     * rejected.
     *
     * The `production` branch can be a specific branch, the main
     * branch or disabled. When set to a specific branch it must currently
     * exist. The `enabled` property can be used to enable (`true`) or
     * disable (`false`) it. Only the passed properties will be updated. The
     * properties not passed will be left unchanged. A request without a
     * `production` property will leave the production branch unchanged.
     *
     * It is possible for the `production` branch to be invalid. This
     * happens when it points at a specific branch that has been
     * deleted. This is indicated in the `is_valid` field for the branch. A
     * request that would leave `production` enabled and invalid will be
     * rejected. It is possible to update `production` and make it invalid if
     * it would also be left disabled.
     *
     * The `branch_types` property contains the branch types to be updated.
     * Only the branch types passed will be updated. All updates will be
     * rejected if it would leave the branching model in an invalid state.
     * For branch types this means that:
     *
     * 1. The prefixes for all enabled branch types are valid. For example,
     *    it is not possible to use '*' inside a Git prefix.
     * 2. A prefix of an enabled branch type must not be a prefix of another
     *    enabled branch type. This is to ensure that a branch can be easily
     *    classified by its prefix unambiguously.
     *
     * It is possible to store an invalid prefix if that branch type would be
     * left disabled. Only the passed properties will be updated. The
     * properties not passed will be left unchanged. Each branch type must
     * have a `kind` property to identify it.
     *
     * Example Body:
     *
     * ```
     *     {
     *       "development": {
     *         "use_mainbranch": true
     *       },
     *       "production": {
     *         "enabled": true,
     *         "use_mainbranch": false,
     *         "name": "production"
     *       },
     *       "branch_types": [
     *         {
     *           "kind": "bugfix",
     *           "enabled": true,
     *           "prefix": "bugfix/"
     *         },
     *         {
     *           "kind": "feature",
     *           "enabled": true,
     *           "prefix": "feature/"
     *         },
     *         {
     *           "kind": "hotfix",
     *           "prefix": "hotfix/"
     *         },
     *         {
     *           "kind": "release",
     *           "enabled": false,
     *         }
     *       ]
     *     }
     * ```
    **/
    BranchingModel.prototype.putRepositoriesWorkspaceRepoSlugBranchingModelSettings = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/branching-model/settings", req.pathParams);
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
                        res.branchingModelSettings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
    return BranchingModel;
}());
exports.BranchingModel = BranchingModel;
