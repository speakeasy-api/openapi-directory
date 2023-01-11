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
exports.CreateAuthorizerResponse = exports.CreateAuthorizerResponseJwtConfiguration = void 0;
var utils_1 = require("../../../internal/utils");
// CreateAuthorizerResponseJwtConfiguration
/**
 * Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.
**/
var CreateAuthorizerResponseJwtConfiguration = /** @class */ (function (_super) {
    __extends(CreateAuthorizerResponseJwtConfiguration, _super);
    function CreateAuthorizerResponseJwtConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Audience" }),
        __metadata("design:type", Object)
    ], CreateAuthorizerResponseJwtConfiguration.prototype, "audience", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Issuer" }),
        __metadata("design:type", Object)
    ], CreateAuthorizerResponseJwtConfiguration.prototype, "issuer", void 0);
    return CreateAuthorizerResponseJwtConfiguration;
}(utils_1.SpeakeasyBase));
exports.CreateAuthorizerResponseJwtConfiguration = CreateAuthorizerResponseJwtConfiguration;
var CreateAuthorizerResponse = /** @class */ (function (_super) {
    __extends(CreateAuthorizerResponse, _super);
    function CreateAuthorizerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AuthorizerCredentialsArn" }),
        __metadata("design:type", Object)
    ], CreateAuthorizerResponse.prototype, "authorizerCredentialsArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AuthorizerId" }),
        __metadata("design:type", Object)
    ], CreateAuthorizerResponse.prototype, "authorizerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AuthorizerPayloadFormatVersion" }),
        __metadata("design:type", Object)
    ], CreateAuthorizerResponse.prototype, "authorizerPayloadFormatVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AuthorizerResultTtlInSeconds" }),
        __metadata("design:type", Object)
    ], CreateAuthorizerResponse.prototype, "authorizerResultTtlInSeconds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AuthorizerType" }),
        __metadata("design:type", Object)
    ], CreateAuthorizerResponse.prototype, "authorizerType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AuthorizerUri" }),
        __metadata("design:type", Object)
    ], CreateAuthorizerResponse.prototype, "authorizerUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EnableSimpleResponses" }),
        __metadata("design:type", Object)
    ], CreateAuthorizerResponse.prototype, "enableSimpleResponses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IdentitySource" }),
        __metadata("design:type", Object)
    ], CreateAuthorizerResponse.prototype, "identitySource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IdentityValidationExpression" }),
        __metadata("design:type", Object)
    ], CreateAuthorizerResponse.prototype, "identityValidationExpression", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=JwtConfiguration" }),
        __metadata("design:type", CreateAuthorizerResponseJwtConfiguration)
    ], CreateAuthorizerResponse.prototype, "jwtConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Name" }),
        __metadata("design:type", Object)
    ], CreateAuthorizerResponse.prototype, "name", void 0);
    return CreateAuthorizerResponse;
}(utils_1.SpeakeasyBase));
exports.CreateAuthorizerResponse = CreateAuthorizerResponse;
