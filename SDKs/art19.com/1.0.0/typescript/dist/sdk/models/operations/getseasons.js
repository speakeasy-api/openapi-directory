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
exports.GetSeasonsResponse = exports.GetSeasonsRequest = exports.GetSeasons400ApplicationVndApiPlusJson = exports.GetSeasons400ApplicationVndApiPlusJsonErrors = exports.GetSeasons400ApplicationVndApiPlusJsonErrorsSource = exports.GetSeasons200ApplicationVndApiPlusJson = exports.GetSeasonsQueryParams = exports.GetSeasonsSortEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetSeasonsSortEnum;
(function (GetSeasonsSortEnum) {
    GetSeasonsSortEnum["CreatedAt"] = "created_at";
    GetSeasonsSortEnum["SortTitle"] = "sort_title";
    GetSeasonsSortEnum["Title"] = "title";
    GetSeasonsSortEnum["UpdatedAt"] = "updated_at";
})(GetSeasonsSortEnum = exports.GetSeasonsSortEnum || (exports.GetSeasonsSortEnum = {}));
var GetSeasonsQueryParams = /** @class */ (function (_super) {
    __extends(GetSeasonsQueryParams, _super);
    function GetSeasonsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ids[]" }),
        __metadata("design:type", Array)
    ], GetSeasonsQueryParams.prototype, "ids", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page[number]" }),
        __metadata("design:type", Number)
    ], GetSeasonsQueryParams.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page[size]" }),
        __metadata("design:type", Number)
    ], GetSeasonsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], GetSeasonsQueryParams.prototype, "q", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=series_id" }),
        __metadata("design:type", String)
    ], GetSeasonsQueryParams.prototype, "seriesId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=sort" }),
        __metadata("design:type", Array)
    ], GetSeasonsQueryParams.prototype, "sort", void 0);
    return GetSeasonsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetSeasonsQueryParams = GetSeasonsQueryParams;
var GetSeasons200ApplicationVndApiPlusJson = /** @class */ (function (_super) {
    __extends(GetSeasons200ApplicationVndApiPlusJson, _super);
    function GetSeasons200ApplicationVndApiPlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: shared.Season }),
        __metadata("design:type", Array)
    ], GetSeasons200ApplicationVndApiPlusJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", shared.Links)
    ], GetSeasons200ApplicationVndApiPlusJson.prototype, "links", void 0);
    return GetSeasons200ApplicationVndApiPlusJson;
}(utils_1.SpeakeasyBase));
exports.GetSeasons200ApplicationVndApiPlusJson = GetSeasons200ApplicationVndApiPlusJson;
// GetSeasons400ApplicationVndApiPlusJsonErrorsSource
/**
 * An object containing references to the source of the error, optionally including any of the following members.
 *
**/
var GetSeasons400ApplicationVndApiPlusJsonErrorsSource = /** @class */ (function (_super) {
    __extends(GetSeasons400ApplicationVndApiPlusJsonErrorsSource, _super);
    function GetSeasons400ApplicationVndApiPlusJsonErrorsSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parameter" }),
        __metadata("design:type", String)
    ], GetSeasons400ApplicationVndApiPlusJsonErrorsSource.prototype, "parameter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pointer" }),
        __metadata("design:type", String)
    ], GetSeasons400ApplicationVndApiPlusJsonErrorsSource.prototype, "pointer", void 0);
    return GetSeasons400ApplicationVndApiPlusJsonErrorsSource;
}(utils_1.SpeakeasyBase));
exports.GetSeasons400ApplicationVndApiPlusJsonErrorsSource = GetSeasons400ApplicationVndApiPlusJsonErrorsSource;
var GetSeasons400ApplicationVndApiPlusJsonErrors = /** @class */ (function (_super) {
    __extends(GetSeasons400ApplicationVndApiPlusJsonErrors, _super);
    function GetSeasons400ApplicationVndApiPlusJsonErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetSeasons400ApplicationVndApiPlusJsonErrors.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetSeasons400ApplicationVndApiPlusJsonErrors.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", GetSeasons400ApplicationVndApiPlusJsonErrorsSource)
    ], GetSeasons400ApplicationVndApiPlusJsonErrors.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetSeasons400ApplicationVndApiPlusJsonErrors.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetSeasons400ApplicationVndApiPlusJsonErrors.prototype, "title", void 0);
    return GetSeasons400ApplicationVndApiPlusJsonErrors;
}(utils_1.SpeakeasyBase));
exports.GetSeasons400ApplicationVndApiPlusJsonErrors = GetSeasons400ApplicationVndApiPlusJsonErrors;
var GetSeasons400ApplicationVndApiPlusJson = /** @class */ (function (_super) {
    __extends(GetSeasons400ApplicationVndApiPlusJson, _super);
    function GetSeasons400ApplicationVndApiPlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors", elemType: GetSeasons400ApplicationVndApiPlusJsonErrors }),
        __metadata("design:type", Array)
    ], GetSeasons400ApplicationVndApiPlusJson.prototype, "errors", void 0);
    return GetSeasons400ApplicationVndApiPlusJson;
}(utils_1.SpeakeasyBase));
exports.GetSeasons400ApplicationVndApiPlusJson = GetSeasons400ApplicationVndApiPlusJson;
var GetSeasonsRequest = /** @class */ (function (_super) {
    __extends(GetSeasonsRequest, _super);
    function GetSeasonsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSeasonsQueryParams)
    ], GetSeasonsRequest.prototype, "queryParams", void 0);
    return GetSeasonsRequest;
}(utils_1.SpeakeasyBase));
exports.GetSeasonsRequest = GetSeasonsRequest;
var GetSeasonsResponse = /** @class */ (function (_super) {
    __extends(GetSeasonsResponse, _super);
    function GetSeasonsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetSeasonsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetSeasonsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetSeasonsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSeasons200ApplicationVndApiPlusJson)
    ], GetSeasonsResponse.prototype, "getSeasons200ApplicationVndApiPlusJsonObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSeasons400ApplicationVndApiPlusJson)
    ], GetSeasonsResponse.prototype, "getSeasons400ApplicationVndApiPlusJsonObject", void 0);
    return GetSeasonsResponse;
}(utils_1.SpeakeasyBase));
exports.GetSeasonsResponse = GetSeasonsResponse;
