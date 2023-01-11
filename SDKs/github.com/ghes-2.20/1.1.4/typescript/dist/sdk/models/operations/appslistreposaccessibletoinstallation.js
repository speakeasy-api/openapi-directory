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
exports.AppsListReposAccessibleToInstallationResponse = exports.AppsListReposAccessibleToInstallationRequest = exports.AppsListReposAccessibleToInstallation200ApplicationJson = exports.AppsListReposAccessibleToInstallationHeaders = exports.AppsListReposAccessibleToInstallationQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AppsListReposAccessibleToInstallationQueryParams = /** @class */ (function (_super) {
    __extends(AppsListReposAccessibleToInstallationQueryParams, _super);
    function AppsListReposAccessibleToInstallationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], AppsListReposAccessibleToInstallationQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], AppsListReposAccessibleToInstallationQueryParams.prototype, "perPage", void 0);
    return AppsListReposAccessibleToInstallationQueryParams;
}(utils_1.SpeakeasyBase));
exports.AppsListReposAccessibleToInstallationQueryParams = AppsListReposAccessibleToInstallationQueryParams;
var AppsListReposAccessibleToInstallationHeaders = /** @class */ (function (_super) {
    __extends(AppsListReposAccessibleToInstallationHeaders, _super);
    function AppsListReposAccessibleToInstallationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=accept" }),
        __metadata("design:type", String)
    ], AppsListReposAccessibleToInstallationHeaders.prototype, "accept", void 0);
    return AppsListReposAccessibleToInstallationHeaders;
}(utils_1.SpeakeasyBase));
exports.AppsListReposAccessibleToInstallationHeaders = AppsListReposAccessibleToInstallationHeaders;
var AppsListReposAccessibleToInstallation200ApplicationJson = /** @class */ (function (_super) {
    __extends(AppsListReposAccessibleToInstallation200ApplicationJson, _super);
    function AppsListReposAccessibleToInstallation200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repositories", elemType: shared.Repository }),
        __metadata("design:type", Array)
    ], AppsListReposAccessibleToInstallation200ApplicationJson.prototype, "repositories", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repository_selection" }),
        __metadata("design:type", String)
    ], AppsListReposAccessibleToInstallation200ApplicationJson.prototype, "repositorySelection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_count" }),
        __metadata("design:type", Number)
    ], AppsListReposAccessibleToInstallation200ApplicationJson.prototype, "totalCount", void 0);
    return AppsListReposAccessibleToInstallation200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AppsListReposAccessibleToInstallation200ApplicationJson = AppsListReposAccessibleToInstallation200ApplicationJson;
var AppsListReposAccessibleToInstallationRequest = /** @class */ (function (_super) {
    __extends(AppsListReposAccessibleToInstallationRequest, _super);
    function AppsListReposAccessibleToInstallationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AppsListReposAccessibleToInstallationQueryParams)
    ], AppsListReposAccessibleToInstallationRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AppsListReposAccessibleToInstallationHeaders)
    ], AppsListReposAccessibleToInstallationRequest.prototype, "headers", void 0);
    return AppsListReposAccessibleToInstallationRequest;
}(utils_1.SpeakeasyBase));
exports.AppsListReposAccessibleToInstallationRequest = AppsListReposAccessibleToInstallationRequest;
var AppsListReposAccessibleToInstallationResponse = /** @class */ (function (_super) {
    __extends(AppsListReposAccessibleToInstallationResponse, _super);
    function AppsListReposAccessibleToInstallationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AppsListReposAccessibleToInstallationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AppsListReposAccessibleToInstallationResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AppsListReposAccessibleToInstallationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AppsListReposAccessibleToInstallation200ApplicationJson)
    ], AppsListReposAccessibleToInstallationResponse.prototype, "appsListReposAccessibleToInstallation200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BasicError)
    ], AppsListReposAccessibleToInstallationResponse.prototype, "basicError", void 0);
    return AppsListReposAccessibleToInstallationResponse;
}(utils_1.SpeakeasyBase));
exports.AppsListReposAccessibleToInstallationResponse = AppsListReposAccessibleToInstallationResponse;
