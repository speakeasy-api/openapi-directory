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
exports.GetLinksTopDomainsResponse = exports.GetLinksTopDomainsRequest = exports.GetLinksTopDomains200ApplicationJson = exports.GetLinksTopDomainsQueryParams = exports.GetLinksTopDomainsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetLinksTopDomainsPathParams = /** @class */ (function (_super) {
    __extends(GetLinksTopDomainsPathParams, _super);
    function GetLinksTopDomainsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=analysis_slug" }),
        __metadata("design:type", String)
    ], GetLinksTopDomainsPathParams.prototype, "analysisSlug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project_slug" }),
        __metadata("design:type", String)
    ], GetLinksTopDomainsPathParams.prototype, "projectSlug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], GetLinksTopDomainsPathParams.prototype, "username", void 0);
    return GetLinksTopDomainsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetLinksTopDomainsPathParams = GetLinksTopDomainsPathParams;
var GetLinksTopDomainsQueryParams = /** @class */ (function (_super) {
    __extends(GetLinksTopDomainsQueryParams, _super);
    function GetLinksTopDomainsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetLinksTopDomainsQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=size" }),
        __metadata("design:type", Number)
    ], GetLinksTopDomainsQueryParams.prototype, "size", void 0);
    return GetLinksTopDomainsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetLinksTopDomainsQueryParams = GetLinksTopDomainsQueryParams;
var GetLinksTopDomains200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLinksTopDomains200ApplicationJson, _super);
    function GetLinksTopDomains200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetLinksTopDomains200ApplicationJson.prototype, "count", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], GetLinksTopDomains200ApplicationJson.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetLinksTopDomains200ApplicationJson.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], GetLinksTopDomains200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results", elemType: shared.LinksTopDomains }),
        __metadata("design:type", Array)
    ], GetLinksTopDomains200ApplicationJson.prototype, "results", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], GetLinksTopDomains200ApplicationJson.prototype, "size", void 0);
    return GetLinksTopDomains200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetLinksTopDomains200ApplicationJson = GetLinksTopDomains200ApplicationJson;
var GetLinksTopDomainsRequest = /** @class */ (function (_super) {
    __extends(GetLinksTopDomainsRequest, _super);
    function GetLinksTopDomainsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLinksTopDomainsPathParams)
    ], GetLinksTopDomainsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLinksTopDomainsQueryParams)
    ], GetLinksTopDomainsRequest.prototype, "queryParams", void 0);
    return GetLinksTopDomainsRequest;
}(utils_1.SpeakeasyBase));
exports.GetLinksTopDomainsRequest = GetLinksTopDomainsRequest;
var GetLinksTopDomainsResponse = /** @class */ (function (_super) {
    __extends(GetLinksTopDomainsResponse, _super);
    function GetLinksTopDomainsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetLinksTopDomainsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DefaultPayload)
    ], GetLinksTopDomainsResponse.prototype, "defaultPayload", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetLinksTopDomainsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLinksTopDomains200ApplicationJson)
    ], GetLinksTopDomainsResponse.prototype, "getLinksTopDomains200ApplicationJSONObject", void 0);
    return GetLinksTopDomainsResponse;
}(utils_1.SpeakeasyBase));
exports.GetLinksTopDomainsResponse = GetLinksTopDomainsResponse;
