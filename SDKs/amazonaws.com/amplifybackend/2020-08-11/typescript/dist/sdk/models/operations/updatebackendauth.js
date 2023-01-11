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
exports.UpdateBackendAuthResponse = exports.UpdateBackendAuthRequest = exports.UpdateBackendAuthRequestBody = exports.UpdateBackendAuthRequestBodyResourceConfig = exports.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs = exports.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy = exports.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth = exports.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings = exports.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa = exports.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings = exports.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword = exports.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings = exports.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings = exports.UpdateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs = exports.UpdateBackendAuthHeaders = exports.UpdateBackendAuthPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateBackendAuthPathParams = /** @class */ (function (_super) {
    __extends(UpdateBackendAuthPathParams, _super);
    function UpdateBackendAuthPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", String)
    ], UpdateBackendAuthPathParams.prototype, "appId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=backendEnvironmentName" }),
        __metadata("design:type", String)
    ], UpdateBackendAuthPathParams.prototype, "backendEnvironmentName", void 0);
    return UpdateBackendAuthPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateBackendAuthPathParams = UpdateBackendAuthPathParams;
var UpdateBackendAuthHeaders = /** @class */ (function (_super) {
    __extends(UpdateBackendAuthHeaders, _super);
    function UpdateBackendAuthHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateBackendAuthHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateBackendAuthHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateBackendAuthHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateBackendAuthHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateBackendAuthHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateBackendAuthHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateBackendAuthHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateBackendAuthHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateBackendAuthHeaders = UpdateBackendAuthHeaders;
// UpdateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs
/**
 * Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.
**/
var UpdateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs = /** @class */ (function (_super) {
    __extends(UpdateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs, _super);
    function UpdateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UnauthenticatedLogin" }),
        __metadata("design:type", Object)
    ], UpdateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs.prototype, "unauthenticatedLogin", void 0);
    return UpdateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs;
}(utils_1.SpeakeasyBase));
exports.UpdateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs = UpdateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs;
// UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings
/**
 * The configuration for the email sent when an app user forgets their password.
**/
var UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings = /** @class */ (function (_super) {
    __extends(UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings, _super);
    function UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EmailMessage" }),
        __metadata("design:type", Object)
    ], UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings.prototype, "emailMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EmailSubject" }),
        __metadata("design:type", Object)
    ], UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings.prototype, "emailSubject", void 0);
    return UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings;
}(utils_1.SpeakeasyBase));
exports.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings = UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings;
// UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings
/**
 * The configuration for the SMS message sent when an Amplify app user forgets their password.
**/
var UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings = /** @class */ (function (_super) {
    __extends(UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings, _super);
    function UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SmsMessage" }),
        __metadata("design:type", Object)
    ], UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings.prototype, "smsMessage", void 0);
    return UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings;
}(utils_1.SpeakeasyBase));
exports.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings = UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings;
// UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword
/**
 * Describes the forgot password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
**/
var UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword = /** @class */ (function (_super) {
    __extends(UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword, _super);
    function UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DeliveryMethod" }),
        __metadata("design:type", Object)
    ], UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword.prototype, "deliveryMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EmailSettings" }),
        __metadata("design:type", UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings)
    ], UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword.prototype, "emailSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SmsSettings" }),
        __metadata("design:type", UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings)
    ], UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword.prototype, "smsSettings", void 0);
    return UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword;
}(utils_1.SpeakeasyBase));
exports.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword = UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword;
// UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings
/**
 * The settings of your MFA configuration for the backend of your Amplify project.
**/
var UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings = /** @class */ (function (_super) {
    __extends(UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings, _super);
    function UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MfaTypes" }),
        __metadata("design:type", Object)
    ], UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings.prototype, "mfaTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SmsMessage" }),
        __metadata("design:type", Object)
    ], UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings.prototype, "smsMessage", void 0);
    return UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings;
}(utils_1.SpeakeasyBase));
exports.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings = UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings;
// UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa
/**
 * Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.
**/
var UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa = /** @class */ (function (_super) {
    __extends(UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa, _super);
    function UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MFAMode" }),
        __metadata("design:type", String)
    ], UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa.prototype, "mfaMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Settings" }),
        __metadata("design:type", UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings)
    ], UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa.prototype, "settings", void 0);
    return UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa;
}(utils_1.SpeakeasyBase));
exports.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa = UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa;
// UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings
/**
 * Describes third-party social federation configurations for allowing your users to sign in with OAuth.
**/
var UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings = /** @class */ (function (_super) {
    __extends(UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings, _super);
    function UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Facebook" }),
        __metadata("design:type", shared.BackendAuthSocialProviderConfig)
    ], UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings.prototype, "facebook", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Google" }),
        __metadata("design:type", shared.BackendAuthSocialProviderConfig)
    ], UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings.prototype, "google", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LoginWithAmazon" }),
        __metadata("design:type", shared.BackendAuthSocialProviderConfig)
    ], UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings.prototype, "loginWithAmazon", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SignInWithApple" }),
        __metadata("design:type", shared.BackendAuthAppleProviderConfig)
    ], UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings.prototype, "signInWithApple", void 0);
    return UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings;
}(utils_1.SpeakeasyBase));
exports.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings = UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings;
// UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth
/**
 * Describes the OAuth policy and rules for your Amazon Cognito user pool, configured as a part of your Amplify project.
**/
var UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth = /** @class */ (function (_super) {
    __extends(UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth, _super);
    function UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DomainPrefix" }),
        __metadata("design:type", Object)
    ], UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth.prototype, "domainPrefix", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OAuthGrantType" }),
        __metadata("design:type", Object)
    ], UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth.prototype, "oAuthGrantType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OAuthScopes" }),
        __metadata("design:type", Object)
    ], UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth.prototype, "oAuthScopes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RedirectSignInURIs" }),
        __metadata("design:type", Object)
    ], UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth.prototype, "redirectSignInURIs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RedirectSignOutURIs" }),
        __metadata("design:type", Object)
    ], UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth.prototype, "redirectSignOutURIs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SocialProviderSettings" }),
        __metadata("design:type", UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings)
    ], UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth.prototype, "socialProviderSettings", void 0);
    return UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth;
}(utils_1.SpeakeasyBase));
exports.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth = UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth;
// UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy
/**
 * Describes the password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
**/
var UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy = /** @class */ (function (_super) {
    __extends(UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy, _super);
    function UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AdditionalConstraints" }),
        __metadata("design:type", Object)
    ], UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy.prototype, "additionalConstraints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MinimumLength" }),
        __metadata("design:type", Object)
    ], UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy.prototype, "minimumLength", void 0);
    return UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy;
}(utils_1.SpeakeasyBase));
exports.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy = UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy;
// UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs
/**
 * Describes the authentication configuration for the Amazon Cognito user pool, provisioned as a part of your auth resource in the Amplify project.
**/
var UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs = /** @class */ (function (_super) {
    __extends(UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs, _super);
    function UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ForgotPassword" }),
        __metadata("design:type", UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword)
    ], UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs.prototype, "forgotPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Mfa" }),
        __metadata("design:type", UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa)
    ], UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs.prototype, "mfa", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OAuth" }),
        __metadata("design:type", UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth)
    ], UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs.prototype, "oAuth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PasswordPolicy" }),
        __metadata("design:type", UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy)
    ], UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs.prototype, "passwordPolicy", void 0);
    return UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs;
}(utils_1.SpeakeasyBase));
exports.UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs = UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs;
// UpdateBackendAuthRequestBodyResourceConfig
/**
 * Defines the resource configuration when updating an authentication resource in your Amplify project.
**/
var UpdateBackendAuthRequestBodyResourceConfig = /** @class */ (function (_super) {
    __extends(UpdateBackendAuthRequestBodyResourceConfig, _super);
    function UpdateBackendAuthRequestBodyResourceConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AuthResources" }),
        __metadata("design:type", Object)
    ], UpdateBackendAuthRequestBodyResourceConfig.prototype, "authResources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IdentityPoolConfigs" }),
        __metadata("design:type", UpdateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs)
    ], UpdateBackendAuthRequestBodyResourceConfig.prototype, "identityPoolConfigs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Service" }),
        __metadata("design:type", Object)
    ], UpdateBackendAuthRequestBodyResourceConfig.prototype, "service", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UserPoolConfigs" }),
        __metadata("design:type", UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs)
    ], UpdateBackendAuthRequestBodyResourceConfig.prototype, "userPoolConfigs", void 0);
    return UpdateBackendAuthRequestBodyResourceConfig;
}(utils_1.SpeakeasyBase));
exports.UpdateBackendAuthRequestBodyResourceConfig = UpdateBackendAuthRequestBodyResourceConfig;
var UpdateBackendAuthRequestBody = /** @class */ (function (_super) {
    __extends(UpdateBackendAuthRequestBody, _super);
    function UpdateBackendAuthRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourceConfig" }),
        __metadata("design:type", UpdateBackendAuthRequestBodyResourceConfig)
    ], UpdateBackendAuthRequestBody.prototype, "resourceConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourceName" }),
        __metadata("design:type", String)
    ], UpdateBackendAuthRequestBody.prototype, "resourceName", void 0);
    return UpdateBackendAuthRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateBackendAuthRequestBody = UpdateBackendAuthRequestBody;
var UpdateBackendAuthRequest = /** @class */ (function (_super) {
    __extends(UpdateBackendAuthRequest, _super);
    function UpdateBackendAuthRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateBackendAuthPathParams)
    ], UpdateBackendAuthRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateBackendAuthHeaders)
    ], UpdateBackendAuthRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateBackendAuthRequestBody)
    ], UpdateBackendAuthRequest.prototype, "request", void 0);
    return UpdateBackendAuthRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateBackendAuthRequest = UpdateBackendAuthRequest;
var UpdateBackendAuthResponse = /** @class */ (function (_super) {
    __extends(UpdateBackendAuthResponse, _super);
    function UpdateBackendAuthResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateBackendAuthResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateBackendAuthResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateBackendAuthResponse.prototype, "gatewayTimeoutException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateBackendAuthResponse.prototype, "notFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateBackendAuthResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateBackendAuthResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UpdateBackendAuthResponse)
    ], UpdateBackendAuthResponse.prototype, "updateBackendAuthResponse", void 0);
    return UpdateBackendAuthResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateBackendAuthResponse = UpdateBackendAuthResponse;
