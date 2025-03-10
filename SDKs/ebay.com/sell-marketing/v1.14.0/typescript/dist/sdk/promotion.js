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
exports.Promotion = void 0;
var utils = __importStar(require("../internal/utils"));
var operations = __importStar(require("./models/operations"));
var shared = __importStar(require("./models/shared"));
var Promotion = /** @class */ (function () {
    function Promotion(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * This method returns the set of listings associated with the <b>promotion_id</b> specified in the path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.  <p>The listing details are returned in a paginated set and you can control and results returned using the following query parameters: <b>limit</b>, <b>offset</b>, <b>q</b>, <b>sort</b>, and <b>status</b>.</p>  <ul><li><b>Maximum associated listings returned:</b> 200</li>  <li><b>Default number of listings returned:</b> 200</li></ul>
     */
    Promotion.prototype.getListingSet = function (req, security, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetListingSetRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/promotion/{promotion_id}/get_listing_set", req);
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetListingSetSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var queryParams = utils.serializeQueryParams(req);
        var r = client.request(__assign({ url: url + queryParams, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.GetListingSetResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.itemsPagedCollection = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.ItemsPagedCollection);
                    }
                    break;
                case [400, 404, 500].includes(httpRes === null || httpRes === void 0 ? void 0 : httpRes.status):
                    break;
            }
            return res;
        });
    };
    /**
     * This method returns a list of a seller's undeleted promotions. <p>The call returns up to 200 currently-available promotions on the specified marketplace. While the response body does not include the promotion's <b>discountRules</b> or <b>inventoryCriterion</b> containers, it does include the <b>promotionHref</b> (which you can use to retrieve the complete details of the promotion).</p>  <p>Use query parameters to sort and filter the results by the number of promotions to return, the promotion state or type, and the eBay marketplace. You can also supply keywords to limit the response to the promotions that contain that keywords in the title of the promotion.</p> <p><b>Maximum returned:</b> 200</p>
     */
    Promotion.prototype.getPromotions = function (req, security, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetPromotionsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/promotion";
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetPromotionsSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var queryParams = utils.serializeQueryParams(req);
        var r = client.request(__assign({ url: url + queryParams, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.GetPromotionsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.promotionsPagedCollection = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.PromotionsPagedCollection);
                    }
                    break;
                case [400, 500].includes(httpRes === null || httpRes === void 0 ? void 0 : httpRes.status):
                    break;
            }
            return res;
        });
    };
    /**
     * This method pauses a currently-active (RUNNING) threshold promotion and changes the state of the promotion from <code>RUNNING</code> to <code>PAUSED</code>. Pausing a promotion makes the promotion temporarily unavailable to buyers and any currently-incomplete transactions will not receive the promotional offer until the promotion is resumed. Also, promotion teasers are not displayed when a promotion is paused.  <br><br>Pass the ID of the promotion you want to pause using the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of the seller's promotions. <br><br><b>Note:</b> You can only pause threshold promotions (you cannot pause markdown promotions).
     */
    Promotion.prototype.pausePromotion = function (req, security, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PausePromotionRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/promotion/{promotion_id}/pause", req);
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.PausePromotionSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var r = client.request(__assign({ url: url, method: "post" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.PausePromotionResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case [204, 400, 404, 500].includes(httpRes === null || httpRes === void 0 ? void 0 : httpRes.status):
                    break;
            }
            return res;
        });
    };
    /**
     * This method restarts a threshold promotion that was previously paused and changes the state of the promotion from <code>PAUSED</code> to <code>RUNNING</code>. Only promotions that have been previously paused can be resumed. Resuming a promotion reinstates the promotional teasers and any transactions that were in motion before the promotion was paused will again be eligible for the promotion.  <br><br>Pass the ID of the promotion you want to resume using the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of the seller's promotions.
     */
    Promotion.prototype.resumePromotion = function (req, security, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ResumePromotionRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/promotion/{promotion_id}/resume", req);
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.ResumePromotionSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var r = client.request(__assign({ url: url, method: "post" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.ResumePromotionResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case [204, 400, 404, 500].includes(httpRes === null || httpRes === void 0 ? void 0 : httpRes.status):
                    break;
            }
            return res;
        });
    };
    return Promotion;
}());
exports.Promotion = Promotion;
