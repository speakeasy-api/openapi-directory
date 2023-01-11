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
exports.GetRecordsFormatResponse = exports.GetRecordsFormatRequest = exports.GetRecordsFormat200ApplicationJson = exports.GetRecordsFormatQueryParams = exports.GetRecordsFormatPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetRecordsFormatPathParams = /** @class */ (function (_super) {
    __extends(GetRecordsFormatPathParams, _super);
    function GetRecordsFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], GetRecordsFormatPathParams.prototype, "format", void 0);
    return GetRecordsFormatPathParams;
}(utils_1.SpeakeasyBase));
exports.GetRecordsFormatPathParams = GetRecordsFormatPathParams;
var GetRecordsFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetRecordsFormatQueryParams, _super);
    function GetRecordsFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=and[category][]" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "andCategory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=and[century]" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "andCentury", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=and[collection][]" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "andCollection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=and[content_partner][]" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "andContentPartner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=and[creator][]" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "andCreator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=and[date]" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "andDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=and[dc_type][]" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "andDcType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=and[decade]" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "andDecade", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=and[format][]" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "andFormat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=and[has_large_thumbnail_url]" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "andHasLargeThumbnailUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=and[has_lat_lng]" }),
        __metadata("design:type", Boolean)
    ], GetRecordsFormatQueryParams.prototype, "andHasLatLng", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=and[is_commercial_use]" }),
        __metadata("design:type", Boolean)
    ], GetRecordsFormatQueryParams.prototype, "andIsCommercialUse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=and[or][{filter_field}][]" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "andOrFilterField", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=and[placename][]" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "andPlacename", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=and[primary_collection][]" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "andPrimaryCollection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=and[subject][]" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "andSubject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=and[title][]" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "andTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=and[usage][]" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "andUsage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=and[year]" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "andYear", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=exclude_filters_from_facets" }),
        __metadata("design:type", Boolean)
    ], GetRecordsFormatQueryParams.prototype, "excludeFiltersFromFacets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=facets" }),
        __metadata("design:type", Array)
    ], GetRecordsFormatQueryParams.prototype, "facets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=facets_page" }),
        __metadata("design:type", Number)
    ], GetRecordsFormatQueryParams.prototype, "facetsPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=facets_per_page" }),
        __metadata("design:type", Number)
    ], GetRecordsFormatQueryParams.prototype, "facetsPerPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=fields" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=geo_bbox" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "geoBbox", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetRecordsFormatQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetRecordsFormatQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "text", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=without[{filter_field}]" }),
        __metadata("design:type", String)
    ], GetRecordsFormatQueryParams.prototype, "withoutFilterField", void 0);
    return GetRecordsFormatQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetRecordsFormatQueryParams = GetRecordsFormatQueryParams;
var GetRecordsFormat200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetRecordsFormat200ApplicationJson, _super);
    function GetRecordsFormat200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=facets" }),
        __metadata("design:type", Object)
    ], GetRecordsFormat200ApplicationJson.prototype, "facets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetRecordsFormat200ApplicationJson.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=per_page" }),
        __metadata("design:type", Number)
    ], GetRecordsFormat200ApplicationJson.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=records", elemType: shared.RecordT }),
        __metadata("design:type", Array)
    ], GetRecordsFormat200ApplicationJson.prototype, "records", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_url" }),
        __metadata("design:type", String)
    ], GetRecordsFormat200ApplicationJson.prototype, "requestUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result_count" }),
        __metadata("design:type", Number)
    ], GetRecordsFormat200ApplicationJson.prototype, "resultCount", void 0);
    return GetRecordsFormat200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetRecordsFormat200ApplicationJson = GetRecordsFormat200ApplicationJson;
var GetRecordsFormatRequest = /** @class */ (function (_super) {
    __extends(GetRecordsFormatRequest, _super);
    function GetRecordsFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRecordsFormatPathParams)
    ], GetRecordsFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRecordsFormatQueryParams)
    ], GetRecordsFormatRequest.prototype, "queryParams", void 0);
    return GetRecordsFormatRequest;
}(utils_1.SpeakeasyBase));
exports.GetRecordsFormatRequest = GetRecordsFormatRequest;
var GetRecordsFormatResponse = /** @class */ (function (_super) {
    __extends(GetRecordsFormatResponse, _super);
    function GetRecordsFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetRecordsFormatResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetRecordsFormatResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetRecordsFormatResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRecordsFormat200ApplicationJson)
    ], GetRecordsFormatResponse.prototype, "getRecordsFormat200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetRecordsFormatResponse.prototype, "getRecordsFormat400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetRecordsFormatResponse.prototype, "getRecordsFormat403ApplicationJSONObject", void 0);
    return GetRecordsFormatResponse;
}(utils_1.SpeakeasyBase));
exports.GetRecordsFormatResponse = GetRecordsFormatResponse;
