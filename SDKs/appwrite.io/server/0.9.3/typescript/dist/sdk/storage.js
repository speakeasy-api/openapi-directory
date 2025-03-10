"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.Storage = void 0;
var utils = __importStar(require("../internal/utils"));
var operations = __importStar(require("./models/operations"));
var shared = __importStar(require("./models/shared"));
/**
 * The Storage service allows you to manage your project files.
 */
var Storage = /** @class */ (function () {
    function Storage(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * Create File
     *
     * @remarks
     * Create a new file. The user who creates the file will automatically be assigned to read and write access unless he has passed custom values for read and write arguments.
     */
    Storage.prototype.storageCreateFile = function (req, security, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.StorageCreateFileRequestBody(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/storage/files";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req, "request", "multipart"), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.StorageCreateFileSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var r = client.request(__assign({ url: url, method: "post", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.StorageCreateFileResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.file = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.File);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Delete File
     *
     * @remarks
     * Delete a file by its unique ID. Only users with write permissions have access to delete this resource.
     */
    Storage.prototype.storageDeleteFile = function (req, security, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.StorageDeleteFileRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/storage/files/{fileId}", req);
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.StorageDeleteFileSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var r = client.request(__assign({ url: url, method: "delete" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.StorageDeleteFileResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
            }
            return res;
        });
    };
    /**
     * Get File
     *
     * @remarks
     * Get a file by its unique ID. This endpoint response returns a JSON object with the file metadata.
     */
    Storage.prototype.storageGetFile = function (req, security, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.StorageGetFileRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/storage/files/{fileId}", req);
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.StorageGetFileSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.StorageGetFileResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.file = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.File);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Get File for Download
     *
     * @remarks
     * Get a file content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory.
     */
    Storage.prototype.storageGetFileDownload = function (req, security, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.StorageGetFileDownloadRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/storage/files/{fileId}/download", req);
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.StorageGetFileDownloadSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.StorageGetFileDownloadResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
            }
            return res;
        });
    };
    /**
     * Get File Preview
     *
     * @remarks
     * Get a file preview image. Currently, this method supports preview for image files (jpg, png, and gif), other supported formats, like pdf, docs, slides, and spreadsheets, will return the file icon image. You can also pass query string arguments for cutting and resizing your preview image.
     */
    Storage.prototype.storageGetFilePreview = function (req, security, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.StorageGetFilePreviewRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/storage/files/{fileId}/preview", req);
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.StorageGetFilePreviewSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var queryParams = utils.serializeQueryParams(req);
        var r = client.request(__assign({ url: url + queryParams, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.StorageGetFilePreviewResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
            }
            return res;
        });
    };
    /**
     * Get File for View
     *
     * @remarks
     * Get a file content by its unique ID. This endpoint is similar to the download method but returns with no  'Content-Disposition: attachment' header.
     */
    Storage.prototype.storageGetFileView = function (req, security, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.StorageGetFileViewRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/storage/files/{fileId}/view", req);
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.StorageGetFileViewSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.StorageGetFileViewResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
            }
            return res;
        });
    };
    /**
     * List Files
     *
     * @remarks
     * Get a list of all the user files. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's files. [Learn more about different API modes](/docs/admin).
     */
    Storage.prototype.storageListFiles = function (req, security, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.StorageListFilesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/storage/files";
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.StorageListFilesSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var queryParams = utils.serializeQueryParams(req);
        var r = client.request(__assign({ url: url + queryParams, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.StorageListFilesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.fileList = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.FileList);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Update File
     *
     * @remarks
     * Update a file by its unique ID. Only users with write permissions have access to update this resource.
     */
    Storage.prototype.storageUpdateFile = function (req, security, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.StorageUpdateFileRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/storage/files/{fileId}", req);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req, "requestBody", "json"), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.StorageUpdateFileSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var r = client.request(__assign({ url: url, method: "put", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.StorageUpdateFileResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.file = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.File);
                    }
                    break;
            }
            return res;
        });
    };
    return Storage;
}());
exports.Storage = Storage;
