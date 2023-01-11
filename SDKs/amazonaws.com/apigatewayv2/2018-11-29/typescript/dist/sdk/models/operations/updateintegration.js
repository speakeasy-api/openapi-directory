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
exports.UpdateIntegrationResponse = exports.UpdateIntegrationRequest = exports.UpdateIntegrationRequestBody = exports.UpdateIntegrationRequestBodyTlsConfig = exports.UpdateIntegrationRequestBodyPassthroughBehaviorEnum = exports.UpdateIntegrationRequestBodyIntegrationTypeEnum = exports.UpdateIntegrationRequestBodyContentHandlingStrategyEnum = exports.UpdateIntegrationRequestBodyConnectionTypeEnum = exports.UpdateIntegrationHeaders = exports.UpdateIntegrationPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateIntegrationPathParams = /** @class */ (function (_super) {
    __extends(UpdateIntegrationPathParams, _super);
    function UpdateIntegrationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], UpdateIntegrationPathParams.prototype, "apiId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=integrationId" }),
        __metadata("design:type", String)
    ], UpdateIntegrationPathParams.prototype, "integrationId", void 0);
    return UpdateIntegrationPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateIntegrationPathParams = UpdateIntegrationPathParams;
var UpdateIntegrationHeaders = /** @class */ (function (_super) {
    __extends(UpdateIntegrationHeaders, _super);
    function UpdateIntegrationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateIntegrationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateIntegrationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateIntegrationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateIntegrationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateIntegrationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateIntegrationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateIntegrationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateIntegrationHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateIntegrationHeaders = UpdateIntegrationHeaders;
var UpdateIntegrationRequestBodyConnectionTypeEnum;
(function (UpdateIntegrationRequestBodyConnectionTypeEnum) {
    UpdateIntegrationRequestBodyConnectionTypeEnum["Internet"] = "INTERNET";
    UpdateIntegrationRequestBodyConnectionTypeEnum["VpcLink"] = "VPC_LINK";
})(UpdateIntegrationRequestBodyConnectionTypeEnum = exports.UpdateIntegrationRequestBodyConnectionTypeEnum || (exports.UpdateIntegrationRequestBodyConnectionTypeEnum = {}));
var UpdateIntegrationRequestBodyContentHandlingStrategyEnum;
(function (UpdateIntegrationRequestBodyContentHandlingStrategyEnum) {
    UpdateIntegrationRequestBodyContentHandlingStrategyEnum["ConvertToBinary"] = "CONVERT_TO_BINARY";
    UpdateIntegrationRequestBodyContentHandlingStrategyEnum["ConvertToText"] = "CONVERT_TO_TEXT";
})(UpdateIntegrationRequestBodyContentHandlingStrategyEnum = exports.UpdateIntegrationRequestBodyContentHandlingStrategyEnum || (exports.UpdateIntegrationRequestBodyContentHandlingStrategyEnum = {}));
var UpdateIntegrationRequestBodyIntegrationTypeEnum;
(function (UpdateIntegrationRequestBodyIntegrationTypeEnum) {
    UpdateIntegrationRequestBodyIntegrationTypeEnum["Aws"] = "AWS";
    UpdateIntegrationRequestBodyIntegrationTypeEnum["Http"] = "HTTP";
    UpdateIntegrationRequestBodyIntegrationTypeEnum["Mock"] = "MOCK";
    UpdateIntegrationRequestBodyIntegrationTypeEnum["HttpProxy"] = "HTTP_PROXY";
    UpdateIntegrationRequestBodyIntegrationTypeEnum["AwsProxy"] = "AWS_PROXY";
})(UpdateIntegrationRequestBodyIntegrationTypeEnum = exports.UpdateIntegrationRequestBodyIntegrationTypeEnum || (exports.UpdateIntegrationRequestBodyIntegrationTypeEnum = {}));
var UpdateIntegrationRequestBodyPassthroughBehaviorEnum;
(function (UpdateIntegrationRequestBodyPassthroughBehaviorEnum) {
    UpdateIntegrationRequestBodyPassthroughBehaviorEnum["WhenNoMatch"] = "WHEN_NO_MATCH";
    UpdateIntegrationRequestBodyPassthroughBehaviorEnum["Never"] = "NEVER";
    UpdateIntegrationRequestBodyPassthroughBehaviorEnum["WhenNoTemplates"] = "WHEN_NO_TEMPLATES";
})(UpdateIntegrationRequestBodyPassthroughBehaviorEnum = exports.UpdateIntegrationRequestBodyPassthroughBehaviorEnum || (exports.UpdateIntegrationRequestBodyPassthroughBehaviorEnum = {}));
// UpdateIntegrationRequestBodyTlsConfig
/**
 * The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.
**/
var UpdateIntegrationRequestBodyTlsConfig = /** @class */ (function (_super) {
    __extends(UpdateIntegrationRequestBodyTlsConfig, _super);
    function UpdateIntegrationRequestBodyTlsConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ServerNameToVerify" }),
        __metadata("design:type", Object)
    ], UpdateIntegrationRequestBodyTlsConfig.prototype, "serverNameToVerify", void 0);
    return UpdateIntegrationRequestBodyTlsConfig;
}(utils_1.SpeakeasyBase));
exports.UpdateIntegrationRequestBodyTlsConfig = UpdateIntegrationRequestBodyTlsConfig;
var UpdateIntegrationRequestBody = /** @class */ (function (_super) {
    __extends(UpdateIntegrationRequestBody, _super);
    function UpdateIntegrationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connectionId" }),
        __metadata("design:type", String)
    ], UpdateIntegrationRequestBody.prototype, "connectionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connectionType" }),
        __metadata("design:type", String)
    ], UpdateIntegrationRequestBody.prototype, "connectionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contentHandlingStrategy" }),
        __metadata("design:type", String)
    ], UpdateIntegrationRequestBody.prototype, "contentHandlingStrategy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=credentialsArn" }),
        __metadata("design:type", String)
    ], UpdateIntegrationRequestBody.prototype, "credentialsArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateIntegrationRequestBody.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=integrationMethod" }),
        __metadata("design:type", String)
    ], UpdateIntegrationRequestBody.prototype, "integrationMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=integrationSubtype" }),
        __metadata("design:type", String)
    ], UpdateIntegrationRequestBody.prototype, "integrationSubtype", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=integrationType" }),
        __metadata("design:type", String)
    ], UpdateIntegrationRequestBody.prototype, "integrationType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=integrationUri" }),
        __metadata("design:type", String)
    ], UpdateIntegrationRequestBody.prototype, "integrationUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=passthroughBehavior" }),
        __metadata("design:type", String)
    ], UpdateIntegrationRequestBody.prototype, "passthroughBehavior", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=payloadFormatVersion" }),
        __metadata("design:type", String)
    ], UpdateIntegrationRequestBody.prototype, "payloadFormatVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestParameters" }),
        __metadata("design:type", Object)
    ], UpdateIntegrationRequestBody.prototype, "requestParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestTemplates" }),
        __metadata("design:type", Object)
    ], UpdateIntegrationRequestBody.prototype, "requestTemplates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=responseParameters" }),
        __metadata("design:type", Object)
    ], UpdateIntegrationRequestBody.prototype, "responseParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=templateSelectionExpression" }),
        __metadata("design:type", String)
    ], UpdateIntegrationRequestBody.prototype, "templateSelectionExpression", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timeoutInMillis" }),
        __metadata("design:type", Number)
    ], UpdateIntegrationRequestBody.prototype, "timeoutInMillis", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tlsConfig" }),
        __metadata("design:type", UpdateIntegrationRequestBodyTlsConfig)
    ], UpdateIntegrationRequestBody.prototype, "tlsConfig", void 0);
    return UpdateIntegrationRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateIntegrationRequestBody = UpdateIntegrationRequestBody;
var UpdateIntegrationRequest = /** @class */ (function (_super) {
    __extends(UpdateIntegrationRequest, _super);
    function UpdateIntegrationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateIntegrationPathParams)
    ], UpdateIntegrationRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateIntegrationHeaders)
    ], UpdateIntegrationRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateIntegrationRequestBody)
    ], UpdateIntegrationRequest.prototype, "request", void 0);
    return UpdateIntegrationRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateIntegrationRequest = UpdateIntegrationRequest;
var UpdateIntegrationResponse = /** @class */ (function (_super) {
    __extends(UpdateIntegrationResponse, _super);
    function UpdateIntegrationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateIntegrationResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateIntegrationResponse.prototype, "conflictException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateIntegrationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateIntegrationResponse.prototype, "notFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateIntegrationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateIntegrationResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UpdateIntegrationResult)
    ], UpdateIntegrationResponse.prototype, "updateIntegrationResult", void 0);
    return UpdateIntegrationResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateIntegrationResponse = UpdateIntegrationResponse;
