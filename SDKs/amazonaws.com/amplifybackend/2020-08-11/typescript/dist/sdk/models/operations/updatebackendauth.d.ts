import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Defines the service name to use when configuring an authentication resource in your Amplify project.
 */
export declare enum UpdateBackendAuthRequestBodyResourceConfigAuthResourcesEnum {
    UserPoolOnly = "USER_POOL_ONLY",
    IdentityPoolAndUserPool = "IDENTITY_POOL_AND_USER_POOL"
}
/**
 * Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.
 */
export declare class UpdateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs extends SpeakeasyBase {
    unauthenticatedLogin?: boolean;
}
/**
 * Defines the service name to use when configuring an authentication resource in your Amplify project.
 */
export declare enum UpdateBackendAuthRequestBodyResourceConfigServiceEnum {
    Cognito = "COGNITO"
}
/**
 * <b>(DEPRECATED)</b> Describes which mode to use (either SMS or email) to deliver messages to app users that want to recover their password.
 */
export declare enum UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordDeliveryMethodEnum {
    Email = "EMAIL",
    Sms = "SMS"
}
/**
 * <b>(DEPRECATED)</b> The configuration for the email sent when an app user forgets their password.
 */
export declare class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings extends SpeakeasyBase {
    emailMessage?: string;
    emailSubject?: string;
}
/**
 * <b>(DEPRECATED)</b> The configuration for the SMS message sent when an Amplify app user forgets their password.
 */
export declare class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings extends SpeakeasyBase {
    smsMessage?: string;
}
/**
 * <b>(DEPRECATED)</b> Describes the forgot password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
 */
export declare class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword extends SpeakeasyBase {
    deliveryMethod?: UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordDeliveryMethodEnum;
    emailSettings?: UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings;
    smsSettings?: UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings;
}
/**
 * The settings of your MFA configuration for the backend of your Amplify project.
 */
export declare class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings extends SpeakeasyBase {
    mfaTypes?: shared.MfaTypesElementEnum[];
    smsMessage?: string;
}
/**
 * Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.
 */
export declare class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa extends SpeakeasyBase {
    mfaMode?: shared.MFAModeEnum;
    settings?: UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings;
}
/**
 * The OAuth grant type to allow app users to authenticate from your Amplify app.
 */
export declare enum UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthOAuthGrantTypeEnum {
    Code = "CODE",
    Implicit = "IMPLICIT"
}
/**
 * Describes third-party social federation configurations for allowing your users to sign in with OAuth.
 */
export declare class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings extends SpeakeasyBase {
    /**
     * Describes third-party social federation configurations for allowing your app users to sign in using OAuth.
     */
    facebook?: shared.BackendAuthSocialProviderConfig;
    /**
     * Describes third-party social federation configurations for allowing your app users to sign in using OAuth.
     */
    google?: shared.BackendAuthSocialProviderConfig;
    /**
     * Describes third-party social federation configurations for allowing your app users to sign in using OAuth.
     */
    loginWithAmazon?: shared.BackendAuthSocialProviderConfig;
    /**
     * Describes Apple social federation configurations for allowing your app users to sign in using OAuth.
     */
    signInWithApple?: shared.BackendAuthAppleProviderConfig;
}
/**
 * Describes the OAuth policy and rules for your Amazon Cognito user pool, configured as a part of your Amplify project.
 */
export declare class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth extends SpeakeasyBase {
    domainPrefix?: string;
    oAuthGrantType?: UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthOAuthGrantTypeEnum;
    oAuthScopes?: shared.OAuthScopesElementEnum[];
    redirectSignInURIs?: string[];
    redirectSignOutURIs?: string[];
    socialProviderSettings?: UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings;
}
/**
 * Describes the password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
 */
export declare class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy extends SpeakeasyBase {
    additionalConstraints?: shared.AdditionalConstraintsElementEnum[];
    minimumLength?: number;
}
/**
 * The type of verification message to send.
 */
export declare enum UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageDeliveryMethodEnum {
    Email = "EMAIL",
    Sms = "SMS"
}
/**
 * The settings for the email message.
 */
export declare class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageEmailSettings extends SpeakeasyBase {
    emailMessage?: string;
    emailSubject?: string;
}
/**
 * The settings for the SMS message.
 */
export declare class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageSmsSettings extends SpeakeasyBase {
    smsMessage?: string;
}
/**
 * Describes the email or SMS verification message for your Amazon Cognito user pool, configured as a part of your Amplify project.
 */
export declare class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessage extends SpeakeasyBase {
    deliveryMethod: UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageDeliveryMethodEnum;
    emailSettings?: UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageEmailSettings;
    smsSettings?: UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageSmsSettings;
}
/**
 * Describes the authentication configuration for the Amazon Cognito user pool, provisioned as a part of your auth resource in the Amplify project.
 */
export declare class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs extends SpeakeasyBase {
    forgotPassword?: UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword;
    mfa?: UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa;
    oAuth?: UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth;
    passwordPolicy?: UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy;
    verificationMessage?: UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessage;
}
/**
 * Defines the resource configuration when updating an authentication resource in your Amplify project.
 */
export declare class UpdateBackendAuthRequestBodyResourceConfig extends SpeakeasyBase {
    authResources?: UpdateBackendAuthRequestBodyResourceConfigAuthResourcesEnum;
    identityPoolConfigs?: UpdateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs;
    service?: UpdateBackendAuthRequestBodyResourceConfigServiceEnum;
    userPoolConfigs?: UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs;
}
export declare class UpdateBackendAuthRequestBody extends SpeakeasyBase {
    /**
     * Defines the resource configuration when updating an authentication resource in your Amplify project.
     */
    resourceConfig: UpdateBackendAuthRequestBodyResourceConfig;
    /**
     * The name of this resource.
     */
    resourceName: string;
}
export declare class UpdateBackendAuthRequest extends SpeakeasyBase {
    requestBody: UpdateBackendAuthRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The app ID.
     */
    appId: string;
    /**
     * The name of the backend environment.
     */
    backendEnvironmentName: string;
}
export declare class UpdateBackendAuthResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * GatewayTimeoutException
     */
    gatewayTimeoutException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * Success
     */
    updateBackendAuthResponse?: shared.UpdateBackendAuthResponse;
}
