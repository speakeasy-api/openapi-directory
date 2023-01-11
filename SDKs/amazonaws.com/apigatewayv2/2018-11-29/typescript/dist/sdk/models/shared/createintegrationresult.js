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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateIntegrationResult = exports.CreateIntegrationResultTlsConfig = void 0;
var utils_1 = require("../../../internal/utils");
// CreateIntegrationResultTlsConfig
/**
 * The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.
**/
var CreateIntegrationResultTlsConfig = /** @class */ (function (_super) {
    __extends(CreateIntegrationResultTlsConfig, _super);
    function CreateIntegrationResultTlsConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ServerNameToVerify" }),
        __metadata("design:type", Object)
    ], CreateIntegrationResultTlsConfig.prototype, "serverNameToVerify", void 0);
    return CreateIntegrationResultTlsConfig;
}(utils_1.SpeakeasyBase));
exports.CreateIntegrationResultTlsConfig = CreateIntegrationResultTlsConfig;
var CreateIntegrationResult = /** @class */ (function (_super) {
    __extends(CreateIntegrationResult, _super);
    function CreateIntegrationResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ApiGatewayManaged" }),
        __metadata("design:type", Object)
    ], CreateIntegrationResult.prototype, "apiGatewayManaged", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ConnectionId" }),
        __metadata("design:type", Object)
    ], CreateIntegrationResult.prototype, "connectionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ConnectionType" }),
        __metadata("design:type", Object)
    ], CreateIntegrationResult.prototype, "connectionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ContentHandlingStrategy" }),
        __metadata("design:type", Object)
    ], CreateIntegrationResult.prototype, "contentHandlingStrategy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CredentialsArn" }),
        __metadata("design:type", Object)
    ], CreateIntegrationResult.prototype, "credentialsArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Description" }),
        __metadata("design:type", Object)
    ], CreateIntegrationResult.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IntegrationId" }),
        __metadata("design:type", Object)
    ], CreateIntegrationResult.prototype, "integrationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IntegrationMethod" }),
        __metadata("design:type", Object)
    ], CreateIntegrationResult.prototype, "integrationMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IntegrationResponseSelectionExpression" }),
        __metadata("design:type", Object)
    ], CreateIntegrationResult.prototype, "integrationResponseSelectionExpression", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IntegrationSubtype" }),
        __metadata("design:type", Object)
    ], CreateIntegrationResult.prototype, "integrationSubtype", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IntegrationType" }),
        __metadata("design:type", Object)
    ], CreateIntegrationResult.prototype, "integrationType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IntegrationUri" }),
        __metadata("design:type", Object)
    ], CreateIntegrationResult.prototype, "integrationUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PassthroughBehavior" }),
        __metadata("design:type", Object)
    ], CreateIntegrationResult.prototype, "passthroughBehavior", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PayloadFormatVersion" }),
        __metadata("design:type", Object)
    ], CreateIntegrationResult.prototype, "payloadFormatVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RequestParameters" }),
        __metadata("design:type", Object)
    ], CreateIntegrationResult.prototype, "requestParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RequestTemplates" }),
        __metadata("design:type", Object)
    ], CreateIntegrationResult.prototype, "requestTemplates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ResponseParameters" }),
        __metadata("design:type", Object)
    ], CreateIntegrationResult.prototype, "responseParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TemplateSelectionExpression" }),
        __metadata("design:type", Object)
    ], CreateIntegrationResult.prototype, "templateSelectionExpression", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TimeoutInMillis" }),
        __metadata("design:type", Object)
    ], CreateIntegrationResult.prototype, "timeoutInMillis", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TlsConfig" }),
        __metadata("design:type", CreateIntegrationResultTlsConfig)
    ], CreateIntegrationResult.prototype, "tlsConfig", void 0);
    return CreateIntegrationResult;
}(utils_1.SpeakeasyBase));
exports.CreateIntegrationResult = CreateIntegrationResult;
