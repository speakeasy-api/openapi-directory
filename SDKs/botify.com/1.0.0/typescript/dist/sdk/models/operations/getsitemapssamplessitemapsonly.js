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
exports.GetSitemapsSamplesSitemapsOnlyResponse = exports.GetSitemapsSamplesSitemapsOnlyRequest = exports.GetSitemapsSamplesSitemapsOnly200ApplicationJson = exports.GetSitemapsSamplesSitemapsOnlyQueryParams = exports.GetSitemapsSamplesSitemapsOnlyPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetSitemapsSamplesSitemapsOnlyPathParams = /** @class */ (function (_super) {
    __extends(GetSitemapsSamplesSitemapsOnlyPathParams, _super);
    function GetSitemapsSamplesSitemapsOnlyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=analysis_slug" }),
        __metadata("design:type", String)
    ], GetSitemapsSamplesSitemapsOnlyPathParams.prototype, "analysisSlug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project_slug" }),
        __metadata("design:type", String)
    ], GetSitemapsSamplesSitemapsOnlyPathParams.prototype, "projectSlug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], GetSitemapsSamplesSitemapsOnlyPathParams.prototype, "username", void 0);
    return GetSitemapsSamplesSitemapsOnlyPathParams;
}(utils_1.SpeakeasyBase));
exports.GetSitemapsSamplesSitemapsOnlyPathParams = GetSitemapsSamplesSitemapsOnlyPathParams;
var GetSitemapsSamplesSitemapsOnlyQueryParams = /** @class */ (function (_super) {
    __extends(GetSitemapsSamplesSitemapsOnlyQueryParams, _super);
    function GetSitemapsSamplesSitemapsOnlyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetSitemapsSamplesSitemapsOnlyQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=size" }),
        __metadata("design:type", Number)
    ], GetSitemapsSamplesSitemapsOnlyQueryParams.prototype, "size", void 0);
    return GetSitemapsSamplesSitemapsOnlyQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetSitemapsSamplesSitemapsOnlyQueryParams = GetSitemapsSamplesSitemapsOnlyQueryParams;
var GetSitemapsSamplesSitemapsOnly200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSitemapsSamplesSitemapsOnly200ApplicationJson, _super);
    function GetSitemapsSamplesSitemapsOnly200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetSitemapsSamplesSitemapsOnly200ApplicationJson.prototype, "count", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], GetSitemapsSamplesSitemapsOnly200ApplicationJson.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetSitemapsSamplesSitemapsOnly200ApplicationJson.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], GetSitemapsSamplesSitemapsOnly200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results" }),
        __metadata("design:type", Array)
    ], GetSitemapsSamplesSitemapsOnly200ApplicationJson.prototype, "results", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], GetSitemapsSamplesSitemapsOnly200ApplicationJson.prototype, "size", void 0);
    return GetSitemapsSamplesSitemapsOnly200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetSitemapsSamplesSitemapsOnly200ApplicationJson = GetSitemapsSamplesSitemapsOnly200ApplicationJson;
var GetSitemapsSamplesSitemapsOnlyRequest = /** @class */ (function (_super) {
    __extends(GetSitemapsSamplesSitemapsOnlyRequest, _super);
    function GetSitemapsSamplesSitemapsOnlyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSitemapsSamplesSitemapsOnlyPathParams)
    ], GetSitemapsSamplesSitemapsOnlyRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSitemapsSamplesSitemapsOnlyQueryParams)
    ], GetSitemapsSamplesSitemapsOnlyRequest.prototype, "queryParams", void 0);
    return GetSitemapsSamplesSitemapsOnlyRequest;
}(utils_1.SpeakeasyBase));
exports.GetSitemapsSamplesSitemapsOnlyRequest = GetSitemapsSamplesSitemapsOnlyRequest;
var GetSitemapsSamplesSitemapsOnlyResponse = /** @class */ (function (_super) {
    __extends(GetSitemapsSamplesSitemapsOnlyResponse, _super);
    function GetSitemapsSamplesSitemapsOnlyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetSitemapsSamplesSitemapsOnlyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DefaultPayload)
    ], GetSitemapsSamplesSitemapsOnlyResponse.prototype, "defaultPayload", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetSitemapsSamplesSitemapsOnlyResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSitemapsSamplesSitemapsOnly200ApplicationJson)
    ], GetSitemapsSamplesSitemapsOnlyResponse.prototype, "getSitemapsSamplesSitemapsOnly200ApplicationJSONObject", void 0);
    return GetSitemapsSamplesSitemapsOnlyResponse;
}(utils_1.SpeakeasyBase));
exports.GetSitemapsSamplesSitemapsOnlyResponse = GetSitemapsSamplesSitemapsOnlyResponse;
