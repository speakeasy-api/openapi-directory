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
exports.GetProjectAnalysesResponse = exports.GetProjectAnalysesRequest = exports.GetProjectAnalyses200ApplicationJson = exports.GetProjectAnalysesQueryParams = exports.GetProjectAnalysesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetProjectAnalysesPathParams = /** @class */ (function (_super) {
    __extends(GetProjectAnalysesPathParams, _super);
    function GetProjectAnalysesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project_slug" }),
        __metadata("design:type", String)
    ], GetProjectAnalysesPathParams.prototype, "projectSlug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], GetProjectAnalysesPathParams.prototype, "username", void 0);
    return GetProjectAnalysesPathParams;
}(utils_1.SpeakeasyBase));
exports.GetProjectAnalysesPathParams = GetProjectAnalysesPathParams;
var GetProjectAnalysesQueryParams = /** @class */ (function (_super) {
    __extends(GetProjectAnalysesQueryParams, _super);
    function GetProjectAnalysesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetProjectAnalysesQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=size" }),
        __metadata("design:type", Number)
    ], GetProjectAnalysesQueryParams.prototype, "size", void 0);
    return GetProjectAnalysesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetProjectAnalysesQueryParams = GetProjectAnalysesQueryParams;
var GetProjectAnalyses200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetProjectAnalyses200ApplicationJson, _super);
    function GetProjectAnalyses200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetProjectAnalyses200ApplicationJson.prototype, "count", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], GetProjectAnalyses200ApplicationJson.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetProjectAnalyses200ApplicationJson.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], GetProjectAnalyses200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results", elemType: shared.Analysis }),
        __metadata("design:type", Array)
    ], GetProjectAnalyses200ApplicationJson.prototype, "results", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], GetProjectAnalyses200ApplicationJson.prototype, "size", void 0);
    return GetProjectAnalyses200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetProjectAnalyses200ApplicationJson = GetProjectAnalyses200ApplicationJson;
var GetProjectAnalysesRequest = /** @class */ (function (_super) {
    __extends(GetProjectAnalysesRequest, _super);
    function GetProjectAnalysesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetProjectAnalysesPathParams)
    ], GetProjectAnalysesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetProjectAnalysesQueryParams)
    ], GetProjectAnalysesRequest.prototype, "queryParams", void 0);
    return GetProjectAnalysesRequest;
}(utils_1.SpeakeasyBase));
exports.GetProjectAnalysesRequest = GetProjectAnalysesRequest;
var GetProjectAnalysesResponse = /** @class */ (function (_super) {
    __extends(GetProjectAnalysesResponse, _super);
    function GetProjectAnalysesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetProjectAnalysesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DefaultPayload)
    ], GetProjectAnalysesResponse.prototype, "defaultPayload", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetProjectAnalysesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetProjectAnalyses200ApplicationJson)
    ], GetProjectAnalysesResponse.prototype, "getProjectAnalyses200ApplicationJSONObject", void 0);
    return GetProjectAnalysesResponse;
}(utils_1.SpeakeasyBase));
exports.GetProjectAnalysesResponse = GetProjectAnalysesResponse;
