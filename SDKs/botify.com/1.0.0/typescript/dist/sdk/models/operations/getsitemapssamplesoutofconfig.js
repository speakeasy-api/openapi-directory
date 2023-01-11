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
exports.GetSitemapsSamplesOutOfConfigResponse = exports.GetSitemapsSamplesOutOfConfigRequest = exports.GetSitemapsSamplesOutOfConfig200ApplicationJson = exports.GetSitemapsSamplesOutOfConfigQueryParams = exports.GetSitemapsSamplesOutOfConfigPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetSitemapsSamplesOutOfConfigPathParams = /** @class */ (function (_super) {
    __extends(GetSitemapsSamplesOutOfConfigPathParams, _super);
    function GetSitemapsSamplesOutOfConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=analysis_slug" }),
        __metadata("design:type", String)
    ], GetSitemapsSamplesOutOfConfigPathParams.prototype, "analysisSlug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project_slug" }),
        __metadata("design:type", String)
    ], GetSitemapsSamplesOutOfConfigPathParams.prototype, "projectSlug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], GetSitemapsSamplesOutOfConfigPathParams.prototype, "username", void 0);
    return GetSitemapsSamplesOutOfConfigPathParams;
}(utils_1.SpeakeasyBase));
exports.GetSitemapsSamplesOutOfConfigPathParams = GetSitemapsSamplesOutOfConfigPathParams;
var GetSitemapsSamplesOutOfConfigQueryParams = /** @class */ (function (_super) {
    __extends(GetSitemapsSamplesOutOfConfigQueryParams, _super);
    function GetSitemapsSamplesOutOfConfigQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetSitemapsSamplesOutOfConfigQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=size" }),
        __metadata("design:type", Number)
    ], GetSitemapsSamplesOutOfConfigQueryParams.prototype, "size", void 0);
    return GetSitemapsSamplesOutOfConfigQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetSitemapsSamplesOutOfConfigQueryParams = GetSitemapsSamplesOutOfConfigQueryParams;
var GetSitemapsSamplesOutOfConfig200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSitemapsSamplesOutOfConfig200ApplicationJson, _super);
    function GetSitemapsSamplesOutOfConfig200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetSitemapsSamplesOutOfConfig200ApplicationJson.prototype, "count", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], GetSitemapsSamplesOutOfConfig200ApplicationJson.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetSitemapsSamplesOutOfConfig200ApplicationJson.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], GetSitemapsSamplesOutOfConfig200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results" }),
        __metadata("design:type", Array)
    ], GetSitemapsSamplesOutOfConfig200ApplicationJson.prototype, "results", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], GetSitemapsSamplesOutOfConfig200ApplicationJson.prototype, "size", void 0);
    return GetSitemapsSamplesOutOfConfig200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetSitemapsSamplesOutOfConfig200ApplicationJson = GetSitemapsSamplesOutOfConfig200ApplicationJson;
var GetSitemapsSamplesOutOfConfigRequest = /** @class */ (function (_super) {
    __extends(GetSitemapsSamplesOutOfConfigRequest, _super);
    function GetSitemapsSamplesOutOfConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSitemapsSamplesOutOfConfigPathParams)
    ], GetSitemapsSamplesOutOfConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSitemapsSamplesOutOfConfigQueryParams)
    ], GetSitemapsSamplesOutOfConfigRequest.prototype, "queryParams", void 0);
    return GetSitemapsSamplesOutOfConfigRequest;
}(utils_1.SpeakeasyBase));
exports.GetSitemapsSamplesOutOfConfigRequest = GetSitemapsSamplesOutOfConfigRequest;
var GetSitemapsSamplesOutOfConfigResponse = /** @class */ (function (_super) {
    __extends(GetSitemapsSamplesOutOfConfigResponse, _super);
    function GetSitemapsSamplesOutOfConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetSitemapsSamplesOutOfConfigResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DefaultPayload)
    ], GetSitemapsSamplesOutOfConfigResponse.prototype, "defaultPayload", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetSitemapsSamplesOutOfConfigResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSitemapsSamplesOutOfConfig200ApplicationJson)
    ], GetSitemapsSamplesOutOfConfigResponse.prototype, "getSitemapsSamplesOutOfConfig200ApplicationJSONObject", void 0);
    return GetSitemapsSamplesOutOfConfigResponse;
}(utils_1.SpeakeasyBase));
exports.GetSitemapsSamplesOutOfConfigResponse = GetSitemapsSamplesOutOfConfigResponse;
