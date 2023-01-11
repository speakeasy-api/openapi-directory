import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateBackendAuthPathParams extends SpeakeasyBase {
    appId: string;
    backendEnvironmentName: string;
}
export declare class UpdateBackendAuthHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.
**/
export declare class UpdateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs extends SpeakeasyBase {
    unauthenticatedLogin?: Record<string, any>;
}
/**
 * The configuration for the email sent when an app user forgets their password.
**/
export declare class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings extends SpeakeasyBase {
    emailMessage?: Record<string, any>;
    emailSubject?: Record<string, any>;
}
/**
 * The configuration for the SMS message sent when an Amplify app user forgets their password.
**/
export declare class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings extends SpeakeasyBase {
    smsMessage?: Record<string, any>;
}
/**
 * Describes the forgot password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
**/
export declare class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword extends SpeakeasyBase {
    deliveryMethod?: Record<string, any>;
    emailSettings?: UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings;
    smsSettings?: UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings;
}
/**
 * The settings of your MFA configuration for the backend of your Amplify project.
**/
export declare class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings extends SpeakeasyBase {
    mfaTypes?: Record<string, any>;
    smsMessage?: Record<string, any>;
}
/**
 * Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.
**/
export declare class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa extends SpeakeasyBase {
    mfaMode?: shared.MfaModeEnum;
    settings?: UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings;
}
/**
 * Describes third-party social federation configurations for allowing your users to sign in with OAuth.
**/
export declare class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings extends SpeakeasyBase {
    facebook?: shared.BackendAuthSocialProviderConfig;
    google?: shared.BackendAuthSocialProviderConfig;
    loginWithAmazon?: shared.BackendAuthSocialProviderConfig;
    signInWithApple?: shared.BackendAuthAppleProviderConfig;
}
/**
 * Describes the OAuth policy and rules for your Amazon Cognito user pool, configured as a part of your Amplify project.
**/
export declare class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth extends SpeakeasyBase {
    domainPrefix?: Record<string, any>;
    oAuthGrantType?: Record<string, any>;
    oAuthScopes?: Record<string, any>;
    redirectSignInURIs?: Record<string, any>;
    redirectSignOutURIs?: Record<string, any>;
    socialProviderSettings?: UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings;
}
/**
 * Describes the password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
**/
export declare class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy extends SpeakeasyBase {
    additionalConstraints?: Record<string, any>;
    minimumLength?: Record<string, any>;
}
/**
 * Describes the authentication configuration for the Amazon Cognito user pool, provisioned as a part of your auth resource in the Amplify project.
**/
export declare class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs extends SpeakeasyBase {
    forgotPassword?: UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword;
    mfa?: UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa;
    oAuth?: UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth;
    passwordPolicy?: UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy;
}
/**
 * Defines the resource configuration when updating an authentication resource in your Amplify project.
**/
export declare class UpdateBackendAuthRequestBodyResourceConfig extends SpeakeasyBase {
    authResources?: Record<string, any>;
    identityPoolConfigs?: UpdateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs;
    service?: Record<string, any>;
    userPoolConfigs?: UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs;
}
export declare class UpdateBackendAuthRequestBody extends SpeakeasyBase {
    resourceConfig: UpdateBackendAuthRequestBodyResourceConfig;
    resourceName: string;
}
export declare class UpdateBackendAuthRequest extends SpeakeasyBase {
    pathParams: UpdateBackendAuthPathParams;
    headers: UpdateBackendAuthHeaders;
    request: UpdateBackendAuthRequestBody;
}
export declare class UpdateBackendAuthResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    gatewayTimeoutException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateBackendAuthResponse?: shared.UpdateBackendAuthResponse;
}
