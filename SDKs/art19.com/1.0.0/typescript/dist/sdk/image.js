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
exports.Image = void 0;
var operations = __importStar(require("./models/operations"));
var utils = __importStar(require("../internal/utils"));
var Image = /** @class */ (function () {
    function Image(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * getImages - Get a list of images
     *
     * An image represents a piece of artwork attached to some entity like a series, season, or episode,
     * and is _owned_ by an entity called the `bucket`.
     * An image is also a container for several `MediaAssets` representing the physical files for various
     * styles used.
     *
     * ## Media Asset Styles for Images
     *
     * Most media assets use square images. You may upload and use a square image, or upload an image of any
     * shape and crop it to a square by specifying the cropping area. This area – identified by a coordinate
     * `x, y` and a `width` & `height` – is the portion of the image used for all cover art. If an image has
     * cropping defined, the cropped version of the image will be used in any `regular` or `square` style of media
     * asset. If the original file is rectangular and does not have cropping, then the system will use a squared
     * version of the original file with the smaller of width or height as the square size.
     *
     * The original image as uploaded into the system is always retained unmodified and available through
     * the style `original`. All media asset styles except `stripped-original` consist of the cropped image.
     *
     * An image has media assets with the following styles:
     *
     * - `original`: This is the original file provided. May not be available, depending on permissions
     *   and file type.
     * - `stripped-original`: The original file with all metadata (EXIF, XMP, PNG metadata, etc.) removed.
     *   This should be used for any application needing the original, uncropped, image.
     * - `regular`: If the image has cropping defined, this is the cropped image.
     *   If not, this is a square version of the original.
     * - `thumb`: A square thumbnail of the image with a size of `100x100` pixels.
     * - `square-400`: A square version of the image with a size of `400x400` pixels.
     * - `square-640`: A square version of the image with a size of `640x640` pixels.
     * - `square-888`: A square version of the image with a size of `888x888` pixels.
     * - `square-3000`: A square version of the image with a size of `3000x3000` pixels.
     *   This variant is only created if the cropped width & height are each at least 3000.
     * - `itunes`: A square version of the image with a size of `1400x1400` pixels.
     *
     * ### Preferred image used in feeds
     *
     * For the main series image used in feeds, it is ideal to use the `square-3000` version.
     * If that is not available, the `itunes` version should be used instead.
     *
     *
    **/
    Image.prototype.getImages = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetImagesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/images";
        var client = this._securityClient;
        var qpSerializer = utils.getQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var r = client.request(__assign({ url: url, method: "get" }, requestConfig));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/vnd.api+json")) {
                        res.getImages200ApplicationVndApiPlusJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.matchContentType(contentType, "application/vnd.api+json")) {
                        res.getImages400ApplicationVndApiPlusJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 429:
                    break;
            }
            return res;
        });
    };
    /**
     * getImagesId - Get a specific image
     *
     * An image represents a piece of artwork attached to some entity like a series, season, or episode,
     * and is _owned_ by an entity called the `bucket`.
     * An image is also a container for several `MediaAssets` representing the physical files for various
     * styles used.
     *
     * ## Media Asset Styles for Images
     *
     * Most media assets use square images. You may upload and use a square image, or upload an image of any
     * shape and crop it to a square by specifying the cropping area. This area – identified by a coordinate
     * `x, y` and a `width` & `height` – is the portion of the image used for all cover art. If an image has
     * cropping defined, the cropped version of the image will be used in any `regular` or `square` style of media
     * asset. If the original file is rectangular and does not have cropping, then the system will use a squared
     * version of the original file with the smaller of width or height as the square size.
     *
     * The original image as uploaded into the system is always retained unmodified and available through
     * the style `original`. All media asset styles except `stripped-original` consist of the cropped image.
     *
     * An image has media assets with the following styles:
     *
     * - `original`: This is the original file provided. May not be available, depending on permissions
     *   and file type.
     * - `stripped-original`: The original file with all metadata (EXIF, XMP, PNG metadata, etc.) removed.
     *   This should be used for any application needing the original, uncropped, image.
     * - `regular`: If the image has cropping defined, this is the cropped image.
     *   If not, this is a square version of the original.
     * - `thumb`: A square thumbnail of the image with a size of `100x100` pixels.
     * - `square-400`: A square version of the image with a size of `400x400` pixels.
     * - `square-640`: A square version of the image with a size of `640x640` pixels.
     * - `square-888`: A square version of the image with a size of `888x888` pixels.
     * - `square-3000`: A square version of the image with a size of `3000x3000` pixels.
     *   This variant is only created if the cropped width & height are each at least 3000.
     * - `itunes`: A square version of the image with a size of `1400x1400` pixels.
     *
     * ### Preferred image used in feeds
     *
     * For the main series image used in feeds, it is ideal to use the `square-3000` version.
     * If that is not available, the `itunes` version should be used instead.
     *
     *
    **/
    Image.prototype.getImagesId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetImagesIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/images/{id}", req.pathParams);
        var client = this._securityClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/vnd.api+json")) {
                        res.getImagesId200ApplicationVndApiPlusJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 429:
                    break;
            }
            return res;
        });
    };
    return Image;
}());
exports.Image = Image;
