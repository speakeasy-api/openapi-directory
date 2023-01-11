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
exports.GetClassificationsResponse = exports.GetClassificationsRequest = exports.GetClassifications400ApplicationVndApiPlusJson = exports.GetClassifications400ApplicationVndApiPlusJsonErrors = exports.GetClassifications400ApplicationVndApiPlusJsonErrorsSource = exports.GetClassifications200ApplicationVndApiPlusJson = exports.GetClassificationsQueryParams = exports.GetClassificationsTypeEnum = exports.GetClassificationsSortEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetClassificationsSortEnum;
(function (GetClassificationsSortEnum) {
    GetClassificationsSortEnum["CreatedAt"] = "created_at";
    GetClassificationsSortEnum["UpdatedAt"] = "updated_at";
    GetClassificationsSortEnum["Value"] = "value";
})(GetClassificationsSortEnum = exports.GetClassificationsSortEnum || (exports.GetClassificationsSortEnum = {}));
var GetClassificationsTypeEnum;
(function (GetClassificationsTypeEnum) {
    GetClassificationsTypeEnum["AlternateFeedType"] = "AlternateFeedType";
    GetClassificationsTypeEnum["Genre"] = "Genre";
    GetClassificationsTypeEnum["Industry"] = "Industry";
    GetClassificationsTypeEnum["Language"] = "Language";
    GetClassificationsTypeEnum["MediaRating"] = "MediaRating";
})(GetClassificationsTypeEnum = exports.GetClassificationsTypeEnum || (exports.GetClassificationsTypeEnum = {}));
var GetClassificationsQueryParams = /** @class */ (function (_super) {
    __extends(GetClassificationsQueryParams, _super);
    function GetClassificationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ids[]" }),
        __metadata("design:type", Array)
    ], GetClassificationsQueryParams.prototype, "ids", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=is_country" }),
        __metadata("design:type", String)
    ], GetClassificationsQueryParams.prototype, "isCountry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page[number]" }),
        __metadata("design:type", Number)
    ], GetClassificationsQueryParams.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page[size]" }),
        __metadata("design:type", Number)
    ], GetClassificationsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], GetClassificationsQueryParams.prototype, "q", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=sort" }),
        __metadata("design:type", Array)
    ], GetClassificationsQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetClassificationsQueryParams.prototype, "type", void 0);
    return GetClassificationsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetClassificationsQueryParams = GetClassificationsQueryParams;
var GetClassifications200ApplicationVndApiPlusJson = /** @class */ (function (_super) {
    __extends(GetClassifications200ApplicationVndApiPlusJson, _super);
    function GetClassifications200ApplicationVndApiPlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: shared.Classification }),
        __metadata("design:type", Array)
    ], GetClassifications200ApplicationVndApiPlusJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", shared.Links)
    ], GetClassifications200ApplicationVndApiPlusJson.prototype, "links", void 0);
    return GetClassifications200ApplicationVndApiPlusJson;
}(utils_1.SpeakeasyBase));
exports.GetClassifications200ApplicationVndApiPlusJson = GetClassifications200ApplicationVndApiPlusJson;
// GetClassifications400ApplicationVndApiPlusJsonErrorsSource
/**
 * An object containing references to the source of the error, optionally including any of the following members.
 *
**/
var GetClassifications400ApplicationVndApiPlusJsonErrorsSource = /** @class */ (function (_super) {
    __extends(GetClassifications400ApplicationVndApiPlusJsonErrorsSource, _super);
    function GetClassifications400ApplicationVndApiPlusJsonErrorsSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parameter" }),
        __metadata("design:type", String)
    ], GetClassifications400ApplicationVndApiPlusJsonErrorsSource.prototype, "parameter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pointer" }),
        __metadata("design:type", String)
    ], GetClassifications400ApplicationVndApiPlusJsonErrorsSource.prototype, "pointer", void 0);
    return GetClassifications400ApplicationVndApiPlusJsonErrorsSource;
}(utils_1.SpeakeasyBase));
exports.GetClassifications400ApplicationVndApiPlusJsonErrorsSource = GetClassifications400ApplicationVndApiPlusJsonErrorsSource;
var GetClassifications400ApplicationVndApiPlusJsonErrors = /** @class */ (function (_super) {
    __extends(GetClassifications400ApplicationVndApiPlusJsonErrors, _super);
    function GetClassifications400ApplicationVndApiPlusJsonErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetClassifications400ApplicationVndApiPlusJsonErrors.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetClassifications400ApplicationVndApiPlusJsonErrors.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", GetClassifications400ApplicationVndApiPlusJsonErrorsSource)
    ], GetClassifications400ApplicationVndApiPlusJsonErrors.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetClassifications400ApplicationVndApiPlusJsonErrors.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetClassifications400ApplicationVndApiPlusJsonErrors.prototype, "title", void 0);
    return GetClassifications400ApplicationVndApiPlusJsonErrors;
}(utils_1.SpeakeasyBase));
exports.GetClassifications400ApplicationVndApiPlusJsonErrors = GetClassifications400ApplicationVndApiPlusJsonErrors;
var GetClassifications400ApplicationVndApiPlusJson = /** @class */ (function (_super) {
    __extends(GetClassifications400ApplicationVndApiPlusJson, _super);
    function GetClassifications400ApplicationVndApiPlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors", elemType: GetClassifications400ApplicationVndApiPlusJsonErrors }),
        __metadata("design:type", Array)
    ], GetClassifications400ApplicationVndApiPlusJson.prototype, "errors", void 0);
    return GetClassifications400ApplicationVndApiPlusJson;
}(utils_1.SpeakeasyBase));
exports.GetClassifications400ApplicationVndApiPlusJson = GetClassifications400ApplicationVndApiPlusJson;
var GetClassificationsRequest = /** @class */ (function (_super) {
    __extends(GetClassificationsRequest, _super);
    function GetClassificationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetClassificationsQueryParams)
    ], GetClassificationsRequest.prototype, "queryParams", void 0);
    return GetClassificationsRequest;
}(utils_1.SpeakeasyBase));
exports.GetClassificationsRequest = GetClassificationsRequest;
var GetClassificationsResponse = /** @class */ (function (_super) {
    __extends(GetClassificationsResponse, _super);
    function GetClassificationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetClassificationsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetClassificationsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetClassificationsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetClassifications200ApplicationVndApiPlusJson)
    ], GetClassificationsResponse.prototype, "getClassifications200ApplicationVndApiPlusJsonObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetClassifications400ApplicationVndApiPlusJson)
    ], GetClassificationsResponse.prototype, "getClassifications400ApplicationVndApiPlusJsonObject", void 0);
    return GetClassificationsResponse;
}(utils_1.SpeakeasyBase));
exports.GetClassificationsResponse = GetClassificationsResponse;
