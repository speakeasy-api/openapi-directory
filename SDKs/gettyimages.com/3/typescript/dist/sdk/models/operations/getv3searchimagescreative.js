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
exports.GetV3SearchImagesCreativeResponse = exports.GetV3SearchImagesCreativeRequest = exports.GetV3SearchImagesCreativeHeaders = exports.GetV3SearchImagesCreativeQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetV3SearchImagesCreativeQueryParams = /** @class */ (function (_super) {
    __extends(GetV3SearchImagesCreativeQueryParams, _super);
    function GetV3SearchImagesCreativeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=age_of_people" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesCreativeQueryParams.prototype, "ageOfPeople", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=artists" }),
        __metadata("design:type", String)
    ], GetV3SearchImagesCreativeQueryParams.prototype, "artists", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=collection_codes" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesCreativeQueryParams.prototype, "collectionCodes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=collections_filter_type" }),
        __metadata("design:type", String)
    ], GetV3SearchImagesCreativeQueryParams.prototype, "collectionsFilterType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=color" }),
        __metadata("design:type", String)
    ], GetV3SearchImagesCreativeQueryParams.prototype, "color", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=compositions" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesCreativeQueryParams.prototype, "compositions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=download_product" }),
        __metadata("design:type", String)
    ], GetV3SearchImagesCreativeQueryParams.prototype, "downloadProduct", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=embed_content_only" }),
        __metadata("design:type", Boolean)
    ], GetV3SearchImagesCreativeQueryParams.prototype, "embedContentOnly", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=ethnicity" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesCreativeQueryParams.prototype, "ethnicity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=exclude_editorial_use_only" }),
        __metadata("design:type", Boolean)
    ], GetV3SearchImagesCreativeQueryParams.prototype, "excludeEditorialUseOnly", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=exclude_nudity" }),
        __metadata("design:type", Boolean)
    ], GetV3SearchImagesCreativeQueryParams.prototype, "excludeNudity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=facet_fields" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesCreativeQueryParams.prototype, "facetFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=facet_max_count" }),
        __metadata("design:type", Number)
    ], GetV3SearchImagesCreativeQueryParams.prototype, "facetMaxCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=fields" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesCreativeQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=file_types" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesCreativeQueryParams.prototype, "fileTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=graphical_styles" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesCreativeQueryParams.prototype, "graphicalStyles", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=graphical_styles_filter_type" }),
        __metadata("design:type", String)
    ], GetV3SearchImagesCreativeQueryParams.prototype, "graphicalStylesFilterType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include_facets" }),
        __metadata("design:type", Boolean)
    ], GetV3SearchImagesCreativeQueryParams.prototype, "includeFacets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include_related_searches" }),
        __metadata("design:type", Boolean)
    ], GetV3SearchImagesCreativeQueryParams.prototype, "includeRelatedSearches", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=keyword_ids" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesCreativeQueryParams.prototype, "keywordIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=minimum_size" }),
        __metadata("design:type", String)
    ], GetV3SearchImagesCreativeQueryParams.prototype, "minimumSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=number_of_people" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesCreativeQueryParams.prototype, "numberOfPeople", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=orientations" }),
        __metadata("design:type", Array)
    ], GetV3SearchImagesCreativeQueryParams.prototype, "orientations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetV3SearchImagesCreativeQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetV3SearchImagesCreativeQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=phrase" }),
        __metadata("design:type", String)
    ], GetV3SearchImagesCreativeQueryParams.prototype, "phrase", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=safe_search" }),
        __metadata("design:type", Boolean)
    ], GetV3SearchImagesCreativeQueryParams.prototype, "safeSearch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort_order" }),
        __metadata("design:type", String)
    ], GetV3SearchImagesCreativeQueryParams.prototype, "sortOrder", void 0);
    return GetV3SearchImagesCreativeQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetV3SearchImagesCreativeQueryParams = GetV3SearchImagesCreativeQueryParams;
var GetV3SearchImagesCreativeHeaders = /** @class */ (function (_super) {
    __extends(GetV3SearchImagesCreativeHeaders, _super);
    function GetV3SearchImagesCreativeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], GetV3SearchImagesCreativeHeaders.prototype, "acceptLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=GI-Country-Code" }),
        __metadata("design:type", String)
    ], GetV3SearchImagesCreativeHeaders.prototype, "giCountryCode", void 0);
    return GetV3SearchImagesCreativeHeaders;
}(utils_1.SpeakeasyBase));
exports.GetV3SearchImagesCreativeHeaders = GetV3SearchImagesCreativeHeaders;
var GetV3SearchImagesCreativeRequest = /** @class */ (function (_super) {
    __extends(GetV3SearchImagesCreativeRequest, _super);
    function GetV3SearchImagesCreativeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetV3SearchImagesCreativeQueryParams)
    ], GetV3SearchImagesCreativeRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetV3SearchImagesCreativeHeaders)
    ], GetV3SearchImagesCreativeRequest.prototype, "headers", void 0);
    return GetV3SearchImagesCreativeRequest;
}(utils_1.SpeakeasyBase));
exports.GetV3SearchImagesCreativeRequest = GetV3SearchImagesCreativeRequest;
var GetV3SearchImagesCreativeResponse = /** @class */ (function (_super) {
    __extends(GetV3SearchImagesCreativeResponse, _super);
    function GetV3SearchImagesCreativeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetV3SearchImagesCreativeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CreativeImageSearchResults)
    ], GetV3SearchImagesCreativeResponse.prototype, "creativeImageSearchResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetV3SearchImagesCreativeResponse.prototype, "statusCode", void 0);
    return GetV3SearchImagesCreativeResponse;
}(utils_1.SpeakeasyBase));
exports.GetV3SearchImagesCreativeResponse = GetV3SearchImagesCreativeResponse;
