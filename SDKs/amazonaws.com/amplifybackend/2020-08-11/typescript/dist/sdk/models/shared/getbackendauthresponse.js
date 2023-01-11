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
exports.GetBackendAuthResponse = exports.GetBackendAuthResponseResourceConfig = exports.GetBackendAuthResponseResourceConfigUserPoolConfigs = exports.GetBackendAuthResponseResourceConfigUserPoolConfigsPasswordPolicy = exports.GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth = exports.GetBackendAuthResponseResourceConfigUserPoolConfigsOAuthSocialProviderSettings = exports.GetBackendAuthResponseResourceConfigUserPoolConfigsMfa = exports.GetBackendAuthResponseResourceConfigUserPoolConfigsMfaSettings = exports.GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPassword = exports.GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordSmsSettings = exports.GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordEmailSettings = exports.GetBackendAuthResponseResourceConfigIdentityPoolConfigs = void 0;
var utils_1 = require("../../../internal/utils");
var mfamodeenum_1 = require("./mfamodeenum");
var backendauthsocialproviderconfig_1 = require("./backendauthsocialproviderconfig");
var backendauthappleproviderconfig_1 = require("./backendauthappleproviderconfig");
// GetBackendAuthResponseResourceConfigIdentityPoolConfigs
/**
 * Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.
**/
var GetBackendAuthResponseResourceConfigIdentityPoolConfigs = /** @class */ (function (_super) {
    __extends(GetBackendAuthResponseResourceConfigIdentityPoolConfigs, _super);
    function GetBackendAuthResponseResourceConfigIdentityPoolConfigs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IdentityPoolName" }),
        __metadata("design:type", Object)
    ], GetBackendAuthResponseResourceConfigIdentityPoolConfigs.prototype, "identityPoolName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UnauthenticatedLogin" }),
        __metadata("design:type", Object)
    ], GetBackendAuthResponseResourceConfigIdentityPoolConfigs.prototype, "unauthenticatedLogin", void 0);
    return GetBackendAuthResponseResourceConfigIdentityPoolConfigs;
}(utils_1.SpeakeasyBase));
exports.GetBackendAuthResponseResourceConfigIdentityPoolConfigs = GetBackendAuthResponseResourceConfigIdentityPoolConfigs;
// GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordEmailSettings
/**
 * The configuration for the email sent when an app user forgets their password.
**/
var GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordEmailSettings = /** @class */ (function (_super) {
    __extends(GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordEmailSettings, _super);
    function GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordEmailSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EmailMessage" }),
        __metadata("design:type", Object)
    ], GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordEmailSettings.prototype, "emailMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EmailSubject" }),
        __metadata("design:type", Object)
    ], GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordEmailSettings.prototype, "emailSubject", void 0);
    return GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordEmailSettings;
}(utils_1.SpeakeasyBase));
exports.GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordEmailSettings = GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordEmailSettings;
// GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordSmsSettings
/**
 * The configuration for the SMS message sent when an app user forgets their password.
**/
var GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordSmsSettings = /** @class */ (function (_super) {
    __extends(GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordSmsSettings, _super);
    function GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordSmsSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SmsMessage" }),
        __metadata("design:type", Object)
    ], GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordSmsSettings.prototype, "smsMessage", void 0);
    return GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordSmsSettings;
}(utils_1.SpeakeasyBase));
exports.GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordSmsSettings = GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordSmsSettings;
// GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPassword
/**
 * Describes the forgotten password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
**/
var GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPassword = /** @class */ (function (_super) {
    __extends(GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPassword, _super);
    function GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPassword() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DeliveryMethod" }),
        __metadata("design:type", Object)
    ], GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPassword.prototype, "deliveryMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EmailSettings" }),
        __metadata("design:type", GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordEmailSettings)
    ], GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPassword.prototype, "emailSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SmsSettings" }),
        __metadata("design:type", GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordSmsSettings)
    ], GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPassword.prototype, "smsSettings", void 0);
    return GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPassword;
}(utils_1.SpeakeasyBase));
exports.GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPassword = GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPassword;
// GetBackendAuthResponseResourceConfigUserPoolConfigsMfaSettings
/**
 * Describes the configuration settings and methods for your Amplify app users to use MFA.
**/
var GetBackendAuthResponseResourceConfigUserPoolConfigsMfaSettings = /** @class */ (function (_super) {
    __extends(GetBackendAuthResponseResourceConfigUserPoolConfigsMfaSettings, _super);
    function GetBackendAuthResponseResourceConfigUserPoolConfigsMfaSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MfaTypes" }),
        __metadata("design:type", Object)
    ], GetBackendAuthResponseResourceConfigUserPoolConfigsMfaSettings.prototype, "mfaTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SmsMessage" }),
        __metadata("design:type", Object)
    ], GetBackendAuthResponseResourceConfigUserPoolConfigsMfaSettings.prototype, "smsMessage", void 0);
    return GetBackendAuthResponseResourceConfigUserPoolConfigsMfaSettings;
}(utils_1.SpeakeasyBase));
exports.GetBackendAuthResponseResourceConfigUserPoolConfigsMfaSettings = GetBackendAuthResponseResourceConfigUserPoolConfigsMfaSettings;
// GetBackendAuthResponseResourceConfigUserPoolConfigsMfa
/**
 * Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.
**/
var GetBackendAuthResponseResourceConfigUserPoolConfigsMfa = /** @class */ (function (_super) {
    __extends(GetBackendAuthResponseResourceConfigUserPoolConfigsMfa, _super);
    function GetBackendAuthResponseResourceConfigUserPoolConfigsMfa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MFAMode" }),
        __metadata("design:type", String)
    ], GetBackendAuthResponseResourceConfigUserPoolConfigsMfa.prototype, "mfaMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Settings" }),
        __metadata("design:type", GetBackendAuthResponseResourceConfigUserPoolConfigsMfaSettings)
    ], GetBackendAuthResponseResourceConfigUserPoolConfigsMfa.prototype, "settings", void 0);
    return GetBackendAuthResponseResourceConfigUserPoolConfigsMfa;
}(utils_1.SpeakeasyBase));
exports.GetBackendAuthResponseResourceConfigUserPoolConfigsMfa = GetBackendAuthResponseResourceConfigUserPoolConfigsMfa;
// GetBackendAuthResponseResourceConfigUserPoolConfigsOAuthSocialProviderSettings
/**
 * The settings for using social providers to access your Amplify app.
**/
var GetBackendAuthResponseResourceConfigUserPoolConfigsOAuthSocialProviderSettings = /** @class */ (function (_super) {
    __extends(GetBackendAuthResponseResourceConfigUserPoolConfigsOAuthSocialProviderSettings, _super);
    function GetBackendAuthResponseResourceConfigUserPoolConfigsOAuthSocialProviderSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Facebook" }),
        __metadata("design:type", backendauthsocialproviderconfig_1.BackendAuthSocialProviderConfig)
    ], GetBackendAuthResponseResourceConfigUserPoolConfigsOAuthSocialProviderSettings.prototype, "facebook", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Google" }),
        __metadata("design:type", backendauthsocialproviderconfig_1.BackendAuthSocialProviderConfig)
    ], GetBackendAuthResponseResourceConfigUserPoolConfigsOAuthSocialProviderSettings.prototype, "google", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LoginWithAmazon" }),
        __metadata("design:type", backendauthsocialproviderconfig_1.BackendAuthSocialProviderConfig)
    ], GetBackendAuthResponseResourceConfigUserPoolConfigsOAuthSocialProviderSettings.prototype, "loginWithAmazon", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SignInWithApple" }),
        __metadata("design:type", backendauthappleproviderconfig_1.BackendAuthAppleProviderConfig)
    ], GetBackendAuthResponseResourceConfigUserPoolConfigsOAuthSocialProviderSettings.prototype, "signInWithApple", void 0);
    return GetBackendAuthResponseResourceConfigUserPoolConfigsOAuthSocialProviderSettings;
}(utils_1.SpeakeasyBase));
exports.GetBackendAuthResponseResourceConfigUserPoolConfigsOAuthSocialProviderSettings = GetBackendAuthResponseResourceConfigUserPoolConfigsOAuthSocialProviderSettings;
// GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth
/**
 * Describes the OAuth policy and rules for your Amazon Cognito user pool, configured as a part of your Amplify project.
**/
var GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth = /** @class */ (function (_super) {
    __extends(GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth, _super);
    function GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DomainPrefix" }),
        __metadata("design:type", Object)
    ], GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth.prototype, "domainPrefix", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OAuthGrantType" }),
        __metadata("design:type", Object)
    ], GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth.prototype, "oAuthGrantType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OAuthScopes" }),
        __metadata("design:type", Object)
    ], GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth.prototype, "oAuthScopes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RedirectSignInURIs" }),
        __metadata("design:type", Object)
    ], GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth.prototype, "redirectSignInURIs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RedirectSignOutURIs" }),
        __metadata("design:type", Object)
    ], GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth.prototype, "redirectSignOutURIs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SocialProviderSettings" }),
        __metadata("design:type", GetBackendAuthResponseResourceConfigUserPoolConfigsOAuthSocialProviderSettings)
    ], GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth.prototype, "socialProviderSettings", void 0);
    return GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth;
}(utils_1.SpeakeasyBase));
exports.GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth = GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth;
// GetBackendAuthResponseResourceConfigUserPoolConfigsPasswordPolicy
/**
 * Describes the password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
**/
var GetBackendAuthResponseResourceConfigUserPoolConfigsPasswordPolicy = /** @class */ (function (_super) {
    __extends(GetBackendAuthResponseResourceConfigUserPoolConfigsPasswordPolicy, _super);
    function GetBackendAuthResponseResourceConfigUserPoolConfigsPasswordPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AdditionalConstraints" }),
        __metadata("design:type", Object)
    ], GetBackendAuthResponseResourceConfigUserPoolConfigsPasswordPolicy.prototype, "additionalConstraints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MinimumLength" }),
        __metadata("design:type", Object)
    ], GetBackendAuthResponseResourceConfigUserPoolConfigsPasswordPolicy.prototype, "minimumLength", void 0);
    return GetBackendAuthResponseResourceConfigUserPoolConfigsPasswordPolicy;
}(utils_1.SpeakeasyBase));
exports.GetBackendAuthResponseResourceConfigUserPoolConfigsPasswordPolicy = GetBackendAuthResponseResourceConfigUserPoolConfigsPasswordPolicy;
// GetBackendAuthResponseResourceConfigUserPoolConfigs
/**
 * Describes authentication configuration for the Amazon Cognito user pool, provisioned as a part of your auth resource in the Amplify project.
**/
var GetBackendAuthResponseResourceConfigUserPoolConfigs = /** @class */ (function (_super) {
    __extends(GetBackendAuthResponseResourceConfigUserPoolConfigs, _super);
    function GetBackendAuthResponseResourceConfigUserPoolConfigs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ForgotPassword" }),
        __metadata("design:type", GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPassword)
    ], GetBackendAuthResponseResourceConfigUserPoolConfigs.prototype, "forgotPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Mfa" }),
        __metadata("design:type", GetBackendAuthResponseResourceConfigUserPoolConfigsMfa)
    ], GetBackendAuthResponseResourceConfigUserPoolConfigs.prototype, "mfa", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OAuth" }),
        __metadata("design:type", GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth)
    ], GetBackendAuthResponseResourceConfigUserPoolConfigs.prototype, "oAuth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PasswordPolicy" }),
        __metadata("design:type", GetBackendAuthResponseResourceConfigUserPoolConfigsPasswordPolicy)
    ], GetBackendAuthResponseResourceConfigUserPoolConfigs.prototype, "passwordPolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RequiredSignUpAttributes" }),
        __metadata("design:type", Object)
    ], GetBackendAuthResponseResourceConfigUserPoolConfigs.prototype, "requiredSignUpAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SignInMethod" }),
        __metadata("design:type", Object)
    ], GetBackendAuthResponseResourceConfigUserPoolConfigs.prototype, "signInMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UserPoolName" }),
        __metadata("design:type", Object)
    ], GetBackendAuthResponseResourceConfigUserPoolConfigs.prototype, "userPoolName", void 0);
    return GetBackendAuthResponseResourceConfigUserPoolConfigs;
}(utils_1.SpeakeasyBase));
exports.GetBackendAuthResponseResourceConfigUserPoolConfigs = GetBackendAuthResponseResourceConfigUserPoolConfigs;
// GetBackendAuthResponseResourceConfig
/**
 * The resource configuration for authorization requests to the backend of your Amplify project.
**/
var GetBackendAuthResponseResourceConfig = /** @class */ (function (_super) {
    __extends(GetBackendAuthResponseResourceConfig, _super);
    function GetBackendAuthResponseResourceConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AuthResources" }),
        __metadata("design:type", Object)
    ], GetBackendAuthResponseResourceConfig.prototype, "authResources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IdentityPoolConfigs" }),
        __metadata("design:type", GetBackendAuthResponseResourceConfigIdentityPoolConfigs)
    ], GetBackendAuthResponseResourceConfig.prototype, "identityPoolConfigs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Service" }),
        __metadata("design:type", Object)
    ], GetBackendAuthResponseResourceConfig.prototype, "service", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UserPoolConfigs" }),
        __metadata("design:type", GetBackendAuthResponseResourceConfigUserPoolConfigs)
    ], GetBackendAuthResponseResourceConfig.prototype, "userPoolConfigs", void 0);
    return GetBackendAuthResponseResourceConfig;
}(utils_1.SpeakeasyBase));
exports.GetBackendAuthResponseResourceConfig = GetBackendAuthResponseResourceConfig;
var GetBackendAuthResponse = /** @class */ (function (_super) {
    __extends(GetBackendAuthResponse, _super);
    function GetBackendAuthResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AppId" }),
        __metadata("design:type", Object)
    ], GetBackendAuthResponse.prototype, "appId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BackendEnvironmentName" }),
        __metadata("design:type", Object)
    ], GetBackendAuthResponse.prototype, "backendEnvironmentName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Error" }),
        __metadata("design:type", Object)
    ], GetBackendAuthResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ResourceConfig" }),
        __metadata("design:type", GetBackendAuthResponseResourceConfig)
    ], GetBackendAuthResponse.prototype, "resourceConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ResourceName" }),
        __metadata("design:type", Object)
    ], GetBackendAuthResponse.prototype, "resourceName", void 0);
    return GetBackendAuthResponse;
}(utils_1.SpeakeasyBase));
exports.GetBackendAuthResponse = GetBackendAuthResponse;
