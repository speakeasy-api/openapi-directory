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
exports.Images = void 0;
var operations = __importStar(require("./models/operations"));
var utils = __importStar(require("../internal/utils"));
var Images = /** @class */ (function () {
    function Images(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * getV3Images - Get metadata for multiple images by supplying multiple image ids
     *
     * This endpoint returns the detailed image metadata for all specified images.
     *
     * You'll need an API key and access token to use this resource.
     *
     * ## Working with Fields Sets
     *
     * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
     *
     * #### Summary Fields Set
     *
     * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build
     * search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
     *
     * ```
     * {
     *     "images":
     *     [
     *         "artist",
     *         "asset_family",
     *         "caption",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "license_model",
     *         "max_dimensions",
     *         "title"
     *     ]
     * }
     * ```
     *
     * #### Detail Fields Set
     *
     * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a
     * detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
     *
     * ```
     * {
     *     "images":
     *     [
     *         "allowed_use",
     *         "artist",
     *         "artist_title",
     *         "asset_family",
     *         "call_for_image",
     *         "caption",
     *         "city",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "color_type",
     *         "copyright",
     *         "country",
     *         "credit_line",
     *         "date_created",
     *         "date_submitted",
     *         "download_sizes",
     *         "editorial_segments",
     *         "event_ids",
     *         "graphical_style",
     *         "license_model",
     *         "max_dimensions",
     *         "orientation",
     *         "product_types",
     *         "quality_rank",
     *         "referral_destinations",
     *         "state_province",
     *         "title"
     *     ]
     * }
     * ```
     *
     * #### Display Fields Set
     *
     * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution
     * files that are most frequently used to build a UI displaying search results. The following fields are provided for every image
     * in your result set when you include **display_set** in your request.
     *
     * ```
     * {
     *     "images":
     *     [
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ]
     *     ]
     * }
     * ```
     *
     * ## Request Usage Considerations
     *
     * - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.
     *
    **/
    Images.prototype.getV3Images = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3ImagesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v3/images";
        var client = this._securityClient;
        var headers = __assign(__assign({}, utils.getHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = utils.getQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var r = client.request(__assign({ url: url, method: "get", headers: headers }, requestConfig));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.imagesDetailResults = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    break;
            }
            return res;
        });
    };
    /**
     * getV3ImagesId - Get metadata for a single image by supplying one image id
     *
     * This endpoint returns the detailed image metadata for a specified image.
     *
     * You'll need an API key and access token to use this resource.
     *
     * ## Working with Fields Sets
     *
     * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
     *
     * #### Summary Fields Set
     *
     * The **summary_set** query string parameter fields value represents a small batch of metadata fields that
     * are often used to build search response results. The following fields are provided for every image in your
     * result set when you include **summary_set** in your request.
     *
     * ```
     * {
     *     "images":
     *     [
     *         "artist",
     *         "asset_family",
     *         "caption",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "license_model",
     *         "max_dimensions",
     *         "title"
     *     ]
     * }
     * ```
     *
     * #### Detail Fields Set
     *
     * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are
     * often used to build a detailed view of images. The following fields are provided for every image in your
     * result set when you include **detail_set** in your request.
     *
     * ```
     * {
     *     "images":
     *     [
     *         "allowed_use",
     *         "artist",
     *         "artist_title",
     *         "asset_family",
     *         "call_for_image",
     *         "caption",
     *         "city",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "color_type",
     *         "copyright",
     *         "country",
     *         "credit_line",
     *         "date_created",
     *         "date_submitted",
     *         "download_sizes",
     *         "editorial_segments",
     *         "event_ids",
     *         "graphical_style",
     *         "license_model",
     *         "max_dimensions",
     *         "orientation",
     *         "product_types",
     *         "quality_rank",
     *         "referral_destinations",
     *         "state_province",
     *         "title"
     *     ]
     * }
     * ```
     *
     * #### Display Fields Set
     *
     * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low
     * resolution files that are most frequently used to build a UI displaying search results. The following fields are provided
     * for every image in your result set when you include **display_set** in your request.
     *
     * ```
     * {
     *     "images":
     *     [
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ]
     *     ]
     * }
     * ```
     *
     * ## Request Usage Considerations
     *
     * - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.
     *
    **/
    Images.prototype.getV3ImagesId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3ImagesIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/v3/images/{id}", req.pathParams);
        var client = this._securityClient;
        var headers = __assign(__assign({}, utils.getHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = utils.getQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var r = client.request(__assign({ url: url, method: "get", headers: headers }, requestConfig));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.imagesDetailResults = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    break;
            }
            return res;
        });
    };
    /**
     * getV3ImagesIdDownloadhistory - Returns information about a customer's download history for a specific asset
    **/
    Images.prototype.getV3ImagesIdDownloadhistory = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3ImagesIdDownloadhistoryRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/v3/images/{id}/downloadhistory", req.pathParams);
        var client = this._securityClient;
        var headers = __assign(__assign({}, utils.getHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = utils.getQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var r = client.request(__assign({ url: url, method: "get", headers: headers }, requestConfig));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.assetDownloadHistoryResults = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    break;
            }
            return res;
        });
    };
    /**
     * getV3ImagesIdSameSeries - Retrieve creative images from the same series
     *
     * This endpoint will provide the list of images, if any exist, from the same series as the specified creative asset id. These images are typically from the same photo shoot. This functionality will not work for editorial assets.
     *
     * You'll need an API key and access token to use this resource.
     *
     * ## Working with Fields Sets
     *
     * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
     *
     * #### Summary Fields Set
     *
     * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build
     * search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
     *
     * ```
     * {
     *     "images":
     *     [
     *         "asset_family",
     *         "caption",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "thumb"
     *             }
     *         ]
     *         "license_model",
     *         "max_dimensions",
     *         "title"
     *     ]
     * }
     * ```
     *
     * #### Detail Fields Set
     *
     * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a
     * detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
     *
     * ```
     * {
     *     "images":
     *     [
     *         "allowed_use",
     *         "artist",
     *         "asset_family",
     *         "call_for_image",
     *         "caption",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "copyright",
     *         "date_created",
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ],
     *         "editorial_segments",
     *         "event_ids",
     *         "graphical_style",
     *         "license_model",
     *         "max_dimensions",
     *         "orientation",
     *         "product_types",
     *         "quality_rank",
     *         "referral_destinations",
     *         "title"
     *     ]
     * }
     * ```
     *
     * #### Display Fields Set
     *
     * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files
     * that are most frequently used to build a UI displaying search results. The following fields are provided for every image in your result
     * set when you include **display_set** in your request.
     *
     * ```
     * {
     *     "images":
     *     [
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ]
     *     ]
     * }
     * ```
    **/
    Images.prototype.getV3ImagesIdSameSeries = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3ImagesIdSameSeriesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/v3/images/{id}/same-series", req.pathParams);
        var client = this._securityClient;
        var headers = __assign(__assign({}, utils.getHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = utils.getQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var r = client.request(__assign({ url: url, method: "get", headers: headers }, requestConfig));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.imageSearchItemSearchResults = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    break;
            }
            return res;
        });
    };
    /**
     * getV3ImagesIdSimilar - Retrieve similar images
     *
     * This endpoint will provide a list of images that are similar to the specified asset id.
     *
     * You'll need an API key and access token to use this resource.
     *
     * ## Working with Fields Sets
     *
     * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
     *
     * #### Summary Fields Set
     *
     * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build
     * search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
     *
     * ```
     * {
     *     "images":
     *     [
     *         "asset_family",
     *         "caption",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "thumb"
     *             }
     *         ]
     *         "license_model",
     *         "max_dimensions",
     *         "title"
     *     ]
     * }
     * ```
     *
     * #### Detail Fields Set
     *
     * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a
     * detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
     *
     * ```
     * {
     *     "images":
     *     [
     *         "allowed_use",
     *         "artist",
     *         "asset_family",
     *         "call_for_image",
     *         "caption",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "copyright",
     *         "date_created",
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ],
     *         "editorial_segments",
     *         "event_ids",
     *         "graphical_style",
     *         "license_model",
     *         "max_dimensions",
     *         "orientation",
     *         "product_types",
     *         "quality_rank",
     *         "referral_destinations",
     *         "title"
     *     ]
     * }
     * ```
     *
     * #### Display Fields Set
     *
     * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files
     * that are most frequently used to build a UI displaying search results. The following fields are provided for every image in your result
     * set when you include **display_set** in your request.
     *
     * ```
     * {
     *     "images":
     *     [
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ]
     *     ]
     * }
     * ```
    **/
    Images.prototype.getV3ImagesIdSimilar = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3ImagesIdSimilarRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/v3/images/{id}/similar", req.pathParams);
        var client = this._securityClient;
        var headers = __assign(__assign({}, utils.getHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = utils.getQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var r = client.request(__assign({ url: url, method: "get", headers: headers }, requestConfig));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.imageSearchItemSearchResults = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    break;
            }
            return res;
        });
    };
    return Images;
}());
exports.Images = Images;
