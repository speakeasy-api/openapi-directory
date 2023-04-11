import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Defines whether you want to configure only authentication or both authentication and authorization settings.
 */
export declare enum CreateBackendAuthRequestBodyResourceConfigAuthResourcesEnum {
    UserPoolOnly = "USER_POOL_ONLY",
    IdentityPoolAndUserPool = "IDENTITY_POOL_AND_USER_POOL"
}
/**
 * Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.
 */
export declare class CreateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs extends SpeakeasyBase {
    identityPoolName: string;
    unauthenticatedLogin: boolean;
}
/**
 * Defines the service name to use when configuring an authentication resource in your Amplify project.
 */
export declare enum CreateBackendAuthRequestBodyResourceConfigServiceEnum {
    Cognito = "COGNITO"
}
/**
 * <b>(DEPRECATED)</b> Describes which mode to use (either SMS or email) to deliver messages to app users who want to recover their password.
 */
export declare enum CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordDeliveryMethodEnum {
    Email = "EMAIL",
    Sms = "SMS"
}
/**
 * <b>(DEPRECATED)</b> The configuration for the email sent when an app user forgets their password.
 */
export declare class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings extends SpeakeasyBase {
    emailMessage?: string;
    emailSubject?: string;
}
/**
 * <b>(DEPRECATED)</b> The configuration for the SMS message sent when an app user forgets their password.
 */
export declare class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings extends SpeakeasyBase {
    smsMessage?: string;
}
/**
 * <b>(DEPRECATED)</b> Describes the forgotten password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
 */
export declare class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword extends SpeakeasyBase {
    deliveryMethod: CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordDeliveryMethodEnum;
    emailSettings?: CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings;
    smsSettings?: CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings;
}
/**
 * Describes the configuration settings and methods for your Amplify app users to use MFA.
 */
export declare class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings extends SpeakeasyBase {
    mfaTypes?: shared.MfaTypesElementEnum[];
    smsMessage?: string;
}
/**
 * Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.
 */
export declare class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa extends SpeakeasyBase {
    mfaMode: shared.MFAModeEnum;
    settings?: CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings;
}
/**
 * The OAuth grant type that you use to allow app users to authenticate from your Amplify app.
 */
export declare enum CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthOAuthGrantTypeEnum {
    Code = "CODE",
    Implicit = "IMPLICIT"
}
/**
 * The settings for using social providers to access your Amplify app.
 */
export declare class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings extends SpeakeasyBase {
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
export declare class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth extends SpeakeasyBase {
    domainPrefix?: string;
    oAuthGrantType: CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthOAuthGrantTypeEnum;
    oAuthScopes: shared.OAuthScopesElementEnum[];
    redirectSignInURIs: string[];
    redirectSignOutURIs: string[];
    socialProviderSettings?: CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings;
}
/**
 * Describes the password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
 */
export declare class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy extends SpeakeasyBase {
    additionalConstraints?: shared.AdditionalConstraintsElementEnum[];
    minimumLength: number;
}
/**
 * Describes the sign-in methods that your Amplify app users use to log in using the Amazon Cognito user pool, configured as a part of your Amplify project.
 */
export declare enum CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsSignInMethodEnum {
    Email = "EMAIL",
    EmailAndPhoneNumber = "EMAIL_AND_PHONE_NUMBER",
    PhoneNumber = "PHONE_NUMBER",
    Username = "USERNAME"
}
/**
 * The type of verification message to send.
 */
export declare enum CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageDeliveryMethodEnum {
    Email = "EMAIL",
    Sms = "SMS"
}
/**
 * The settings for the email message.
 */
export declare class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageEmailSettings extends SpeakeasyBase {
    emailMessage?: string;
    emailSubject?: string;
}
/**
 * The settings for the SMS message.
 */
export declare class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageSmsSettings extends SpeakeasyBase {
    smsMessage?: string;
}
/**
 * Describes the email or SMS verification message for your Amazon Cognito user pool, configured as a part of your Amplify project.
 */
export declare class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessage extends SpeakeasyBase {
    deliveryMethod: CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageDeliveryMethodEnum;
    emailSettings?: CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageEmailSettings;
    smsSettings?: CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageSmsSettings;
}
/**
 * Describes authentication configuration for the Amazon Cognito user pool, provisioned as a part of your auth resource in the Amplify project.
 */
export declare class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs extends SpeakeasyBase {
    forgotPassword?: CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword;
    mfa?: CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa;
    oAuth?: CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth;
    passwordPolicy?: CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy;
    requiredSignUpAttributes: shared.RequiredSignUpAttributesElementEnum[];
    signInMethod: CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsSignInMethodEnum;
    userPoolName: string;
    verificationMessage?: CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessage;
}
/**
 * Defines the resource configuration when creating an auth resource in your Amplify project.
 */
export declare class CreateBackendAuthRequestBodyResourceConfig extends SpeakeasyBase {
    authResources?: CreateBackendAuthRequestBodyResourceConfigAuthResourcesEnum;
    identityPoolConfigs?: CreateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs;
    service?: CreateBackendAuthRequestBodyResourceConfigServiceEnum;
    userPoolConfigs?: CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs;
}
export declare class CreateBackendAuthRequestBody extends SpeakeasyBase {
    /**
     * The name of the backend environment.
     */
    backendEnvironmentName: string;
    /**
     * Defines the resource configuration when creating an auth resource in your Amplify project.
     */
    resourceConfig: CreateBackendAuthRequestBodyResourceConfig;
    /**
     * The name of this resource.
     */
    resourceName: string;
}
export declare class CreateBackendAuthRequest extends SpeakeasyBase {
    requestBody: CreateBackendAuthRequestBody;
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
}
export declare class CreateBackendAuthResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createBackendAuthResponse?: shared.CreateBackendAuthResponse;
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
}
