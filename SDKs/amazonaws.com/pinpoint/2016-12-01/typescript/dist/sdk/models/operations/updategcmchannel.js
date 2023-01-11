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
exports.UpdateGcmChannelResponse = exports.UpdateGcmChannelRequest = exports.UpdateGcmChannelRequestBody = exports.UpdateGcmChannelRequestBodyGcmChannelRequest = exports.UpdateGcmChannelHeaders = exports.UpdateGcmChannelPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateGcmChannelPathParams = /** @class */ (function (_super) {
    __extends(UpdateGcmChannelPathParams, _super);
    function UpdateGcmChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=application-id" }),
        __metadata("design:type", String)
    ], UpdateGcmChannelPathParams.prototype, "applicationId", void 0);
    return UpdateGcmChannelPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateGcmChannelPathParams = UpdateGcmChannelPathParams;
var UpdateGcmChannelHeaders = /** @class */ (function (_super) {
    __extends(UpdateGcmChannelHeaders, _super);
    function UpdateGcmChannelHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateGcmChannelHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateGcmChannelHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateGcmChannelHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateGcmChannelHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateGcmChannelHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateGcmChannelHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateGcmChannelHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateGcmChannelHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateGcmChannelHeaders = UpdateGcmChannelHeaders;
// UpdateGcmChannelRequestBodyGcmChannelRequest
/**
 * Specifies the status and settings of the GCM channel for an application. This channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.
**/
var UpdateGcmChannelRequestBodyGcmChannelRequest = /** @class */ (function (_super) {
    __extends(UpdateGcmChannelRequestBodyGcmChannelRequest, _super);
    function UpdateGcmChannelRequestBodyGcmChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ApiKey" }),
        __metadata("design:type", String)
    ], UpdateGcmChannelRequestBodyGcmChannelRequest.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateGcmChannelRequestBodyGcmChannelRequest.prototype, "enabled", void 0);
    return UpdateGcmChannelRequestBodyGcmChannelRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateGcmChannelRequestBodyGcmChannelRequest = UpdateGcmChannelRequestBodyGcmChannelRequest;
var UpdateGcmChannelRequestBody = /** @class */ (function (_super) {
    __extends(UpdateGcmChannelRequestBody, _super);
    function UpdateGcmChannelRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=GCMChannelRequest" }),
        __metadata("design:type", UpdateGcmChannelRequestBodyGcmChannelRequest)
    ], UpdateGcmChannelRequestBody.prototype, "gcmChannelRequest", void 0);
    return UpdateGcmChannelRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateGcmChannelRequestBody = UpdateGcmChannelRequestBody;
var UpdateGcmChannelRequest = /** @class */ (function (_super) {
    __extends(UpdateGcmChannelRequest, _super);
    function UpdateGcmChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateGcmChannelPathParams)
    ], UpdateGcmChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateGcmChannelHeaders)
    ], UpdateGcmChannelRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateGcmChannelRequestBody)
    ], UpdateGcmChannelRequest.prototype, "request", void 0);
    return UpdateGcmChannelRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateGcmChannelRequest = UpdateGcmChannelRequest;
var UpdateGcmChannelResponse = /** @class */ (function (_super) {
    __extends(UpdateGcmChannelResponse, _super);
    function UpdateGcmChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateGcmChannelResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateGcmChannelResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateGcmChannelResponse.prototype, "forbiddenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateGcmChannelResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateGcmChannelResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateGcmChannelResponse.prototype, "notFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateGcmChannelResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateGcmChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateGcmChannelResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UpdateGcmChannelResponse)
    ], UpdateGcmChannelResponse.prototype, "updateGcmChannelResponse", void 0);
    return UpdateGcmChannelResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateGcmChannelResponse = UpdateGcmChannelResponse;
