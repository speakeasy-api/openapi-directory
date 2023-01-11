import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MfaModeEnum } from "./mfamodeenum";
import { BackendAuthSocialProviderConfig } from "./backendauthsocialproviderconfig";
import { BackendAuthAppleProviderConfig } from "./backendauthappleproviderconfig";



// GetBackendAuthResponseResourceConfigIdentityPoolConfigs
/** 
 * Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.
**/
export class GetBackendAuthResponseResourceConfigIdentityPoolConfigs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdentityPoolName" })
  identityPoolName: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=UnauthenticatedLogin" })
  unauthenticatedLogin: Record<string, any>;
}


// GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordEmailSettings
/** 
 * The configuration for the email sent when an app user forgets their password.
**/
export class GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordEmailSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EmailMessage" })
  emailMessage?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=EmailSubject" })
  emailSubject?: Record<string, any>;
}


// GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordSmsSettings
/** 
 * The configuration for the SMS message sent when an app user forgets their password.
**/
export class GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordSmsSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SmsMessage" })
  smsMessage?: Record<string, any>;
}


// GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPassword
/** 
 * Describes the forgotten password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
**/
export class GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPassword extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeliveryMethod" })
  deliveryMethod: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=EmailSettings" })
  emailSettings?: GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordEmailSettings;

  @SpeakeasyMetadata({ data: "json, name=SmsSettings" })
  smsSettings?: GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordSmsSettings;
}


// GetBackendAuthResponseResourceConfigUserPoolConfigsMfaSettings
/** 
 * Describes the configuration settings and methods for your Amplify app users to use MFA.
**/
export class GetBackendAuthResponseResourceConfigUserPoolConfigsMfaSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MfaTypes" })
  mfaTypes?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=SmsMessage" })
  smsMessage?: Record<string, any>;
}


// GetBackendAuthResponseResourceConfigUserPoolConfigsMfa
/** 
 * Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.
**/
export class GetBackendAuthResponseResourceConfigUserPoolConfigsMfa extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MFAMode" })
  mfaMode: MfaModeEnum;

  @SpeakeasyMetadata({ data: "json, name=Settings" })
  settings?: GetBackendAuthResponseResourceConfigUserPoolConfigsMfaSettings;
}


// GetBackendAuthResponseResourceConfigUserPoolConfigsOAuthSocialProviderSettings
/** 
 * The settings for using social providers to access your Amplify app.
**/
export class GetBackendAuthResponseResourceConfigUserPoolConfigsOAuthSocialProviderSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Facebook" })
  facebook?: BackendAuthSocialProviderConfig;

  @SpeakeasyMetadata({ data: "json, name=Google" })
  google?: BackendAuthSocialProviderConfig;

  @SpeakeasyMetadata({ data: "json, name=LoginWithAmazon" })
  loginWithAmazon?: BackendAuthSocialProviderConfig;

  @SpeakeasyMetadata({ data: "json, name=SignInWithApple" })
  signInWithApple?: BackendAuthAppleProviderConfig;
}


// GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth
/** 
 * Describes the OAuth policy and rules for your Amazon Cognito user pool, configured as a part of your Amplify project.
**/
export class GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainPrefix" })
  domainPrefix?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=OAuthGrantType" })
  oAuthGrantType: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=OAuthScopes" })
  oAuthScopes: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=RedirectSignInURIs" })
  redirectSignInURIs: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=RedirectSignOutURIs" })
  redirectSignOutURIs: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=SocialProviderSettings" })
  socialProviderSettings?: GetBackendAuthResponseResourceConfigUserPoolConfigsOAuthSocialProviderSettings;
}


// GetBackendAuthResponseResourceConfigUserPoolConfigsPasswordPolicy
/** 
 * Describes the password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
**/
export class GetBackendAuthResponseResourceConfigUserPoolConfigsPasswordPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdditionalConstraints" })
  additionalConstraints?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=MinimumLength" })
  minimumLength: Record<string, any>;
}


// GetBackendAuthResponseResourceConfigUserPoolConfigs
/** 
 * Describes authentication configuration for the Amazon Cognito user pool, provisioned as a part of your auth resource in the Amplify project.
**/
export class GetBackendAuthResponseResourceConfigUserPoolConfigs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ForgotPassword" })
  forgotPassword?: GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPassword;

  @SpeakeasyMetadata({ data: "json, name=Mfa" })
  mfa?: GetBackendAuthResponseResourceConfigUserPoolConfigsMfa;

  @SpeakeasyMetadata({ data: "json, name=OAuth" })
  oAuth?: GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth;

  @SpeakeasyMetadata({ data: "json, name=PasswordPolicy" })
  passwordPolicy?: GetBackendAuthResponseResourceConfigUserPoolConfigsPasswordPolicy;

  @SpeakeasyMetadata({ data: "json, name=RequiredSignUpAttributes" })
  requiredSignUpAttributes: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=SignInMethod" })
  signInMethod: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=UserPoolName" })
  userPoolName: Record<string, any>;
}


// GetBackendAuthResponseResourceConfig
/** 
 * The resource configuration for authorization requests to the backend of your Amplify project.
**/
export class GetBackendAuthResponseResourceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthResources" })
  authResources: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=IdentityPoolConfigs" })
  identityPoolConfigs?: GetBackendAuthResponseResourceConfigIdentityPoolConfigs;

  @SpeakeasyMetadata({ data: "json, name=Service" })
  service: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=UserPoolConfigs" })
  userPoolConfigs: GetBackendAuthResponseResourceConfigUserPoolConfigs;
}


export class GetBackendAuthResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppId" })
  appId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=BackendEnvironmentName" })
  backendEnvironmentName?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Error" })
  error?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ResourceConfig" })
  resourceConfig?: GetBackendAuthResponseResourceConfig;

  @SpeakeasyMetadata({ data: "json, name=ResourceName" })
  resourceName?: Record<string, any>;
}
