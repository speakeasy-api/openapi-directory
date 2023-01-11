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
exports.SendMessagesResponse = exports.SendMessagesRequest = exports.SendMessagesRequestBody = exports.SendMessagesRequestBodyMessageRequest = exports.SendMessagesHeaders = exports.SendMessagesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SendMessagesPathParams = /** @class */ (function (_super) {
    __extends(SendMessagesPathParams, _super);
    function SendMessagesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=application-id" }),
        __metadata("design:type", String)
    ], SendMessagesPathParams.prototype, "applicationId", void 0);
    return SendMessagesPathParams;
}(utils_1.SpeakeasyBase));
exports.SendMessagesPathParams = SendMessagesPathParams;
var SendMessagesHeaders = /** @class */ (function (_super) {
    __extends(SendMessagesHeaders, _super);
    function SendMessagesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], SendMessagesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], SendMessagesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], SendMessagesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], SendMessagesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], SendMessagesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], SendMessagesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], SendMessagesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return SendMessagesHeaders;
}(utils_1.SpeakeasyBase));
exports.SendMessagesHeaders = SendMessagesHeaders;
// SendMessagesRequestBodyMessageRequest
/**
 * Specifies the configuration and other settings for a message.
**/
var SendMessagesRequestBodyMessageRequest = /** @class */ (function (_super) {
    __extends(SendMessagesRequestBodyMessageRequest, _super);
    function SendMessagesRequestBodyMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Addresses", elemType: shared.AddressConfiguration }),
        __metadata("design:type", Object)
    ], SendMessagesRequestBodyMessageRequest.prototype, "addresses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Context" }),
        __metadata("design:type", Object)
    ], SendMessagesRequestBodyMessageRequest.prototype, "context", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Endpoints", elemType: shared.EndpointSendConfiguration }),
        __metadata("design:type", Object)
    ], SendMessagesRequestBodyMessageRequest.prototype, "endpoints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MessageConfiguration" }),
        __metadata("design:type", shared.DirectMessageConfiguration)
    ], SendMessagesRequestBodyMessageRequest.prototype, "messageConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TemplateConfiguration" }),
        __metadata("design:type", shared.TemplateConfiguration)
    ], SendMessagesRequestBodyMessageRequest.prototype, "templateConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TraceId" }),
        __metadata("design:type", String)
    ], SendMessagesRequestBodyMessageRequest.prototype, "traceId", void 0);
    return SendMessagesRequestBodyMessageRequest;
}(utils_1.SpeakeasyBase));
exports.SendMessagesRequestBodyMessageRequest = SendMessagesRequestBodyMessageRequest;
var SendMessagesRequestBody = /** @class */ (function (_super) {
    __extends(SendMessagesRequestBody, _super);
    function SendMessagesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MessageRequest" }),
        __metadata("design:type", SendMessagesRequestBodyMessageRequest)
    ], SendMessagesRequestBody.prototype, "messageRequest", void 0);
    return SendMessagesRequestBody;
}(utils_1.SpeakeasyBase));
exports.SendMessagesRequestBody = SendMessagesRequestBody;
var SendMessagesRequest = /** @class */ (function (_super) {
    __extends(SendMessagesRequest, _super);
    function SendMessagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SendMessagesPathParams)
    ], SendMessagesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SendMessagesHeaders)
    ], SendMessagesRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", SendMessagesRequestBody)
    ], SendMessagesRequest.prototype, "request", void 0);
    return SendMessagesRequest;
}(utils_1.SpeakeasyBase));
exports.SendMessagesRequest = SendMessagesRequest;
var SendMessagesResponse = /** @class */ (function (_super) {
    __extends(SendMessagesResponse, _super);
    function SendMessagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], SendMessagesResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SendMessagesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], SendMessagesResponse.prototype, "forbiddenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], SendMessagesResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], SendMessagesResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], SendMessagesResponse.prototype, "notFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], SendMessagesResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.SendMessagesResponse)
    ], SendMessagesResponse.prototype, "sendMessagesResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SendMessagesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], SendMessagesResponse.prototype, "tooManyRequestsException", void 0);
    return SendMessagesResponse;
}(utils_1.SpeakeasyBase));
exports.SendMessagesResponse = SendMessagesResponse;
