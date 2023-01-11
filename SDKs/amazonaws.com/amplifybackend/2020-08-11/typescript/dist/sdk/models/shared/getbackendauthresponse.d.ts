import { SpeakeasyBase } from "../../../internal/utils";
import { MfaModeEnum } from "./mfamodeenum";
import { BackendAuthSocialProviderConfig } from "./backendauthsocialproviderconfig";
import { BackendAuthAppleProviderConfig } from "./backendauthappleproviderconfig";
/**
 * Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.
**/
export declare class GetBackendAuthResponseResourceConfigIdentityPoolConfigs extends SpeakeasyBase {
    identityPoolName: Record<string, any>;
    unauthenticatedLogin: Record<string, any>;
}
/**
 * The configuration for the email sent when an app user forgets their password.
**/
export declare class GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordEmailSettings extends SpeakeasyBase {
    emailMessage?: Record<string, any>;
    emailSubject?: Record<string, any>;
}
/**
 * The configuration for the SMS message sent when an app user forgets their password.
**/
export declare class GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordSmsSettings extends SpeakeasyBase {
    smsMessage?: Record<string, any>;
}
/**
 * Describes the forgotten password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
**/
export declare class GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPassword extends SpeakeasyBase {
    deliveryMethod: Record<string, any>;
    emailSettings?: GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordEmailSettings;
    smsSettings?: GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordSmsSettings;
}
/**
 * Describes the configuration settings and methods for your Amplify app users to use MFA.
**/
export declare class GetBackendAuthResponseResourceConfigUserPoolConfigsMfaSettings extends SpeakeasyBase {
    mfaTypes?: Record<string, any>;
    smsMessage?: Record<string, any>;
}
/**
 * Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.
**/
export declare class GetBackendAuthResponseResourceConfigUserPoolConfigsMfa extends SpeakeasyBase {
    mfaMode: MfaModeEnum;
    settings?: GetBackendAuthResponseResourceConfigUserPoolConfigsMfaSettings;
}
/**
 * The settings for using social providers to access your Amplify app.
**/
export declare class GetBackendAuthResponseResourceConfigUserPoolConfigsOAuthSocialProviderSettings extends SpeakeasyBase {
    facebook?: BackendAuthSocialProviderConfig;
    google?: BackendAuthSocialProviderConfig;
    loginWithAmazon?: BackendAuthSocialProviderConfig;
    signInWithApple?: BackendAuthAppleProviderConfig;
}
/**
 * Describes the OAuth policy and rules for your Amazon Cognito user pool, configured as a part of your Amplify project.
**/
export declare class GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth extends SpeakeasyBase {
    domainPrefix?: Record<string, any>;
    oAuthGrantType: Record<string, any>;
    oAuthScopes: Record<string, any>;
    redirectSignInURIs: Record<string, any>;
    redirectSignOutURIs: Record<string, any>;
    socialProviderSettings?: GetBackendAuthResponseResourceConfigUserPoolConfigsOAuthSocialProviderSettings;
}
/**
 * Describes the password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
**/
export declare class GetBackendAuthResponseResourceConfigUserPoolConfigsPasswordPolicy extends SpeakeasyBase {
    additionalConstraints?: Record<string, any>;
    minimumLength: Record<string, any>;
}
/**
 * Describes authentication configuration for the Amazon Cognito user pool, provisioned as a part of your auth resource in the Amplify project.
**/
export declare class GetBackendAuthResponseResourceConfigUserPoolConfigs extends SpeakeasyBase {
    forgotPassword?: GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPassword;
    mfa?: GetBackendAuthResponseResourceConfigUserPoolConfigsMfa;
    oAuth?: GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth;
    passwordPolicy?: GetBackendAuthResponseResourceConfigUserPoolConfigsPasswordPolicy;
    requiredSignUpAttributes: Record<string, any>;
    signInMethod: Record<string, any>;
    userPoolName: Record<string, any>;
}
/**
 * The resource configuration for authorization requests to the backend of your Amplify project.
**/
export declare class GetBackendAuthResponseResourceConfig extends SpeakeasyBase {
    authResources: Record<string, any>;
    identityPoolConfigs?: GetBackendAuthResponseResourceConfigIdentityPoolConfigs;
    service: Record<string, any>;
    userPoolConfigs: GetBackendAuthResponseResourceConfigUserPoolConfigs;
}
export declare class GetBackendAuthResponse extends SpeakeasyBase {
    appId?: Record<string, any>;
    backendEnvironmentName?: Record<string, any>;
    error?: Record<string, any>;
    resourceConfig?: GetBackendAuthResponseResourceConfig;
    resourceName?: Record<string, any>;
}
