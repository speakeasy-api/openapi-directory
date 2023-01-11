import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateBackendAuthPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=backendEnvironmentName" })
  backendEnvironmentName: string;
}


export class UpdateBackendAuthHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// UpdateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs
/** 
 * Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.
**/
export class UpdateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UnauthenticatedLogin" })
  unauthenticatedLogin?: Record<string, any>;
}


// UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings
/** 
 * The configuration for the email sent when an app user forgets their password.
**/
export class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EmailMessage" })
  emailMessage?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=EmailSubject" })
  emailSubject?: Record<string, any>;
}


// UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings
/** 
 * The configuration for the SMS message sent when an Amplify app user forgets their password.
**/
export class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SmsMessage" })
  smsMessage?: Record<string, any>;
}


// UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword
/** 
 * Describes the forgot password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
**/
export class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeliveryMethod" })
  deliveryMethod?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=EmailSettings" })
  emailSettings?: UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings;

  @SpeakeasyMetadata({ data: "json, name=SmsSettings" })
  smsSettings?: UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings;
}


// UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings
/** 
 * The settings of your MFA configuration for the backend of your Amplify project.
**/
export class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MfaTypes" })
  mfaTypes?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=SmsMessage" })
  smsMessage?: Record<string, any>;
}


// UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa
/** 
 * Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.
**/
export class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MFAMode" })
  mfaMode?: shared.MfaModeEnum;

  @SpeakeasyMetadata({ data: "json, name=Settings" })
  settings?: UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings;
}


// UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings
/** 
 * Describes third-party social federation configurations for allowing your users to sign in with OAuth.
**/
export class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Facebook" })
  facebook?: shared.BackendAuthSocialProviderConfig;

  @SpeakeasyMetadata({ data: "json, name=Google" })
  google?: shared.BackendAuthSocialProviderConfig;

  @SpeakeasyMetadata({ data: "json, name=LoginWithAmazon" })
  loginWithAmazon?: shared.BackendAuthSocialProviderConfig;

  @SpeakeasyMetadata({ data: "json, name=SignInWithApple" })
  signInWithApple?: shared.BackendAuthAppleProviderConfig;
}


// UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth
/** 
 * Describes the OAuth policy and rules for your Amazon Cognito user pool, configured as a part of your Amplify project.
**/
export class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainPrefix" })
  domainPrefix?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=OAuthGrantType" })
  oAuthGrantType?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=OAuthScopes" })
  oAuthScopes?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=RedirectSignInURIs" })
  redirectSignInURIs?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=RedirectSignOutURIs" })
  redirectSignOutURIs?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=SocialProviderSettings" })
  socialProviderSettings?: UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings;
}


// UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy
/** 
 * Describes the password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
**/
export class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdditionalConstraints" })
  additionalConstraints?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=MinimumLength" })
  minimumLength?: Record<string, any>;
}


// UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs
/** 
 * Describes the authentication configuration for the Amazon Cognito user pool, provisioned as a part of your auth resource in the Amplify project.
**/
export class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ForgotPassword" })
  forgotPassword?: UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword;

  @SpeakeasyMetadata({ data: "json, name=Mfa" })
  mfa?: UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa;

  @SpeakeasyMetadata({ data: "json, name=OAuth" })
  oAuth?: UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth;

  @SpeakeasyMetadata({ data: "json, name=PasswordPolicy" })
  passwordPolicy?: UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy;
}


// UpdateBackendAuthRequestBodyResourceConfig
/** 
 * Defines the resource configuration when updating an authentication resource in your Amplify project.
**/
export class UpdateBackendAuthRequestBodyResourceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthResources" })
  authResources?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=IdentityPoolConfigs" })
  identityPoolConfigs?: UpdateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs;

  @SpeakeasyMetadata({ data: "json, name=Service" })
  service?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=UserPoolConfigs" })
  userPoolConfigs?: UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs;
}


export class UpdateBackendAuthRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceConfig" })
  resourceConfig: UpdateBackendAuthRequestBodyResourceConfig;

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName: string;
}


export class UpdateBackendAuthRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateBackendAuthPathParams;

  @SpeakeasyMetadata()
  headers: UpdateBackendAuthHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateBackendAuthRequestBody;
}


export class UpdateBackendAuthResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  gatewayTimeoutException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  updateBackendAuthResponse?: shared.UpdateBackendAuthResponse;
}
