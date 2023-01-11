import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateBackendAuthPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class CreateBackendAuthHeaders extends SpeakeasyBase {
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
export declare class CreateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs extends SpeakeasyBase {
    identityPoolName: Record<string, any>;
    unauthenticatedLogin: Record<string, any>;
}
/**
 * The configuration for the email sent when an app user forgets their password.
**/
export declare class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings extends SpeakeasyBase {
    emailMessage?: Record<string, any>;
    emailSubject?: Record<string, any>;
}
/**
 * The configuration for the SMS message sent when an app user forgets their password.
**/
export declare class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings extends SpeakeasyBase {
    smsMessage?: Record<string, any>;
}
/**
 * Describes the forgotten password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
**/
export declare class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword extends SpeakeasyBase {
    deliveryMethod: Record<string, any>;
    emailSettings?: CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings;
    smsSettings?: CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings;
}
/**
 * Describes the configuration settings and methods for your Amplify app users to use MFA.
**/
export declare class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings extends SpeakeasyBase {
    mfaTypes?: Record<string, any>;
    smsMessage?: Record<string, any>;
}
/**
 * Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.
**/
export declare class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa extends SpeakeasyBase {
    mfaMode: shared.MfaModeEnum;
    settings?: CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings;
}
/**
 * The settings for using social providers to access your Amplify app.
**/
export declare class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings extends SpeakeasyBase {
    facebook?: shared.BackendAuthSocialProviderConfig;
    google?: shared.BackendAuthSocialProviderConfig;
    loginWithAmazon?: shared.BackendAuthSocialProviderConfig;
    signInWithApple?: shared.BackendAuthAppleProviderConfig;
}
/**
 * Describes the OAuth policy and rules for your Amazon Cognito user pool, configured as a part of your Amplify project.
**/
export declare class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth extends SpeakeasyBase {
    domainPrefix?: Record<string, any>;
    oAuthGrantType: Record<string, any>;
    oAuthScopes: Record<string, any>;
    redirectSignInURIs: Record<string, any>;
    redirectSignOutURIs: Record<string, any>;
    socialProviderSettings?: CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings;
}
/**
 * Describes the password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
**/
export declare class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy extends SpeakeasyBase {
    additionalConstraints?: Record<string, any>;
    minimumLength: Record<string, any>;
}
/**
 * Describes authentication configuration for the Amazon Cognito user pool, provisioned as a part of your auth resource in the Amplify project.
**/
export declare class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs extends SpeakeasyBase {
    forgotPassword?: CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword;
    mfa?: CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa;
    oAuth?: CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth;
    passwordPolicy?: CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy;
    requiredSignUpAttributes: Record<string, any>;
    signInMethod: Record<string, any>;
    userPoolName: Record<string, any>;
}
/**
 * Defines the resource configuration when creating an auth resource in your Amplify project.
**/
export declare class CreateBackendAuthRequestBodyResourceConfig extends SpeakeasyBase {
    authResources?: Record<string, any>;
    identityPoolConfigs?: CreateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs;
    service?: Record<string, any>;
    userPoolConfigs?: CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs;
}
export declare class CreateBackendAuthRequestBody extends SpeakeasyBase {
    backendEnvironmentName: string;
    resourceConfig: CreateBackendAuthRequestBodyResourceConfig;
    resourceName: string;
}
export declare class CreateBackendAuthRequest extends SpeakeasyBase {
    pathParams: CreateBackendAuthPathParams;
    headers: CreateBackendAuthHeaders;
    request: CreateBackendAuthRequestBody;
}
export declare class CreateBackendAuthResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createBackendAuthResponse?: shared.CreateBackendAuthResponse;
    gatewayTimeoutException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
