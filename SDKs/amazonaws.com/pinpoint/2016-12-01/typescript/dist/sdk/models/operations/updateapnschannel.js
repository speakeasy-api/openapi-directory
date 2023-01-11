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
exports.UpdateApnsChannelResponse = exports.UpdateApnsChannelRequest = exports.UpdateApnsChannelRequestBody = exports.UpdateApnsChannelRequestBodyApnsChannelRequest = exports.UpdateApnsChannelHeaders = exports.UpdateApnsChannelPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateApnsChannelPathParams = /** @class */ (function (_super) {
    __extends(UpdateApnsChannelPathParams, _super);
    function UpdateApnsChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=application-id" }),
        __metadata("design:type", String)
    ], UpdateApnsChannelPathParams.prototype, "applicationId", void 0);
    return UpdateApnsChannelPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateApnsChannelPathParams = UpdateApnsChannelPathParams;
var UpdateApnsChannelHeaders = /** @class */ (function (_super) {
    __extends(UpdateApnsChannelHeaders, _super);
    function UpdateApnsChannelHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateApnsChannelHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateApnsChannelHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateApnsChannelHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateApnsChannelHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateApnsChannelHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateApnsChannelHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateApnsChannelHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateApnsChannelHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateApnsChannelHeaders = UpdateApnsChannelHeaders;
// UpdateApnsChannelRequestBodyApnsChannelRequest
/**
 * Specifies the status and settings of the APNs (Apple Push Notification service) channel for an application.
**/
var UpdateApnsChannelRequestBodyApnsChannelRequest = /** @class */ (function (_super) {
    __extends(UpdateApnsChannelRequestBodyApnsChannelRequest, _super);
    function UpdateApnsChannelRequestBodyApnsChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BundleId" }),
        __metadata("design:type", String)
    ], UpdateApnsChannelRequestBodyApnsChannelRequest.prototype, "bundleId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Certificate" }),
        __metadata("design:type", String)
    ], UpdateApnsChannelRequestBodyApnsChannelRequest.prototype, "certificate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DefaultAuthenticationMethod" }),
        __metadata("design:type", String)
    ], UpdateApnsChannelRequestBodyApnsChannelRequest.prototype, "defaultAuthenticationMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateApnsChannelRequestBodyApnsChannelRequest.prototype, "enabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PrivateKey" }),
        __metadata("design:type", String)
    ], UpdateApnsChannelRequestBodyApnsChannelRequest.prototype, "privateKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TeamId" }),
        __metadata("design:type", String)
    ], UpdateApnsChannelRequestBodyApnsChannelRequest.prototype, "teamId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TokenKey" }),
        __metadata("design:type", String)
    ], UpdateApnsChannelRequestBodyApnsChannelRequest.prototype, "tokenKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TokenKeyId" }),
        __metadata("design:type", String)
    ], UpdateApnsChannelRequestBodyApnsChannelRequest.prototype, "tokenKeyId", void 0);
    return UpdateApnsChannelRequestBodyApnsChannelRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateApnsChannelRequestBodyApnsChannelRequest = UpdateApnsChannelRequestBodyApnsChannelRequest;
var UpdateApnsChannelRequestBody = /** @class */ (function (_super) {
    __extends(UpdateApnsChannelRequestBody, _super);
    function UpdateApnsChannelRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=APNSChannelRequest" }),
        __metadata("design:type", UpdateApnsChannelRequestBodyApnsChannelRequest)
    ], UpdateApnsChannelRequestBody.prototype, "apnsChannelRequest", void 0);
    return UpdateApnsChannelRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateApnsChannelRequestBody = UpdateApnsChannelRequestBody;
var UpdateApnsChannelRequest = /** @class */ (function (_super) {
    __extends(UpdateApnsChannelRequest, _super);
    function UpdateApnsChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateApnsChannelPathParams)
    ], UpdateApnsChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateApnsChannelHeaders)
    ], UpdateApnsChannelRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateApnsChannelRequestBody)
    ], UpdateApnsChannelRequest.prototype, "request", void 0);
    return UpdateApnsChannelRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateApnsChannelRequest = UpdateApnsChannelRequest;
var UpdateApnsChannelResponse = /** @class */ (function (_super) {
    __extends(UpdateApnsChannelResponse, _super);
    function UpdateApnsChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateApnsChannelResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateApnsChannelResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateApnsChannelResponse.prototype, "forbiddenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateApnsChannelResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateApnsChannelResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateApnsChannelResponse.prototype, "notFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateApnsChannelResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateApnsChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateApnsChannelResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UpdateApnsChannelResponse)
    ], UpdateApnsChannelResponse.prototype, "updateApnsChannelResponse", void 0);
    return UpdateApnsChannelResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateApnsChannelResponse = UpdateApnsChannelResponse;
