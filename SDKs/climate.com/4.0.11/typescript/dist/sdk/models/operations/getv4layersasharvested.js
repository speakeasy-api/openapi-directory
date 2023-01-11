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
exports.GetV4LayersAsHarvestedResponse = exports.GetV4LayersAsHarvestedRequest = exports.GetV4LayersAsHarvestedSecurity = exports.GetV4LayersAsHarvestedHeaders = exports.GetV4LayersAsHarvestedQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetV4LayersAsHarvestedQueryParams = /** @class */ (function (_super) {
    __extends(GetV4LayersAsHarvestedQueryParams, _super);
    function GetV4LayersAsHarvestedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=occurredAfter" }),
        __metadata("design:type", Date)
    ], GetV4LayersAsHarvestedQueryParams.prototype, "occurredAfter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=occurredBefore" }),
        __metadata("design:type", Date)
    ], GetV4LayersAsHarvestedQueryParams.prototype, "occurredBefore", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=resourceOwnerId" }),
        __metadata("design:type", String)
    ], GetV4LayersAsHarvestedQueryParams.prototype, "resourceOwnerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=updatedAfter" }),
        __metadata("design:type", Date)
    ], GetV4LayersAsHarvestedQueryParams.prototype, "updatedAfter", void 0);
    return GetV4LayersAsHarvestedQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetV4LayersAsHarvestedQueryParams = GetV4LayersAsHarvestedQueryParams;
var GetV4LayersAsHarvestedHeaders = /** @class */ (function (_super) {
    __extends(GetV4LayersAsHarvestedHeaders, _super);
    function GetV4LayersAsHarvestedHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], GetV4LayersAsHarvestedHeaders.prototype, "accept", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Limit" }),
        __metadata("design:type", Number)
    ], GetV4LayersAsHarvestedHeaders.prototype, "xLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Next-Token" }),
        __metadata("design:type", String)
    ], GetV4LayersAsHarvestedHeaders.prototype, "xNextToken", void 0);
    return GetV4LayersAsHarvestedHeaders;
}(utils_1.SpeakeasyBase));
exports.GetV4LayersAsHarvestedHeaders = GetV4LayersAsHarvestedHeaders;
var GetV4LayersAsHarvestedSecurity = /** @class */ (function (_super) {
    __extends(GetV4LayersAsHarvestedSecurity, _super);
    function GetV4LayersAsHarvestedSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetV4LayersAsHarvestedSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2AuthorizationCode)
    ], GetV4LayersAsHarvestedSecurity.prototype, "oauth2AuthorizationCode", void 0);
    return GetV4LayersAsHarvestedSecurity;
}(utils_1.SpeakeasyBase));
exports.GetV4LayersAsHarvestedSecurity = GetV4LayersAsHarvestedSecurity;
var GetV4LayersAsHarvestedRequest = /** @class */ (function (_super) {
    __extends(GetV4LayersAsHarvestedRequest, _super);
    function GetV4LayersAsHarvestedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetV4LayersAsHarvestedQueryParams)
    ], GetV4LayersAsHarvestedRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetV4LayersAsHarvestedHeaders)
    ], GetV4LayersAsHarvestedRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetV4LayersAsHarvestedSecurity)
    ], GetV4LayersAsHarvestedRequest.prototype, "security", void 0);
    return GetV4LayersAsHarvestedRequest;
}(utils_1.SpeakeasyBase));
exports.GetV4LayersAsHarvestedRequest = GetV4LayersAsHarvestedRequest;
var GetV4LayersAsHarvestedResponse = /** @class */ (function (_super) {
    __extends(GetV4LayersAsHarvestedResponse, _super);
    function GetV4LayersAsHarvestedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetV4LayersAsHarvestedResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetV4LayersAsHarvestedResponse.prototype, "empty", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorT)
    ], GetV4LayersAsHarvestedResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetV4LayersAsHarvestedResponse.prototype, "harvestActivities", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetV4LayersAsHarvestedResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetV4LayersAsHarvestedResponse.prototype, "statusCode", void 0);
    return GetV4LayersAsHarvestedResponse;
}(utils_1.SpeakeasyBase));
exports.GetV4LayersAsHarvestedResponse = GetV4LayersAsHarvestedResponse;
