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
exports.StartDeviceAuthorizationResponse = exports.StartDeviceAuthorizationRequest = exports.StartDeviceAuthorizationRequestBody = exports.StartDeviceAuthorizationHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var StartDeviceAuthorizationHeaders = /** @class */ (function (_super) {
    __extends(StartDeviceAuthorizationHeaders, _super);
    function StartDeviceAuthorizationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], StartDeviceAuthorizationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], StartDeviceAuthorizationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], StartDeviceAuthorizationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], StartDeviceAuthorizationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], StartDeviceAuthorizationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], StartDeviceAuthorizationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], StartDeviceAuthorizationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return StartDeviceAuthorizationHeaders;
}(utils_1.SpeakeasyBase));
exports.StartDeviceAuthorizationHeaders = StartDeviceAuthorizationHeaders;
var StartDeviceAuthorizationRequestBody = /** @class */ (function (_super) {
    __extends(StartDeviceAuthorizationRequestBody, _super);
    function StartDeviceAuthorizationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clientId" }),
        __metadata("design:type", String)
    ], StartDeviceAuthorizationRequestBody.prototype, "clientId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clientSecret" }),
        __metadata("design:type", String)
    ], StartDeviceAuthorizationRequestBody.prototype, "clientSecret", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startUrl" }),
        __metadata("design:type", String)
    ], StartDeviceAuthorizationRequestBody.prototype, "startUrl", void 0);
    return StartDeviceAuthorizationRequestBody;
}(utils_1.SpeakeasyBase));
exports.StartDeviceAuthorizationRequestBody = StartDeviceAuthorizationRequestBody;
var StartDeviceAuthorizationRequest = /** @class */ (function (_super) {
    __extends(StartDeviceAuthorizationRequest, _super);
    function StartDeviceAuthorizationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StartDeviceAuthorizationHeaders)
    ], StartDeviceAuthorizationRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", StartDeviceAuthorizationRequestBody)
    ], StartDeviceAuthorizationRequest.prototype, "request", void 0);
    return StartDeviceAuthorizationRequest;
}(utils_1.SpeakeasyBase));
exports.StartDeviceAuthorizationRequest = StartDeviceAuthorizationRequest;
var StartDeviceAuthorizationResponse = /** @class */ (function (_super) {
    __extends(StartDeviceAuthorizationResponse, _super);
    function StartDeviceAuthorizationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], StartDeviceAuthorizationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], StartDeviceAuthorizationResponse.prototype, "internalServerException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], StartDeviceAuthorizationResponse.prototype, "invalidClientException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], StartDeviceAuthorizationResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], StartDeviceAuthorizationResponse.prototype, "slowDownException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.StartDeviceAuthorizationResponse)
    ], StartDeviceAuthorizationResponse.prototype, "startDeviceAuthorizationResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], StartDeviceAuthorizationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], StartDeviceAuthorizationResponse.prototype, "unauthorizedClientException", void 0);
    return StartDeviceAuthorizationResponse;
}(utils_1.SpeakeasyBase));
exports.StartDeviceAuthorizationResponse = StartDeviceAuthorizationResponse;
