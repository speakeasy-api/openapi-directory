"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetGanalyticsOrphanUrLsResponse = exports.GetGanalyticsOrphanUrLsRequest = exports.GetGanalyticsOrphanUrLs200ApplicationJson = exports.GetGanalyticsOrphanUrLsQueryParams = exports.GetGanalyticsOrphanUrLsPathParams = exports.GetGanalyticsOrphanUrLsSourceEnum = exports.GetGanalyticsOrphanUrLsMediumEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetGanalyticsOrphanUrLsMediumEnum;
(function (GetGanalyticsOrphanUrLsMediumEnum) {
    GetGanalyticsOrphanUrLsMediumEnum["Organic"] = "organic";
    GetGanalyticsOrphanUrLsMediumEnum["Social"] = "social";
})(GetGanalyticsOrphanUrLsMediumEnum = exports.GetGanalyticsOrphanUrLsMediumEnum || (exports.GetGanalyticsOrphanUrLsMediumEnum = {}));
var GetGanalyticsOrphanUrLsSourceEnum;
(function (GetGanalyticsOrphanUrLsSourceEnum) {
    GetGanalyticsOrphanUrLsSourceEnum["All"] = "all";
    GetGanalyticsOrphanUrLsSourceEnum["Aol"] = "aol";
    GetGanalyticsOrphanUrLsSourceEnum["Ask"] = "ask";
    GetGanalyticsOrphanUrLsSourceEnum["Baidu"] = "baidu";
    GetGanalyticsOrphanUrLsSourceEnum["Bing"] = "bing";
    GetGanalyticsOrphanUrLsSourceEnum["Facebook"] = "facebook";
    GetGanalyticsOrphanUrLsSourceEnum["Google"] = "google";
    GetGanalyticsOrphanUrLsSourceEnum["GooglePlus"] = "google+";
    GetGanalyticsOrphanUrLsSourceEnum["Linkedin"] = "linkedin";
    GetGanalyticsOrphanUrLsSourceEnum["Naver"] = "naver";
    GetGanalyticsOrphanUrLsSourceEnum["Pinterest"] = "pinterest";
    GetGanalyticsOrphanUrLsSourceEnum["Reddit"] = "reddit";
    GetGanalyticsOrphanUrLsSourceEnum["Tumblr"] = "tumblr";
    GetGanalyticsOrphanUrLsSourceEnum["Twitter"] = "twitter";
    GetGanalyticsOrphanUrLsSourceEnum["Yahoo"] = "yahoo";
    GetGanalyticsOrphanUrLsSourceEnum["Yandex"] = "yandex";
})(GetGanalyticsOrphanUrLsSourceEnum = exports.GetGanalyticsOrphanUrLsSourceEnum || (exports.GetGanalyticsOrphanUrLsSourceEnum = {}));
var GetGanalyticsOrphanUrLsPathParams = /** @class */ (function (_super) {
    __extends(GetGanalyticsOrphanUrLsPathParams, _super);
    function GetGanalyticsOrphanUrLsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=analysis_slug" }),
        __metadata("design:type", String)
    ], GetGanalyticsOrphanUrLsPathParams.prototype, "analysisSlug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=medium" }),
        __metadata("design:type", String)
    ], GetGanalyticsOrphanUrLsPathParams.prototype, "medium", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project_slug" }),
        __metadata("design:type", String)
    ], GetGanalyticsOrphanUrLsPathParams.prototype, "projectSlug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=source" }),
        __metadata("design:type", String)
    ], GetGanalyticsOrphanUrLsPathParams.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], GetGanalyticsOrphanUrLsPathParams.prototype, "username", void 0);
    return GetGanalyticsOrphanUrLsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetGanalyticsOrphanUrLsPathParams = GetGanalyticsOrphanUrLsPathParams;
var GetGanalyticsOrphanUrLsQueryParams = /** @class */ (function (_super) {
    __extends(GetGanalyticsOrphanUrLsQueryParams, _super);
    function GetGanalyticsOrphanUrLsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetGanalyticsOrphanUrLsQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=size" }),
        __metadata("design:type", Number)
    ], GetGanalyticsOrphanUrLsQueryParams.prototype, "size", void 0);
    return GetGanalyticsOrphanUrLsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetGanalyticsOrphanUrLsQueryParams = GetGanalyticsOrphanUrLsQueryParams;
var GetGanalyticsOrphanUrLs200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetGanalyticsOrphanUrLs200ApplicationJson, _super);
    function GetGanalyticsOrphanUrLs200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetGanalyticsOrphanUrLs200ApplicationJson.prototype, "count", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], GetGanalyticsOrphanUrLs200ApplicationJson.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetGanalyticsOrphanUrLs200ApplicationJson.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], GetGanalyticsOrphanUrLs200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results", elemType: shared.CrawlOrphanUrLs }),
        __metadata("design:type", Array)
    ], GetGanalyticsOrphanUrLs200ApplicationJson.prototype, "results", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], GetGanalyticsOrphanUrLs200ApplicationJson.prototype, "size", void 0);
    return GetGanalyticsOrphanUrLs200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetGanalyticsOrphanUrLs200ApplicationJson = GetGanalyticsOrphanUrLs200ApplicationJson;
var GetGanalyticsOrphanUrLsRequest = /** @class */ (function (_super) {
    __extends(GetGanalyticsOrphanUrLsRequest, _super);
    function GetGanalyticsOrphanUrLsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetGanalyticsOrphanUrLsPathParams)
    ], GetGanalyticsOrphanUrLsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetGanalyticsOrphanUrLsQueryParams)
    ], GetGanalyticsOrphanUrLsRequest.prototype, "queryParams", void 0);
    return GetGanalyticsOrphanUrLsRequest;
}(utils_1.SpeakeasyBase));
exports.GetGanalyticsOrphanUrLsRequest = GetGanalyticsOrphanUrLsRequest;
var GetGanalyticsOrphanUrLsResponse = /** @class */ (function (_super) {
    __extends(GetGanalyticsOrphanUrLsResponse, _super);
    function GetGanalyticsOrphanUrLsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetGanalyticsOrphanUrLsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DefaultPayload)
    ], GetGanalyticsOrphanUrLsResponse.prototype, "defaultPayload", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetGanalyticsOrphanUrLsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetGanalyticsOrphanUrLs200ApplicationJson)
    ], GetGanalyticsOrphanUrLsResponse.prototype, "getGanalyticsOrphanURLs200ApplicationJSONObject", void 0);
    return GetGanalyticsOrphanUrLsResponse;
}(utils_1.SpeakeasyBase));
exports.GetGanalyticsOrphanUrLsResponse = GetGanalyticsOrphanUrLsResponse;
