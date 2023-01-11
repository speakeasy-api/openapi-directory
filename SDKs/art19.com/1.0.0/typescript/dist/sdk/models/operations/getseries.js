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
exports.GetSeriesResponse = exports.GetSeriesRequest = exports.GetSeries400ApplicationVndApiPlusJson = exports.GetSeries400ApplicationVndApiPlusJsonErrors = exports.GetSeries400ApplicationVndApiPlusJsonErrorsSource = exports.GetSeries200ApplicationVndApiPlusJson = exports.GetSeriesQueryParams = exports.GetSeriesSortEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetSeriesSortEnum;
(function (GetSeriesSortEnum) {
    GetSeriesSortEnum["CreatedAt"] = "created_at";
    GetSeriesSortEnum["EpisodeReleasedAt"] = "episode_released_at";
    GetSeriesSortEnum["SortTitle"] = "sort_title";
    GetSeriesSortEnum["Title"] = "title";
    GetSeriesSortEnum["UpdatedAt"] = "updated_at";
})(GetSeriesSortEnum = exports.GetSeriesSortEnum || (exports.GetSeriesSortEnum = {}));
var GetSeriesQueryParams = /** @class */ (function (_super) {
    __extends(GetSeriesQueryParams, _super);
    function GetSeriesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ad_rep_account_id" }),
        __metadata("design:type", String)
    ], GetSeriesQueryParams.prototype, "adRepAccountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ids[]" }),
        __metadata("design:type", Array)
    ], GetSeriesQueryParams.prototype, "ids", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=network_id" }),
        __metadata("design:type", String)
    ], GetSeriesQueryParams.prototype, "networkId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page[number]" }),
        __metadata("design:type", Number)
    ], GetSeriesQueryParams.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page[size]" }),
        __metadata("design:type", Number)
    ], GetSeriesQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], GetSeriesQueryParams.prototype, "q", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=sort" }),
        __metadata("design:type", Array)
    ], GetSeriesQueryParams.prototype, "sort", void 0);
    return GetSeriesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetSeriesQueryParams = GetSeriesQueryParams;
var GetSeries200ApplicationVndApiPlusJson = /** @class */ (function (_super) {
    __extends(GetSeries200ApplicationVndApiPlusJson, _super);
    function GetSeries200ApplicationVndApiPlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: shared.Series }),
        __metadata("design:type", Array)
    ], GetSeries200ApplicationVndApiPlusJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", shared.Links)
    ], GetSeries200ApplicationVndApiPlusJson.prototype, "links", void 0);
    return GetSeries200ApplicationVndApiPlusJson;
}(utils_1.SpeakeasyBase));
exports.GetSeries200ApplicationVndApiPlusJson = GetSeries200ApplicationVndApiPlusJson;
// GetSeries400ApplicationVndApiPlusJsonErrorsSource
/**
 * An object containing references to the source of the error, optionally including any of the following members.
 *
**/
var GetSeries400ApplicationVndApiPlusJsonErrorsSource = /** @class */ (function (_super) {
    __extends(GetSeries400ApplicationVndApiPlusJsonErrorsSource, _super);
    function GetSeries400ApplicationVndApiPlusJsonErrorsSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parameter" }),
        __metadata("design:type", String)
    ], GetSeries400ApplicationVndApiPlusJsonErrorsSource.prototype, "parameter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pointer" }),
        __metadata("design:type", String)
    ], GetSeries400ApplicationVndApiPlusJsonErrorsSource.prototype, "pointer", void 0);
    return GetSeries400ApplicationVndApiPlusJsonErrorsSource;
}(utils_1.SpeakeasyBase));
exports.GetSeries400ApplicationVndApiPlusJsonErrorsSource = GetSeries400ApplicationVndApiPlusJsonErrorsSource;
var GetSeries400ApplicationVndApiPlusJsonErrors = /** @class */ (function (_super) {
    __extends(GetSeries400ApplicationVndApiPlusJsonErrors, _super);
    function GetSeries400ApplicationVndApiPlusJsonErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetSeries400ApplicationVndApiPlusJsonErrors.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetSeries400ApplicationVndApiPlusJsonErrors.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", GetSeries400ApplicationVndApiPlusJsonErrorsSource)
    ], GetSeries400ApplicationVndApiPlusJsonErrors.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetSeries400ApplicationVndApiPlusJsonErrors.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetSeries400ApplicationVndApiPlusJsonErrors.prototype, "title", void 0);
    return GetSeries400ApplicationVndApiPlusJsonErrors;
}(utils_1.SpeakeasyBase));
exports.GetSeries400ApplicationVndApiPlusJsonErrors = GetSeries400ApplicationVndApiPlusJsonErrors;
var GetSeries400ApplicationVndApiPlusJson = /** @class */ (function (_super) {
    __extends(GetSeries400ApplicationVndApiPlusJson, _super);
    function GetSeries400ApplicationVndApiPlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors", elemType: GetSeries400ApplicationVndApiPlusJsonErrors }),
        __metadata("design:type", Array)
    ], GetSeries400ApplicationVndApiPlusJson.prototype, "errors", void 0);
    return GetSeries400ApplicationVndApiPlusJson;
}(utils_1.SpeakeasyBase));
exports.GetSeries400ApplicationVndApiPlusJson = GetSeries400ApplicationVndApiPlusJson;
var GetSeriesRequest = /** @class */ (function (_super) {
    __extends(GetSeriesRequest, _super);
    function GetSeriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSeriesQueryParams)
    ], GetSeriesRequest.prototype, "queryParams", void 0);
    return GetSeriesRequest;
}(utils_1.SpeakeasyBase));
exports.GetSeriesRequest = GetSeriesRequest;
var GetSeriesResponse = /** @class */ (function (_super) {
    __extends(GetSeriesResponse, _super);
    function GetSeriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetSeriesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetSeriesResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetSeriesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSeries200ApplicationVndApiPlusJson)
    ], GetSeriesResponse.prototype, "getSeries200ApplicationVndApiPlusJsonObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSeries400ApplicationVndApiPlusJson)
    ], GetSeriesResponse.prototype, "getSeries400ApplicationVndApiPlusJsonObject", void 0);
    return GetSeriesResponse;
}(utils_1.SpeakeasyBase));
exports.GetSeriesResponse = GetSeriesResponse;
