import { SpeakeasyBase } from "../../../internal/utils";
import { AdditionalConstraintsElementEnum } from "./additionalconstraintselementenum";
import { BackendAuthAppleProviderConfig } from "./backendauthappleproviderconfig";
import { BackendAuthSocialProviderConfig } from "./backendauthsocialproviderconfig";
import { MFAModeEnum } from "./mfamodeenum";
import { MfaTypesElementEnum } from "./mfatypeselementenum";
import { OAuthScopesElementEnum } from "./oauthscopeselementenum";
import { RequiredSignUpAttributesElementEnum } from "./requiredsignupattributeselementenum";
/**
 * Defines whether you want to configure only authentication or both authentication and authorization settings.
 */
export declare enum GetBackendAuthResponseResourceConfigAuthResourcesEnum {
    UserPoolOnly = "USER_POOL_ONLY",
    IdentityPoolAndUserPool = "IDENTITY_POOL_AND_USER_POOL"
}
/**
 * Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.
 */
export declare class GetBackendAuthResponseResourceConfigIdentityPoolConfigs extends SpeakeasyBase {
    identityPoolName: string;
    unauthenticatedLogin: boolean;
}
/**
 * Defines the service name to use when configuring an authentication resource in your Amplify project.
 */
export declare enum GetBackendAuthResponseResourceConfigServiceEnum {
    Cognito = "COGNITO"
}
/**
 * <b>(DEPRECATED)</b> Describes which mode to use (either SMS or email) to deliver messages to app users who want to recover their password.
 */
export declare enum GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordDeliveryMethodEnum {
    Email = "EMAIL",
    Sms = "SMS"
}
/**
 * <b>(DEPRECATED)</b> The configuration for the email sent when an app user forgets their password.
 */
export declare class GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordEmailSettings extends SpeakeasyBase {
    emailMessage?: string;
    emailSubject?: string;
}
/**
 * <b>(DEPRECATED)</b> The configuration for the SMS message sent when an app user forgets their password.
 */
export declare class GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordSmsSettings extends SpeakeasyBase {
    smsMessage?: string;
}
/**
 * <b>(DEPRECATED)</b> Describes the forgotten password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
 */
export declare class GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPassword extends SpeakeasyBase {
    deliveryMethod: GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordDeliveryMethodEnum;
    emailSettings?: GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordEmailSettings;
    smsSettings?: GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordSmsSettings;
}
/**
 * Describes the configuration settings and methods for your Amplify app users to use MFA.
 */
export declare class GetBackendAuthResponseResourceConfigUserPoolConfigsMfaSettings extends SpeakeasyBase {
    mfaTypes?: MfaTypesElementEnum[];
    smsMessage?: string;
}
/**
 * Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.
 */
export declare class GetBackendAuthResponseResourceConfigUserPoolConfigsMfa extends SpeakeasyBase {
    mfaMode: MFAModeEnum;
    settings?: GetBackendAuthResponseResourceConfigUserPoolConfigsMfaSettings;
}
/**
 * The OAuth grant type that you use to allow app users to authenticate from your Amplify app.
 */
export declare enum GetBackendAuthResponseResourceConfigUserPoolConfigsOAuthOAuthGrantTypeEnum {
    Code = "CODE",
    Implicit = "IMPLICIT"
}
/**
 * The settings for using social providers to access your Amplify app.
 */
export declare class GetBackendAuthResponseResourceConfigUserPoolConfigsOAuthSocialProviderSettings extends SpeakeasyBase {
    /**
     * Describes third-party social federation configurations for allowing your app users to sign in using OAuth.
     */
    facebook?: BackendAuthSocialProviderConfig;
    /**
     * Describes third-party social federation configurations for allowing your app users to sign in using OAuth.
     */
    google?: BackendAuthSocialProviderConfig;
    /**
     * Describes third-party social federation configurations for allowing your app users to sign in using OAuth.
     */
    loginWithAmazon?: BackendAuthSocialProviderConfig;
    /**
     * Describes Apple social federation configurations for allowing your app users to sign in using OAuth.
     */
    signInWithApple?: BackendAuthAppleProviderConfig;
}
/**
 * Describes the OAuth policy and rules for your Amazon Cognito user pool, configured as a part of your Amplify project.
 */
export declare class GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth extends SpeakeasyBase {
    domainPrefix?: string;
    oAuthGrantType: GetBackendAuthResponseResourceConfigUserPoolConfigsOAuthOAuthGrantTypeEnum;
    oAuthScopes: OAuthScopesElementEnum[];
    redirectSignInURIs: string[];
    redirectSignOutURIs: string[];
    socialProviderSettings?: GetBackendAuthResponseResourceConfigUserPoolConfigsOAuthSocialProviderSettings;
}
/**
 * Describes the password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
 */
export declare class GetBackendAuthResponseResourceConfigUserPoolConfigsPasswordPolicy extends SpeakeasyBase {
    additionalConstraints?: AdditionalConstraintsElementEnum[];
    minimumLength: number;
}
/**
 * Describes the sign-in methods that your Amplify app users use to log in using the Amazon Cognito user pool, configured as a part of your Amplify project.
 */
export declare enum GetBackendAuthResponseResourceConfigUserPoolConfigsSignInMethodEnum {
    Email = "EMAIL",
    EmailAndPhoneNumber = "EMAIL_AND_PHONE_NUMBER",
    PhoneNumber = "PHONE_NUMBER",
    Username = "USERNAME"
}
/**
 * The type of verification message to send.
 */
export declare enum GetBackendAuthResponseResourceConfigUserPoolConfigsVerificationMessageDeliveryMethodEnum {
    Email = "EMAIL",
    Sms = "SMS"
}
/**
 * The settings for the email message.
 */
export declare class GetBackendAuthResponseResourceConfigUserPoolConfigsVerificationMessageEmailSettings extends SpeakeasyBase {
    emailMessage?: string;
    emailSubject?: string;
}
/**
 * The settings for the SMS message.
 */
export declare class GetBackendAuthResponseResourceConfigUserPoolConfigsVerificationMessageSmsSettings extends SpeakeasyBase {
    smsMessage?: string;
}
/**
 * Describes the email or SMS verification message for your Amazon Cognito user pool, configured as a part of your Amplify project.
 */
export declare class GetBackendAuthResponseResourceConfigUserPoolConfigsVerificationMessage extends SpeakeasyBase {
    deliveryMethod: GetBackendAuthResponseResourceConfigUserPoolConfigsVerificationMessageDeliveryMethodEnum;
    emailSettings?: GetBackendAuthResponseResourceConfigUserPoolConfigsVerificationMessageEmailSettings;
    smsSettings?: GetBackendAuthResponseResourceConfigUserPoolConfigsVerificationMessageSmsSettings;
}
/**
 * Describes authentication configuration for the Amazon Cognito user pool, provisioned as a part of your auth resource in the Amplify project.
 */
export declare class GetBackendAuthResponseResourceConfigUserPoolConfigs extends SpeakeasyBase {
    forgotPassword?: GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPassword;
    mfa?: GetBackendAuthResponseResourceConfigUserPoolConfigsMfa;
    oAuth?: GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth;
    passwordPolicy?: GetBackendAuthResponseResourceConfigUserPoolConfigsPasswordPolicy;
    requiredSignUpAttributes: RequiredSignUpAttributesElementEnum[];
    signInMethod: GetBackendAuthResponseResourceConfigUserPoolConfigsSignInMethodEnum;
    userPoolName: string;
    verificationMessage?: GetBackendAuthResponseResourceConfigUserPoolConfigsVerificationMessage;
}
/**
 * The resource configuration for authorization requests to the backend of your Amplify project.
 */
export declare class GetBackendAuthResponseResourceConfig extends SpeakeasyBase {
    authResources: GetBackendAuthResponseResourceConfigAuthResourcesEnum;
    identityPoolConfigs?: GetBackendAuthResponseResourceConfigIdentityPoolConfigs;
    service: GetBackendAuthResponseResourceConfigServiceEnum;
    userPoolConfigs: GetBackendAuthResponseResourceConfigUserPoolConfigs;
}
/**
 * Success
 */
export declare class GetBackendAuthResponse extends SpeakeasyBase {
    appId?: string;
    backendEnvironmentName?: string;
    error?: string;
    resourceConfig?: GetBackendAuthResponseResourceConfig;
    resourceName?: string;
}
