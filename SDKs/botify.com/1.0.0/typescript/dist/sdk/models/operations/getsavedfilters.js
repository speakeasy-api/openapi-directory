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
exports.GetSavedFiltersResponse = exports.GetSavedFiltersRequest = exports.GetSavedFilters200ApplicationJson = exports.GetSavedFiltersQueryParams = exports.GetSavedFiltersPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetSavedFiltersPathParams = /** @class */ (function (_super) {
    __extends(GetSavedFiltersPathParams, _super);
    function GetSavedFiltersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project_slug" }),
        __metadata("design:type", String)
    ], GetSavedFiltersPathParams.prototype, "projectSlug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], GetSavedFiltersPathParams.prototype, "username", void 0);
    return GetSavedFiltersPathParams;
}(utils_1.SpeakeasyBase));
exports.GetSavedFiltersPathParams = GetSavedFiltersPathParams;
var GetSavedFiltersQueryParams = /** @class */ (function (_super) {
    __extends(GetSavedFiltersQueryParams, _super);
    function GetSavedFiltersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetSavedFiltersQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=size" }),
        __metadata("design:type", Number)
    ], GetSavedFiltersQueryParams.prototype, "size", void 0);
    return GetSavedFiltersQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetSavedFiltersQueryParams = GetSavedFiltersQueryParams;
var GetSavedFilters200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSavedFilters200ApplicationJson, _super);
    function GetSavedFilters200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetSavedFilters200ApplicationJson.prototype, "count", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], GetSavedFilters200ApplicationJson.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetSavedFilters200ApplicationJson.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], GetSavedFilters200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results", elemType: shared.ProjectSavedFilter }),
        __metadata("design:type", Array)
    ], GetSavedFilters200ApplicationJson.prototype, "results", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], GetSavedFilters200ApplicationJson.prototype, "size", void 0);
    return GetSavedFilters200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetSavedFilters200ApplicationJson = GetSavedFilters200ApplicationJson;
var GetSavedFiltersRequest = /** @class */ (function (_super) {
    __extends(GetSavedFiltersRequest, _super);
    function GetSavedFiltersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSavedFiltersPathParams)
    ], GetSavedFiltersRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSavedFiltersQueryParams)
    ], GetSavedFiltersRequest.prototype, "queryParams", void 0);
    return GetSavedFiltersRequest;
}(utils_1.SpeakeasyBase));
exports.GetSavedFiltersRequest = GetSavedFiltersRequest;
var GetSavedFiltersResponse = /** @class */ (function (_super) {
    __extends(GetSavedFiltersResponse, _super);
    function GetSavedFiltersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetSavedFiltersResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DefaultPayload)
    ], GetSavedFiltersResponse.prototype, "defaultPayload", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetSavedFiltersResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSavedFilters200ApplicationJson)
    ], GetSavedFiltersResponse.prototype, "getSavedFilters200ApplicationJSONObject", void 0);
    return GetSavedFiltersResponse;
}(utils_1.SpeakeasyBase));
exports.GetSavedFiltersResponse = GetSavedFiltersResponse;
