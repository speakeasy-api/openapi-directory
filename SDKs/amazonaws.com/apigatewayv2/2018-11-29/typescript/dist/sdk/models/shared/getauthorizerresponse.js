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
exports.GetAuthorizerResponse = exports.GetAuthorizerResponseJwtConfiguration = void 0;
var utils_1 = require("../../../internal/utils");
// GetAuthorizerResponseJwtConfiguration
/**
 * Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.
**/
var GetAuthorizerResponseJwtConfiguration = /** @class */ (function (_super) {
    __extends(GetAuthorizerResponseJwtConfiguration, _super);
    function GetAuthorizerResponseJwtConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Audience" }),
        __metadata("design:type", Object)
    ], GetAuthorizerResponseJwtConfiguration.prototype, "audience", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Issuer" }),
        __metadata("design:type", Object)
    ], GetAuthorizerResponseJwtConfiguration.prototype, "issuer", void 0);
    return GetAuthorizerResponseJwtConfiguration;
}(utils_1.SpeakeasyBase));
exports.GetAuthorizerResponseJwtConfiguration = GetAuthorizerResponseJwtConfiguration;
var GetAuthorizerResponse = /** @class */ (function (_super) {
    __extends(GetAuthorizerResponse, _super);
    function GetAuthorizerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AuthorizerCredentialsArn" }),
        __metadata("design:type", Object)
    ], GetAuthorizerResponse.prototype, "authorizerCredentialsArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AuthorizerId" }),
        __metadata("design:type", Object)
    ], GetAuthorizerResponse.prototype, "authorizerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AuthorizerPayloadFormatVersion" }),
        __metadata("design:type", Object)
    ], GetAuthorizerResponse.prototype, "authorizerPayloadFormatVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AuthorizerResultTtlInSeconds" }),
        __metadata("design:type", Object)
    ], GetAuthorizerResponse.prototype, "authorizerResultTtlInSeconds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AuthorizerType" }),
        __metadata("design:type", Object)
    ], GetAuthorizerResponse.prototype, "authorizerType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AuthorizerUri" }),
        __metadata("design:type", Object)
    ], GetAuthorizerResponse.prototype, "authorizerUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EnableSimpleResponses" }),
        __metadata("design:type", Object)
    ], GetAuthorizerResponse.prototype, "enableSimpleResponses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IdentitySource" }),
        __metadata("design:type", Object)
    ], GetAuthorizerResponse.prototype, "identitySource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IdentityValidationExpression" }),
        __metadata("design:type", Object)
    ], GetAuthorizerResponse.prototype, "identityValidationExpression", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=JwtConfiguration" }),
        __metadata("design:type", GetAuthorizerResponseJwtConfiguration)
    ], GetAuthorizerResponse.prototype, "jwtConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Name" }),
        __metadata("design:type", Object)
    ], GetAuthorizerResponse.prototype, "name", void 0);
    return GetAuthorizerResponse;
}(utils_1.SpeakeasyBase));
exports.GetAuthorizerResponse = GetAuthorizerResponse;
