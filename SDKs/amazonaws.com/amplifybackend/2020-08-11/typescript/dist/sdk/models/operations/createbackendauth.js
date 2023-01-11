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
exports.CreateBackendAuthResponse = exports.CreateBackendAuthRequest = exports.CreateBackendAuthRequestBody = exports.CreateBackendAuthRequestBodyResourceConfig = exports.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs = exports.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy = exports.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth = exports.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings = exports.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa = exports.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings = exports.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword = exports.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings = exports.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings = exports.CreateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs = exports.CreateBackendAuthHeaders = exports.CreateBackendAuthPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateBackendAuthPathParams = /** @class */ (function (_super) {
    __extends(CreateBackendAuthPathParams, _super);
    function CreateBackendAuthPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", String)
    ], CreateBackendAuthPathParams.prototype, "appId", void 0);
    return CreateBackendAuthPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateBackendAuthPathParams = CreateBackendAuthPathParams;
var CreateBackendAuthHeaders = /** @class */ (function (_super) {
    __extends(CreateBackendAuthHeaders, _super);
    function CreateBackendAuthHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateBackendAuthHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateBackendAuthHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateBackendAuthHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateBackendAuthHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateBackendAuthHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateBackendAuthHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateBackendAuthHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateBackendAuthHeaders;
}(utils_1.SpeakeasyBase));
exports.CreateBackendAuthHeaders = CreateBackendAuthHeaders;
// CreateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs
/**
 * Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.
**/
var CreateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs = /** @class */ (function (_super) {
    __extends(CreateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs, _super);
    function CreateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IdentityPoolName" }),
        __metadata("design:type", Object)
    ], CreateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs.prototype, "identityPoolName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UnauthenticatedLogin" }),
        __metadata("design:type", Object)
    ], CreateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs.prototype, "unauthenticatedLogin", void 0);
    return CreateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs;
}(utils_1.SpeakeasyBase));
exports.CreateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs = CreateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs;
// CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings
/**
 * The configuration for the email sent when an app user forgets their password.
**/
var CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings = /** @class */ (function (_super) {
    __extends(CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings, _super);
    function CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EmailMessage" }),
        __metadata("design:type", Object)
    ], CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings.prototype, "emailMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EmailSubject" }),
        __metadata("design:type", Object)
    ], CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings.prototype, "emailSubject", void 0);
    return CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings;
}(utils_1.SpeakeasyBase));
exports.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings = CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings;
// CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings
/**
 * The configuration for the SMS message sent when an app user forgets their password.
**/
var CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings = /** @class */ (function (_super) {
    __extends(CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings, _super);
    function CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SmsMessage" }),
        __metadata("design:type", Object)
    ], CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings.prototype, "smsMessage", void 0);
    return CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings;
}(utils_1.SpeakeasyBase));
exports.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings = CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings;
// CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword
/**
 * Describes the forgotten password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
**/
var CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword = /** @class */ (function (_super) {
    __extends(CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword, _super);
    function CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DeliveryMethod" }),
        __metadata("design:type", Object)
    ], CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword.prototype, "deliveryMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EmailSettings" }),
        __metadata("design:type", CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings)
    ], CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword.prototype, "emailSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SmsSettings" }),
        __metadata("design:type", CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings)
    ], CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword.prototype, "smsSettings", void 0);
    return CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword;
}(utils_1.SpeakeasyBase));
exports.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword = CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword;
// CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings
/**
 * Describes the configuration settings and methods for your Amplify app users to use MFA.
**/
var CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings = /** @class */ (function (_super) {
    __extends(CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings, _super);
    function CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MfaTypes" }),
        __metadata("design:type", Object)
    ], CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings.prototype, "mfaTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SmsMessage" }),
        __metadata("design:type", Object)
    ], CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings.prototype, "smsMessage", void 0);
    return CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings;
}(utils_1.SpeakeasyBase));
exports.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings = CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings;
// CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa
/**
 * Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.
**/
var CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa = /** @class */ (function (_super) {
    __extends(CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa, _super);
    function CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MFAMode" }),
        __metadata("design:type", String)
    ], CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa.prototype, "mfaMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Settings" }),
        __metadata("design:type", CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings)
    ], CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa.prototype, "settings", void 0);
    return CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa;
}(utils_1.SpeakeasyBase));
exports.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa = CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa;
// CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings
/**
 * The settings for using social providers to access your Amplify app.
**/
var CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings = /** @class */ (function (_super) {
    __extends(CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings, _super);
    function CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Facebook" }),
        __metadata("design:type", shared.BackendAuthSocialProviderConfig)
    ], CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings.prototype, "facebook", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Google" }),
        __metadata("design:type", shared.BackendAuthSocialProviderConfig)
    ], CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings.prototype, "google", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LoginWithAmazon" }),
        __metadata("design:type", shared.BackendAuthSocialProviderConfig)
    ], CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings.prototype, "loginWithAmazon", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SignInWithApple" }),
        __metadata("design:type", shared.BackendAuthAppleProviderConfig)
    ], CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings.prototype, "signInWithApple", void 0);
    return CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings;
}(utils_1.SpeakeasyBase));
exports.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings = CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings;
// CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth
/**
 * Describes the OAuth policy and rules for your Amazon Cognito user pool, configured as a part of your Amplify project.
**/
var CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth = /** @class */ (function (_super) {
    __extends(CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth, _super);
    function CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DomainPrefix" }),
        __metadata("design:type", Object)
    ], CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth.prototype, "domainPrefix", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OAuthGrantType" }),
        __metadata("design:type", Object)
    ], CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth.prototype, "oAuthGrantType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OAuthScopes" }),
        __metadata("design:type", Object)
    ], CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth.prototype, "oAuthScopes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RedirectSignInURIs" }),
        __metadata("design:type", Object)
    ], CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth.prototype, "redirectSignInURIs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RedirectSignOutURIs" }),
        __metadata("design:type", Object)
    ], CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth.prototype, "redirectSignOutURIs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SocialProviderSettings" }),
        __metadata("design:type", CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings)
    ], CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth.prototype, "socialProviderSettings", void 0);
    return CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth;
}(utils_1.SpeakeasyBase));
exports.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth = CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth;
// CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy
/**
 * Describes the password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
**/
var CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy = /** @class */ (function (_super) {
    __extends(CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy, _super);
    function CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AdditionalConstraints" }),
        __metadata("design:type", Object)
    ], CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy.prototype, "additionalConstraints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MinimumLength" }),
        __metadata("design:type", Object)
    ], CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy.prototype, "minimumLength", void 0);
    return CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy;
}(utils_1.SpeakeasyBase));
exports.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy = CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy;
// CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs
/**
 * Describes authentication configuration for the Amazon Cognito user pool, provisioned as a part of your auth resource in the Amplify project.
**/
var CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs = /** @class */ (function (_super) {
    __extends(CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs, _super);
    function CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ForgotPassword" }),
        __metadata("design:type", CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword)
    ], CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs.prototype, "forgotPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Mfa" }),
        __metadata("design:type", CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa)
    ], CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs.prototype, "mfa", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OAuth" }),
        __metadata("design:type", CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth)
    ], CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs.prototype, "oAuth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PasswordPolicy" }),
        __metadata("design:type", CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy)
    ], CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs.prototype, "passwordPolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RequiredSignUpAttributes" }),
        __metadata("design:type", Object)
    ], CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs.prototype, "requiredSignUpAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SignInMethod" }),
        __metadata("design:type", Object)
    ], CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs.prototype, "signInMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UserPoolName" }),
        __metadata("design:type", Object)
    ], CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs.prototype, "userPoolName", void 0);
    return CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs;
}(utils_1.SpeakeasyBase));
exports.CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs = CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs;
// CreateBackendAuthRequestBodyResourceConfig
/**
 * Defines the resource configuration when creating an auth resource in your Amplify project.
**/
var CreateBackendAuthRequestBodyResourceConfig = /** @class */ (function (_super) {
    __extends(CreateBackendAuthRequestBodyResourceConfig, _super);
    function CreateBackendAuthRequestBodyResourceConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AuthResources" }),
        __metadata("design:type", Object)
    ], CreateBackendAuthRequestBodyResourceConfig.prototype, "authResources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IdentityPoolConfigs" }),
        __metadata("design:type", CreateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs)
    ], CreateBackendAuthRequestBodyResourceConfig.prototype, "identityPoolConfigs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Service" }),
        __metadata("design:type", Object)
    ], CreateBackendAuthRequestBodyResourceConfig.prototype, "service", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UserPoolConfigs" }),
        __metadata("design:type", CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs)
    ], CreateBackendAuthRequestBodyResourceConfig.prototype, "userPoolConfigs", void 0);
    return CreateBackendAuthRequestBodyResourceConfig;
}(utils_1.SpeakeasyBase));
exports.CreateBackendAuthRequestBodyResourceConfig = CreateBackendAuthRequestBodyResourceConfig;
var CreateBackendAuthRequestBody = /** @class */ (function (_super) {
    __extends(CreateBackendAuthRequestBody, _super);
    function CreateBackendAuthRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=backendEnvironmentName" }),
        __metadata("design:type", String)
    ], CreateBackendAuthRequestBody.prototype, "backendEnvironmentName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourceConfig" }),
        __metadata("design:type", CreateBackendAuthRequestBodyResourceConfig)
    ], CreateBackendAuthRequestBody.prototype, "resourceConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourceName" }),
        __metadata("design:type", String)
    ], CreateBackendAuthRequestBody.prototype, "resourceName", void 0);
    return CreateBackendAuthRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateBackendAuthRequestBody = CreateBackendAuthRequestBody;
var CreateBackendAuthRequest = /** @class */ (function (_super) {
    __extends(CreateBackendAuthRequest, _super);
    function CreateBackendAuthRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateBackendAuthPathParams)
    ], CreateBackendAuthRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateBackendAuthHeaders)
    ], CreateBackendAuthRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateBackendAuthRequestBody)
    ], CreateBackendAuthRequest.prototype, "request", void 0);
    return CreateBackendAuthRequest;
}(utils_1.SpeakeasyBase));
exports.CreateBackendAuthRequest = CreateBackendAuthRequest;
var CreateBackendAuthResponse = /** @class */ (function (_super) {
    __extends(CreateBackendAuthResponse, _super);
    function CreateBackendAuthResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateBackendAuthResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateBackendAuthResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CreateBackendAuthResponse)
    ], CreateBackendAuthResponse.prototype, "createBackendAuthResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateBackendAuthResponse.prototype, "gatewayTimeoutException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateBackendAuthResponse.prototype, "notFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateBackendAuthResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateBackendAuthResponse.prototype, "tooManyRequestsException", void 0);
    return CreateBackendAuthResponse;
}(utils_1.SpeakeasyBase));
exports.CreateBackendAuthResponse = CreateBackendAuthResponse;
