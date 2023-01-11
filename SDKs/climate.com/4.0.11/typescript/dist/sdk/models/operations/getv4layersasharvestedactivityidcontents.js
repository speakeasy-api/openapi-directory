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
exports.GetV4LayersAsHarvestedActivityIdContentsResponse = exports.GetV4LayersAsHarvestedActivityIdContentsRequest = exports.GetV4LayersAsHarvestedActivityIdContentsSecurity = exports.GetV4LayersAsHarvestedActivityIdContentsHeaders = exports.GetV4LayersAsHarvestedActivityIdContentsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetV4LayersAsHarvestedActivityIdContentsPathParams = /** @class */ (function (_super) {
    __extends(GetV4LayersAsHarvestedActivityIdContentsPathParams, _super);
    function GetV4LayersAsHarvestedActivityIdContentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=activityId" }),
        __metadata("design:type", String)
    ], GetV4LayersAsHarvestedActivityIdContentsPathParams.prototype, "activityId", void 0);
    return GetV4LayersAsHarvestedActivityIdContentsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetV4LayersAsHarvestedActivityIdContentsPathParams = GetV4LayersAsHarvestedActivityIdContentsPathParams;
var GetV4LayersAsHarvestedActivityIdContentsHeaders = /** @class */ (function (_super) {
    __extends(GetV4LayersAsHarvestedActivityIdContentsHeaders, _super);
    function GetV4LayersAsHarvestedActivityIdContentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], GetV4LayersAsHarvestedActivityIdContentsHeaders.prototype, "accept", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Range" }),
        __metadata("design:type", String)
    ], GetV4LayersAsHarvestedActivityIdContentsHeaders.prototype, "range", void 0);
    return GetV4LayersAsHarvestedActivityIdContentsHeaders;
}(utils_1.SpeakeasyBase));
exports.GetV4LayersAsHarvestedActivityIdContentsHeaders = GetV4LayersAsHarvestedActivityIdContentsHeaders;
var GetV4LayersAsHarvestedActivityIdContentsSecurity = /** @class */ (function (_super) {
    __extends(GetV4LayersAsHarvestedActivityIdContentsSecurity, _super);
    function GetV4LayersAsHarvestedActivityIdContentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetV4LayersAsHarvestedActivityIdContentsSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2AuthorizationCode)
    ], GetV4LayersAsHarvestedActivityIdContentsSecurity.prototype, "oauth2AuthorizationCode", void 0);
    return GetV4LayersAsHarvestedActivityIdContentsSecurity;
}(utils_1.SpeakeasyBase));
exports.GetV4LayersAsHarvestedActivityIdContentsSecurity = GetV4LayersAsHarvestedActivityIdContentsSecurity;
var GetV4LayersAsHarvestedActivityIdContentsRequest = /** @class */ (function (_super) {
    __extends(GetV4LayersAsHarvestedActivityIdContentsRequest, _super);
    function GetV4LayersAsHarvestedActivityIdContentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetV4LayersAsHarvestedActivityIdContentsPathParams)
    ], GetV4LayersAsHarvestedActivityIdContentsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetV4LayersAsHarvestedActivityIdContentsHeaders)
    ], GetV4LayersAsHarvestedActivityIdContentsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetV4LayersAsHarvestedActivityIdContentsSecurity)
    ], GetV4LayersAsHarvestedActivityIdContentsRequest.prototype, "security", void 0);
    return GetV4LayersAsHarvestedActivityIdContentsRequest;
}(utils_1.SpeakeasyBase));
exports.GetV4LayersAsHarvestedActivityIdContentsRequest = GetV4LayersAsHarvestedActivityIdContentsRequest;
var GetV4LayersAsHarvestedActivityIdContentsResponse = /** @class */ (function (_super) {
    __extends(GetV4LayersAsHarvestedActivityIdContentsResponse, _super);
    function GetV4LayersAsHarvestedActivityIdContentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetV4LayersAsHarvestedActivityIdContentsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetV4LayersAsHarvestedActivityIdContentsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetV4LayersAsHarvestedActivityIdContentsResponse.prototype, "empty", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorT)
    ], GetV4LayersAsHarvestedActivityIdContentsResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetV4LayersAsHarvestedActivityIdContentsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetV4LayersAsHarvestedActivityIdContentsResponse.prototype, "statusCode", void 0);
    return GetV4LayersAsHarvestedActivityIdContentsResponse;
}(utils_1.SpeakeasyBase));
exports.GetV4LayersAsHarvestedActivityIdContentsResponse = GetV4LayersAsHarvestedActivityIdContentsResponse;
