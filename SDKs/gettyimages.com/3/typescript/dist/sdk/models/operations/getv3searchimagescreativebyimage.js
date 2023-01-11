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
exports.GetV3SearchImagesCreativeByImageResponse = exports.GetV3SearchImagesCreativeByImageRequest = exports.GetV3SearchImagesCreativeByImageHeaders = exports.GetV3SearchImagesCreativeByImageQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetV3SearchImagesCreativeByImageQueryParams = /** @class */ (function (_super) {
    __extends(GetV3SearchImagesCreativeByImageQueryParams, _super);
    function GetV3SearchImagesCreativeByImageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=asset_id" }),
        __metadata("design:type", String)
    ], GetV3SearchImagesCreativeByImageQueryParams.prototype, "assetId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=facet_fields" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesCreativeByImageQueryParams.prototype, "facetFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=facet_max_count" }),
        __metadata("design:type", Number)
    ], GetV3SearchImagesCreativeByImageQueryParams.prototype, "facetMaxCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=fields" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesCreativeByImageQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=image_fingerprint" }),
        __metadata("design:type", String)
    ], GetV3SearchImagesCreativeByImageQueryParams.prototype, "imageFingerprint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=image_url" }),
        __metadata("design:type", String)
    ], GetV3SearchImagesCreativeByImageQueryParams.prototype, "imageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include_facets" }),
        __metadata("design:type", Boolean)
    ], GetV3SearchImagesCreativeByImageQueryParams.prototype, "includeFacets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetV3SearchImagesCreativeByImageQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetV3SearchImagesCreativeByImageQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=product_types" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesCreativeByImageQueryParams.prototype, "productTypes", void 0);
    return GetV3SearchImagesCreativeByImageQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetV3SearchImagesCreativeByImageQueryParams = GetV3SearchImagesCreativeByImageQueryParams;
var GetV3SearchImagesCreativeByImageHeaders = /** @class */ (function (_super) {
    __extends(GetV3SearchImagesCreativeByImageHeaders, _super);
    function GetV3SearchImagesCreativeByImageHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], GetV3SearchImagesCreativeByImageHeaders.prototype, "acceptLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=GI-Country-Code" }),
        __metadata("design:type", String)
    ], GetV3SearchImagesCreativeByImageHeaders.prototype, "giCountryCode", void 0);
    return GetV3SearchImagesCreativeByImageHeaders;
}(utils_1.SpeakeasyBase));
exports.GetV3SearchImagesCreativeByImageHeaders = GetV3SearchImagesCreativeByImageHeaders;
var GetV3SearchImagesCreativeByImageRequest = /** @class */ (function (_super) {
    __extends(GetV3SearchImagesCreativeByImageRequest, _super);
    function GetV3SearchImagesCreativeByImageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetV3SearchImagesCreativeByImageQueryParams)
    ], GetV3SearchImagesCreativeByImageRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetV3SearchImagesCreativeByImageHeaders)
    ], GetV3SearchImagesCreativeByImageRequest.prototype, "headers", void 0);
    return GetV3SearchImagesCreativeByImageRequest;
}(utils_1.SpeakeasyBase));
exports.GetV3SearchImagesCreativeByImageRequest = GetV3SearchImagesCreativeByImageRequest;
var GetV3SearchImagesCreativeByImageResponse = /** @class */ (function (_super) {
    __extends(GetV3SearchImagesCreativeByImageResponse, _super);
    function GetV3SearchImagesCreativeByImageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetV3SearchImagesCreativeByImageResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.SearchByImageResourceResults)
    ], GetV3SearchImagesCreativeByImageResponse.prototype, "searchByImageResourceResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetV3SearchImagesCreativeByImageResponse.prototype, "statusCode", void 0);
    return GetV3SearchImagesCreativeByImageResponse;
}(utils_1.SpeakeasyBase));
exports.GetV3SearchImagesCreativeByImageResponse = GetV3SearchImagesCreativeByImageResponse;
