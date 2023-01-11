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
exports.UpdateAuthorizerResponse = exports.UpdateAuthorizerRequest = exports.UpdateAuthorizerRequestBody = exports.UpdateAuthorizerRequestBodyJwtConfiguration = exports.UpdateAuthorizerRequestBodyAuthorizerTypeEnum = exports.UpdateAuthorizerHeaders = exports.UpdateAuthorizerPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateAuthorizerPathParams = /** @class */ (function (_super) {
    __extends(UpdateAuthorizerPathParams, _super);
    function UpdateAuthorizerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], UpdateAuthorizerPathParams.prototype, "apiId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=authorizerId" }),
        __metadata("design:type", String)
    ], UpdateAuthorizerPathParams.prototype, "authorizerId", void 0);
    return UpdateAuthorizerPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateAuthorizerPathParams = UpdateAuthorizerPathParams;
var UpdateAuthorizerHeaders = /** @class */ (function (_super) {
    __extends(UpdateAuthorizerHeaders, _super);
    function UpdateAuthorizerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateAuthorizerHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateAuthorizerHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateAuthorizerHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateAuthorizerHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateAuthorizerHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateAuthorizerHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateAuthorizerHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateAuthorizerHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateAuthorizerHeaders = UpdateAuthorizerHeaders;
var UpdateAuthorizerRequestBodyAuthorizerTypeEnum;
(function (UpdateAuthorizerRequestBodyAuthorizerTypeEnum) {
    UpdateAuthorizerRequestBodyAuthorizerTypeEnum["Request"] = "REQUEST";
    UpdateAuthorizerRequestBodyAuthorizerTypeEnum["Jwt"] = "JWT";
})(UpdateAuthorizerRequestBodyAuthorizerTypeEnum = exports.UpdateAuthorizerRequestBodyAuthorizerTypeEnum || (exports.UpdateAuthorizerRequestBodyAuthorizerTypeEnum = {}));
// UpdateAuthorizerRequestBodyJwtConfiguration
/**
 * Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.
**/
var UpdateAuthorizerRequestBodyJwtConfiguration = /** @class */ (function (_super) {
    __extends(UpdateAuthorizerRequestBodyJwtConfiguration, _super);
    function UpdateAuthorizerRequestBodyJwtConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Audience" }),
        __metadata("design:type", Object)
    ], UpdateAuthorizerRequestBodyJwtConfiguration.prototype, "audience", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Issuer" }),
        __metadata("design:type", Object)
    ], UpdateAuthorizerRequestBodyJwtConfiguration.prototype, "issuer", void 0);
    return UpdateAuthorizerRequestBodyJwtConfiguration;
}(utils_1.SpeakeasyBase));
exports.UpdateAuthorizerRequestBodyJwtConfiguration = UpdateAuthorizerRequestBodyJwtConfiguration;
var UpdateAuthorizerRequestBody = /** @class */ (function (_super) {
    __extends(UpdateAuthorizerRequestBody, _super);
    function UpdateAuthorizerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authorizerCredentialsArn" }),
        __metadata("design:type", String)
    ], UpdateAuthorizerRequestBody.prototype, "authorizerCredentialsArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authorizerPayloadFormatVersion" }),
        __metadata("design:type", String)
    ], UpdateAuthorizerRequestBody.prototype, "authorizerPayloadFormatVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authorizerResultTtlInSeconds" }),
        __metadata("design:type", Number)
    ], UpdateAuthorizerRequestBody.prototype, "authorizerResultTtlInSeconds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authorizerType" }),
        __metadata("design:type", String)
    ], UpdateAuthorizerRequestBody.prototype, "authorizerType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authorizerUri" }),
        __metadata("design:type", String)
    ], UpdateAuthorizerRequestBody.prototype, "authorizerUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enableSimpleResponses" }),
        __metadata("design:type", Boolean)
    ], UpdateAuthorizerRequestBody.prototype, "enableSimpleResponses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=identitySource" }),
        __metadata("design:type", Array)
    ], UpdateAuthorizerRequestBody.prototype, "identitySource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=identityValidationExpression" }),
        __metadata("design:type", String)
    ], UpdateAuthorizerRequestBody.prototype, "identityValidationExpression", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jwtConfiguration" }),
        __metadata("design:type", UpdateAuthorizerRequestBodyJwtConfiguration)
    ], UpdateAuthorizerRequestBody.prototype, "jwtConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateAuthorizerRequestBody.prototype, "name", void 0);
    return UpdateAuthorizerRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateAuthorizerRequestBody = UpdateAuthorizerRequestBody;
var UpdateAuthorizerRequest = /** @class */ (function (_super) {
    __extends(UpdateAuthorizerRequest, _super);
    function UpdateAuthorizerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateAuthorizerPathParams)
    ], UpdateAuthorizerRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateAuthorizerHeaders)
    ], UpdateAuthorizerRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateAuthorizerRequestBody)
    ], UpdateAuthorizerRequest.prototype, "request", void 0);
    return UpdateAuthorizerRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateAuthorizerRequest = UpdateAuthorizerRequest;
var UpdateAuthorizerResponse = /** @class */ (function (_super) {
    __extends(UpdateAuthorizerResponse, _super);
    function UpdateAuthorizerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateAuthorizerResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateAuthorizerResponse.prototype, "conflictException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateAuthorizerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateAuthorizerResponse.prototype, "notFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateAuthorizerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateAuthorizerResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UpdateAuthorizerResponse)
    ], UpdateAuthorizerResponse.prototype, "updateAuthorizerResponse", void 0);
    return UpdateAuthorizerResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateAuthorizerResponse = UpdateAuthorizerResponse;
