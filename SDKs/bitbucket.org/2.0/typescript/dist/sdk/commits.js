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
exports.Commits = void 0;
var operations = __importStar(require("./models/operations"));
var utils = __importStar(require("../internal/utils"));
var Commits = /** @class */ (function () {
    function Commits(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * bulkCreateOrUpdateAnnotations - Bulk upload of annotations.
     * Annotations are individual findings that have been identified as part of a report, for example, a line of code that represents a vulnerability. These annotations can be attached to a specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory and a report can contain up to 1000 annotations.
     *
     * Add the annotations you want to upload as objects in a JSON array and make sure each annotation has the external_id field set to a unique value. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001. The external id can later be used to identify the report as an alternative to the generated [UUID](https://developer.atlassian.com/bitbucket/api/2/reference/meta/uri-uuid#uuid). You can upload up to 100 annotations per POST request.
     *
     * ### Sample cURL request:
     * ```
     * curl --location 'https://api.bitbucket.org/2.0/repositories/<username>/<reposity-name>/commit/<commit-hash>/reports/mysystem-001/annotations' \
     * --header 'Content-Type: application/json' \
     * --data-raw '[
     *   {
     *         "external_id": "mysystem-annotation001",
     *         "title": "Security scan report",
     *         "annotation_type": "VULNERABILITY",
     *         "summary": "This line represents a security threat.",
     *         "severity": "HIGH",
     *       "path": "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java",
     *         "line": 42
     *   },
     *   {
     *         "external_id": "mySystem-annotation002",
     *         "title": "Bug report",
     *         "annotation_type": "BUG",
     *         "result": "FAILED",
     *         "summary": "This line might introduce a bug.",
     *         "severity": "MEDIUM",
     *       "path": "my-service/src/main/java/com/myCompany/mysystem/logic/Helper.java",
     *         "line": 13
     *   }
     * ]'
     * ```
     *
     * ### Possible field values:
     * annotation_type: VULNERABILITY, CODE_SMELL, BUG
     * result: PASSED, FAILED, IGNORED, SKIPPED
     * severity: HIGH, MEDIUM, LOW, CRITICAL
     *
     * Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information.
     *
    **/
    Commits.prototype.bulkCreateOrUpdateAnnotations = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.BulkCreateOrUpdateAnnotationsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._defaultClient;
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.reportAnnotations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * createOrUpdateAnnotation - Creates or updates an individual annotation for the specified report.
     * Annotations are individual findings that have been identified as part of a report, for example, a line of code that represents a vulnerability. These annotations can be attached to a specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory and a report can contain up to 1000 annotations.
     *
     * Just as reports, annotation needs to be uploaded with a unique ID that can later be used to identify the report as an alternative to the generated [UUID](https://developer.atlassian.com/bitbucket/api/2/reference/meta/uri-uuid#uuid). If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001.
     *
     * ### Sample cURL request:
     * ```
     * curl --request PUT 'https://api.bitbucket.org/2.0/repositories/<username>/<reposity-name>/commit/<commit-hash>/reports/mySystem-001/annotations/mysystem-annotation001' \
     * --header 'Content-Type: application/json' \
     * --data-raw '{
     *     "title": "Security scan report",
     *     "annotation_type": "VULNERABILITY",
     *     "summary": "This line represents a security thread.",
     *     "severity": "HIGH",
     *     "path": "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java",
     *     "line": 42
     * }'
     * ```
     *
     * ### Possible field values:
     * annotation_type: VULNERABILITY, CODE_SMELL, BUG
     * result: PASSED, FAILED, IGNORED, SKIPPED
     * severity: HIGH, MEDIUM, LOW, CRITICAL
     *
     * Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information.
     *
    **/
    Commits.prototype.createOrUpdateAnnotation = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateOrUpdateAnnotationRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._defaultClient;
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
                        res.reportAnnotation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
    /**
     * createOrUpdateReport - Creates or updates a report for the specified commit.
     * To upload a report, make sure to generate an ID that is unique across all reports for that commit. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-001.
     *
     * ### Sample cURL request:
     * ```
     * curl --request PUT 'https://api.bitbucket.org/2.0/repositories/<username>/<reposity-name>/commit/<commit-hash>/reports/mysystem-001' \
     * --header 'Content-Type: application/json' \
     * --data-raw '{
     *     "title": "Security scan report",
     *     "details": "This pull request introduces 10 new dependency vulnerabilities.",
     *     "report_type": "SECURITY",
     *     "reporter": "mySystem",
     *     "link": "http://www.mysystem.com/reports/001",
     *     "result": "FAILED",
     *     "data": [
     *         {
     *             "title": "Duration (seconds)",
     *             "type": "DURATION",
     *             "value": 14
     *         },
     *         {
     *             "title": "Safe to merge?",
     *             "type": "BOOLEAN",
     *             "value": false
     *         }
     *     ]
     * }'
     * ```
     *
     * ### Possible field values:
     * report_type: SECURITY, COVERAGE, TEST, BUG
     * result: PASSED, FAILED, PENDING
     * data.type: BOOLEAN, DATE, DURATION, LINK, NUMBER, PERCENTAGE, TEXT
     *
     * #### Data field formats
     * | Type  Field   | Value Field Type  | Value Field Display |
     * |:--------------|:------------------|:--------------------|
     * | None/ Omitted | Number, String or Boolean (not an array or object) | Plain text |
     * | BOOLEAN	| Boolean | The value will be read as a JSON boolean and displayed as 'Yes' or 'No'. |
     * | DATE  | Number | The value will be read as a JSON number in the form of a Unix timestamp (milliseconds) and will be displayed as a relative date if the date is less than one week ago, otherwise  it will be displayed as an absolute date. |
     * | DURATION | Number | The value will be read as a JSON number in milliseconds and will be displayed in a human readable duration format. |
     * | LINK | Object: `{"text": "Link text here", "href": "https://link.to.annotation/in/external/tool"}` | The value will be read as a JSON object containing the fields "text" and "href" and will be displayed as a clickable link on the report. |
     * | NUMBER | Number | The value will be read as a JSON number and large numbers will be  displayed in a human readable format (e.g. 14.3k). |
     * | PERCENTAGE | Number (between 0 and 100) | The value will be read as a JSON number between 0 and 100 and will be displayed with a percentage sign. |
     * | TEXT | String | The value will be read as a JSON string and will be displayed as-is |
     *
     * Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information.
     *
    **/
    Commits.prototype.createOrUpdateReport = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateOrUpdateReportRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._defaultClient;
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
                        res.report = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
    /**
     * deleteAnnotation - Deletes a single Annotation matching the provided ID.
    **/
    Commits.prototype.deleteAnnotation = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteAnnotationRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}", req.pathParams);
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
            }
            return res;
        });
    };
    /**
     * deleteReport - Deletes a single Report matching the provided ID.
    **/
    Commits.prototype.deleteReport = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteReportRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}", req.pathParams);
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
            }
            return res;
        });
    };
    /**
     * deleteRepositoriesWorkspaceRepoSlugCommitCommitApprove - Redact the authenticated user's approval of the specified commit.
     *
     * This operation is only available to users that have explicit access to
     * the repository. In contrast, just the fact that a repository is
     * publicly accessible to users does not give them the ability to approve
     * commits.
    **/
    Commits.prototype.deleteRepositoriesWorkspaceRepoSlugCommitCommitApprove = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/approve", req.pathParams);
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
     * getAnnotation - Returns a single Annotation matching the provided ID.
    **/
    Commits.prototype.getAnnotation = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAnnotationRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}", req.pathParams);
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
                        res.reportAnnotation = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
     * getAnnotationsForReport - Returns a paginated list of Annotations for a specified report.
    **/
    Commits.prototype.getAnnotationsForReport = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAnnotationsForReportRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations", req.pathParams);
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
                        res.paginatedAnnotations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * getReport - Returns a single Report matching the provided ID.
    **/
    Commits.prototype.getReport = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetReportRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}", req.pathParams);
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
                        res.report = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
     * getReportsForCommit - Returns a paginated list of Reports linked to this commit.
    **/
    Commits.prototype.getReportsForCommit = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetReportsForCommitRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports", req.pathParams);
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
                        res.paginatedReports = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * getRepositoriesWorkspaceRepoSlugCommitCommit - Returns the specified commit.
     *
     * Example:
     *
     * ```
     * $ curl https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a1
     * {
     *     "rendered": {
     *         "message": {
     *         "raw": "Add a GEORDI_OUTPUT_DIR setting",
     *         "markup": "markdown",
     *         "html": "<p>Add a GEORDI_OUTPUT_DIR setting</p>",
     *         "type": "rendered"
     *         }
     *     },
     *     "hash": "f7591a13eda445d9a9167f98eb870319f4b6c2d8",
     *     "repository": {
     *         "name": "geordi",
     *         "type": "repository",
     *         "full_name": "bitbucket/geordi",
     *         "links": {
     *             "self": {
     *                 "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi"
     *             },
     *             "html": {
     *                 "href": "https://bitbucket.org/bitbucket/geordi"
     *             },
     *             "avatar": {
     *                 "href": "https://bytebucket.org/ravatar/%7B85d08b4e-571d-44e9-a507-fa476535aa98%7D?ts=1730260"
     *             }
     *         },
     *         "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
     *     },
     *     "links": {
     *         "self": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8"
     *         },
     *         "comments": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8/comments"
     *         },
     *         "patch": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/patch/f7591a13eda445d9a9167f98eb870319f4b6c2d8"
     *         },
     *         "html": {
     *             "href": "https://bitbucket.org/bitbucket/geordi/commits/f7591a13eda445d9a9167f98eb870319f4b6c2d8"
     *         },
     *         "diff": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/diff/f7591a13eda445d9a9167f98eb870319f4b6c2d8"
     *         },
     *         "approve": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8/approve"
     *         },
     *         "statuses": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8/statuses"
     *         }
     *     },
     *     "author": {
     *         "raw": "Brodie Rao <a@b.c>",
     *         "type": "author",
     *         "user": {
     *             "display_name": "Brodie Rao",
     *             "uuid": "{9484702e-c663-4afd-aefb-c93a8cd31c28}",
     *             "links": {
     *                 "self": {
     *                     "href": "https://api.bitbucket.org/2.0/users/%7B9484702e-c663-4afd-aefb-c93a8cd31c28%7D"
     *                 },
     *                 "html": {
     *                     "href": "https://bitbucket.org/%7B9484702e-c663-4afd-aefb-c93a8cd31c28%7D/"
     *                 },
     *                 "avatar": {
     *                     "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:3aae1e05-702a-41e5-81c8-f36f29afb6ca/613070db-28b0-421f-8dba-ae8a87e2a5c7/128"
     *                 }
     *             },
     *             "type": "user",
     *             "nickname": "brodie",
     *             "account_id": "557058:3aae1e05-702a-41e5-81c8-f36f29afb6ca"
     *         }
     *     },
     *     "summary": {
     *         "raw": "Add a GEORDI_OUTPUT_DIR setting",
     *         "markup": "markdown",
     *         "html": "<p>Add a GEORDI_OUTPUT_DIR setting</p>",
     *         "type": "rendered"
     *     },
     *     "participants": [],
     *     "parents": [
     *         {
     *             "type": "commit",
     *             "hash": "f06941fec4ef6bcb0c2456927a0cf258fa4f899b",
     *             "links": {
     *                 "self": {
     *                     "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f06941fec4ef6bcb0c2456927a0cf258fa4f899b"
     *                 },
     *                 "html": {
     *                     "href": "https://bitbucket.org/bitbucket/geordi/commits/f06941fec4ef6bcb0c2456927a0cf258fa4f899b"
     *                 }
     *             }
     *         }
     *     ],
     *     "date": "2012-07-16T19:37:54+00:00",
     *     "message": "Add a GEORDI_OUTPUT_DIR setting",
     *     "type": "commit"
     * }
     * ```
    **/
    Commits.prototype.getRepositoriesWorkspaceRepoSlugCommitCommit = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRepositoriesWorkspaceRepoSlugCommitCommitRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}", req.pathParams);
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
                        res.commit = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
     * getRepositoriesWorkspaceRepoSlugCommitCommitComments - Returns the commit's comments.
     *
     * This includes both global and inline comments.
     *
     * The default sorting is oldest to newest and can be overridden with
     * the `sort` query parameter.
    **/
    Commits.prototype.getRepositoriesWorkspaceRepoSlugCommitCommitComments = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/comments", req.pathParams);
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
                        res.paginatedCommitComments = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * getRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId - Returns the specified commit comment.
    **/
    Commits.prototype.getRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}", req.pathParams);
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
                        res.commitComment = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * getRepositoriesWorkspaceRepoSlugCommits - These are the repository's commits. They are paginated and returned
     * in reverse chronological order, similar to the output of `git log`.
     * Like these tools, the DAG can be filtered.
     *
     * ## GET /repositories/{workspace}/{repo_slug}/commits/
     *
     * Returns all commits in the repo in topological order (newest commit
     * first). All branches and tags are included (similar to
     * `git log --all`).
     *
     * ## GET /repositories/{workspace}/{repo_slug}/commits/?exclude=master
     *
     * Returns all commits in the repo that are not on master
     * (similar to `git log --all ^master`).
     *
     * ## GET /repositories/{workspace}/{repo_slug}/commits/?include=foo&include=bar&exclude=fu&exclude=fubar
     *
     * Returns all commits that are on refs `foo` or `bar`, but not on `fu` or
     * `fubar` (similar to `git log foo bar ^fu ^fubar`).
     *
     * An optional `path` parameter can be specified that will limit the
     * results to commits that affect that path. `path` can either be a file
     * or a directory. If a directory is specified, commits are returned that
     * have modified any file in the directory tree rooted by `path`. It is
     * important to note that if the `path` parameter is specified, the commits
     * returned by this endpoint may no longer be a DAG, parent commits that
     * do not modify the path will be omitted from the response.
     *
     * ## GET /repositories/{workspace}/{repo_slug}/commits/?path=README.md&include=foo&include=bar&exclude=master
     *
     * Returns all commits that are on refs `foo` or `bar`, but not on `master`
     * that changed the file README.md.
     *
     * ## GET /repositories/{workspace}/{repo_slug}/commits/?path=src/&include=foo&include=bar&exclude=master
     *
     * Returns all commits that are on refs `foo` or `bar`, but not on `master`
     * that changed to a file in any file in the directory src or its children.
     *
     * Because the response could include a very large number of commits, it
     * is paginated. Follow the 'next' link in the response to navigate to the
     * next page of commits. As with other paginated resources, do not
     * construct your own links.
     *
     * When the include and exclude parameters are more than can fit in a
     * query string, clients can use a `x-www-form-urlencoded` POST instead.
    **/
    Commits.prototype.getRepositoriesWorkspaceRepoSlugCommits = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRepositoriesWorkspaceRepoSlugCommitsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commits", req.pathParams);
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
                        res.paginatedChangeset = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
     * getRepositoriesWorkspaceRepoSlugCommitsRevision - These are the repository's commits. They are paginated and returned
     * in reverse chronological order, similar to the output of `git log`.
     * Like these tools, the DAG can be filtered.
     *
     * ## GET /repositories/{workspace}/{repo_slug}/commits/master
     *
     * Returns all commits on rev `master` (similar to `git log master`).
     *
     * ## GET /repositories/{workspace}/{repo_slug}/commits/dev?include=foo&exclude=master
     *
     * Returns all commits on ref `dev` or `foo`, except those that are reachable on
     * `master` (similar to `git log dev foo ^master`).
     *
     * An optional `path` parameter can be specified that will limit the
     * results to commits that affect that path. `path` can either be a file
     * or a directory. If a directory is specified, commits are returned that
     * have modified any file in the directory tree rooted by `path`. It is
     * important to note that if the `path` parameter is specified, the commits
     * returned by this endpoint may no longer be a DAG, parent commits that
     * do not modify the path will be omitted from the response.
     *
     * ## GET /repositories/{workspace}/{repo_slug}/commits/dev?path=README.md&include=foo&include=bar&exclude=master
     *
     * Returns all commits that are on refs `dev` or `foo` or `bar`, but not on `master`
     * that changed the file README.md.
     *
     * ## GET /repositories/{workspace}/{repo_slug}/commits/dev?path=src/&include=foo&exclude=master
     *
     * Returns all commits that are on refs `dev` or `foo`, but not on `master`
     * that changed to a file in any file in the directory src or its children.
     *
     * Because the response could include a very large number of commits, it
     * is paginated. Follow the 'next' link in the response to navigate to the
     * next page of commits. As with other paginated resources, do not
     * construct your own links.
     *
     * When the include and exclude parameters are more than can fit in a
     * query string, clients can use a `x-www-form-urlencoded` POST instead.
    **/
    Commits.prototype.getRepositoriesWorkspaceRepoSlugCommitsRevision = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRepositoriesWorkspaceRepoSlugCommitsRevisionRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commits/{revision}", req.pathParams);
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
                        res.paginatedChangeset = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
     * getRepositoriesWorkspaceRepoSlugDiffSpec - Produces a raw git-style diff.
     *
     * #### Single commit spec
     *
     * If the `spec` argument to this API is a single commit, the diff is
     * produced against the first parent of the specified commit.
     *
     * #### Two commit spec
     *
     * Two commits separated by `..` may be provided as the `spec`, e.g.,
     * `3a8b42..9ff173`. When two commits are provided and the `merge` query
     * parameter is true or absent, this API produces a 3-way diff, also
     * referred to as a merge diff. This is equivalent to merging the left
     * branch into the right branch and then computing the diff of the merge
     * commit against its first parent (the right branch). These diffs have
     * the same behavior as pull requests that show the 3-way diff, such as
     * the [Bitbucket Cloud Pull
     * Request](https://blog.developer.atlassian.com/a-better-pull-request/).
     * For a simple git-style diff, add `merge=false` to the query.
     *
     * The two commits are interpreted as follows:
     *
     * * First commit: the commit containing the changes we wish to preview
     * * Second commit: the commit representing the state to which we want to
     *   compare the first commit
     * * **Note**: This is the opposite of the order used in `git diff`.
     *
     * #### Comparison to patches
     *
     * While similar to patches, diffs:
     *
     * * Don't have a commit header (username, commit message, etc)
     * * Support the optional `path=foo/bar.py` query param to filter
     *   the diff to just that one file diff
     *
     * #### Response
     *
     * The raw diff is returned as-is, in whatever encoding the files in the
     * repository use. It is not decoded into unicode. As such, the
     * content-type is `text/plain`.
    **/
    Commits.prototype.getRepositoriesWorkspaceRepoSlugDiffSpec = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRepositoriesWorkspaceRepoSlugDiffSpecRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/diff/{spec}", req.pathParams);
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
     * getRepositoriesWorkspaceRepoSlugDiffstatSpec - Produces a response in JSON format with a record for every path
     * modified, including information on the type of the change and the
     * number of lines added and removed.
     *
     * #### Single commit spec
     *
     * If the `spec` argument to this API is a single commit, the diff is
     * produced against the first parent of the specified commit.
     *
     * #### Two commit spec
     *
     * Two commits separated by `..` may be provided as the `spec`, e.g.,
     * `3a8b42..9ff173`. When two commits are provided and the `merge` query
     * parameter is true or absent, this API produces a 3-way diff, also
     * referred to as a merge diff. This is equivalent to merging the left
     * branch into the right branch and then computing the diff of the merge
     * commit against its first parent (the right branch). These diffs have
     * the same behavior as pull requests that show the 3-way diff, such as
     * the [Bitbucket Cloud Pull
     * Request](https://blog.developer.atlassian.com/a-better-pull-request/).
     * For a simple git-style diff, add `merge=false` to the query.
     *
     * The two commits are interpreted as follows:
     *
     * * First commit: the commit containing the changes we wish to preview
     * * Second commit: the commit representing the state to which we want to
     *   compare the first commit
     * * **Note**: This is the opposite of the order used in `git diff`.
     *
     * #### Sample output
     * ```
     * curl https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/diffstat/d222fa2..e174964
     * {
     *     "pagelen": 500,
     *     "values": [
     *         {
     *             "type": "diffstat",
     *             "status": "modified",
     *             "lines_removed": 1,
     *             "lines_added": 2,
     *             "old": {
     *                 "path": "setup.py",
     *                 "escaped_path": "setup.py",
     *                 "type": "commit_file",
     *                 "links": {
     *                     "self": {
     *                         "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/src/e1749643d655d7c7014001a6c0f58abaf42ad850/setup.py"
     *                     }
     *                 }
     *             },
     *             "new": {
     *                 "path": "setup.py",
     *                 "escaped_path": "setup.py",
     *                 "type": "commit_file",
     *                 "links": {
     *                     "self": {
     *                         "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/src/d222fa235229c55dad20b190b0b571adf737d5a6/setup.py"
     *                     }
     *                 }
     *             }
     *         }
     *     ],
     *     "page": 1,
     *     "size": 1
     * }
     * ```
    **/
    Commits.prototype.getRepositoriesWorkspaceRepoSlugDiffstatSpec = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRepositoriesWorkspaceRepoSlugDiffstatSpecRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/diffstat/{spec}", req.pathParams);
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
                        res.paginatedDiffstats = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
     * getRepositoriesWorkspaceRepoSlugMergeBaseRevspec - Returns the best common ancestor between two commits, specified in a revspec
     * of 2 commits (e.g. 3a8b42..9ff173).
     *
     * If more than one best common ancestor exists, only one will be returned. It is
     * unspecified which will be returned.
    **/
    Commits.prototype.getRepositoriesWorkspaceRepoSlugMergeBaseRevspec = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/merge-base/{revspec}", req.pathParams);
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
                        res.commit = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
     * getRepositoriesWorkspaceRepoSlugPatchSpec - Produces a raw patch for a single commit (diffed against its first
     * parent), or a patch-series for a revspec of 2 commits (e.g.
     * `3a8b42..9ff173` where the first commit represents the source and the
     * second commit the destination).
     *
     * In case of the latter (diffing a revspec), a patch series is returned
     * for the commits on the source branch (`3a8b42` and its ancestors in
     * our example). For Mercurial, a single patch is returned that combines
     * the changes of all commits on the source branch.
     *
     * While similar to diffs, patches:
     *
     * * Have a commit header (username, commit message, etc)
     * * Do not support the `path=foo/bar.py` query parameter
     *
     * The raw patch is returned as-is, in whatever encoding the files in the
     * repository use. It is not decoded into unicode. As such, the
     * content-type is `text/plain`.
    **/
    Commits.prototype.getRepositoriesWorkspaceRepoSlugPatchSpec = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRepositoriesWorkspaceRepoSlugPatchSpecRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/patch/{spec}", req.pathParams);
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
     * postRepositoriesWorkspaceRepoSlugCommitCommitApprove - Approve the specified commit as the authenticated user.
     *
     * This operation is only available to users that have explicit access to
     * the repository. In contrast, just the fact that a repository is
     * publicly accessible to users does not give them the ability to approve
     * commits.
    **/
    Commits.prototype.postRepositoriesWorkspaceRepoSlugCommitCommitApprove = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRepositoriesWorkspaceRepoSlugCommitCommitApproveRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/approve", req.pathParams);
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
     * postRepositoriesWorkspaceRepoSlugCommitCommitComments - Creates new comment on the specified commit.
     *
     * To post a reply to an existing comment, include the `parent.id` field:
     *
     * ```
     * $ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/commit/db9ba1e031d07a02603eae0e559a7adc010257fc/comments/ \
     *   -X POST -u evzijst \
     *   -H 'Content-Type: application/json' \
     *   -d '{"content": {"raw": "One more thing!"},
     *        "parent": {"id": 5728901}}'
     * ```
    **/
    Commits.prototype.postRepositoriesWorkspaceRepoSlugCommitCommitComments = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/comments", req.pathParams);
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
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
            }
            return res;
        });
    };
    /**
     * postRepositoriesWorkspaceRepoSlugCommits - Identical to `GET /repositories/{workspace}/{repo_slug}/commits`,
     * except that POST allows clients to place the include and exclude
     * parameters in the request body to avoid URL length issues.
     *
     * **Note that this resource does NOT support new commit creation.**
    **/
    Commits.prototype.postRepositoriesWorkspaceRepoSlugCommits = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRepositoriesWorkspaceRepoSlugCommitsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commits", req.pathParams);
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
                        res.paginatedChangeset = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
     * postRepositoriesWorkspaceRepoSlugCommitsRevision - Identical to `GET /repositories/{workspace}/{repo_slug}/commits/{revision}`,
     * except that POST allows clients to place the include and exclude
     * parameters in the request body to avoid URL length issues.
     *
     * **Note that this resource does NOT support new commit creation.**
    **/
    Commits.prototype.postRepositoriesWorkspaceRepoSlugCommitsRevision = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostRepositoriesWorkspaceRepoSlugCommitsRevisionRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commits/{revision}", req.pathParams);
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
                        res.paginatedChangeset = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
    return Commits;
}());
exports.Commits = Commits;
