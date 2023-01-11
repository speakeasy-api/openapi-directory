import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateBackendAuthPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;
}


export class CreateBackendAuthHeaders extends SpeakeasyBase {
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


// CreateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs
/** 
 * Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.
**/
export class CreateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdentityPoolName" })
  identityPoolName: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=UnauthenticatedLogin" })
  unauthenticatedLogin: Record<string, any>;
}


// CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings
/** 
 * The configuration for the email sent when an app user forgets their password.
**/
export class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EmailMessage" })
  emailMessage?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=EmailSubject" })
  emailSubject?: Record<string, any>;
}


// CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings
/** 
 * The configuration for the SMS message sent when an app user forgets their password.
**/
export class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SmsMessage" })
  smsMessage?: Record<string, any>;
}


// CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword
/** 
 * Describes the forgotten password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
**/
export class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeliveryMethod" })
  deliveryMethod: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=EmailSettings" })
  emailSettings?: CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings;

  @SpeakeasyMetadata({ data: "json, name=SmsSettings" })
  smsSettings?: CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings;
}


// CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings
/** 
 * Describes the configuration settings and methods for your Amplify app users to use MFA.
**/
export class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MfaTypes" })
  mfaTypes?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=SmsMessage" })
  smsMessage?: Record<string, any>;
}


// CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa
/** 
 * Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.
**/
export class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MFAMode" })
  mfaMode: shared.MfaModeEnum;

  @SpeakeasyMetadata({ data: "json, name=Settings" })
  settings?: CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings;
}


// CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings
/** 
 * The settings for using social providers to access your Amplify app.
**/
export class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Facebook" })
  facebook?: shared.BackendAuthSocialProviderConfig;

  @SpeakeasyMetadata({ data: "json, name=Google" })
  google?: shared.BackendAuthSocialProviderConfig;

  @SpeakeasyMetadata({ data: "json, name=LoginWithAmazon" })
  loginWithAmazon?: shared.BackendAuthSocialProviderConfig;

  @SpeakeasyMetadata({ data: "json, name=SignInWithApple" })
  signInWithApple?: shared.BackendAuthAppleProviderConfig;
}


// CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth
/** 
 * Describes the OAuth policy and rules for your Amazon Cognito user pool, configured as a part of your Amplify project.
**/
export class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth extends SpeakeasyBase {
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
  socialProviderSettings?: CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings;
}


// CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy
/** 
 * Describes the password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
**/
export class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdditionalConstraints" })
  additionalConstraints?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=MinimumLength" })
  minimumLength: Record<string, any>;
}


// CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs
/** 
 * Describes authentication configuration for the Amazon Cognito user pool, provisioned as a part of your auth resource in the Amplify project.
**/
export class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ForgotPassword" })
  forgotPassword?: CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword;

  @SpeakeasyMetadata({ data: "json, name=Mfa" })
  mfa?: CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa;

  @SpeakeasyMetadata({ data: "json, name=OAuth" })
  oAuth?: CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth;

  @SpeakeasyMetadata({ data: "json, name=PasswordPolicy" })
  passwordPolicy?: CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy;

  @SpeakeasyMetadata({ data: "json, name=RequiredSignUpAttributes" })
  requiredSignUpAttributes: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=SignInMethod" })
  signInMethod: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=UserPoolName" })
  userPoolName: Record<string, any>;
}


// CreateBackendAuthRequestBodyResourceConfig
/** 
 * Defines the resource configuration when creating an auth resource in your Amplify project.
**/
export class CreateBackendAuthRequestBodyResourceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthResources" })
  authResources?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=IdentityPoolConfigs" })
  identityPoolConfigs?: CreateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs;

  @SpeakeasyMetadata({ data: "json, name=Service" })
  service?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=UserPoolConfigs" })
  userPoolConfigs?: CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs;
}


export class CreateBackendAuthRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backendEnvironmentName" })
  backendEnvironmentName: string;

  @SpeakeasyMetadata({ data: "json, name=resourceConfig" })
  resourceConfig: CreateBackendAuthRequestBodyResourceConfig;

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName: string;
}


export class CreateBackendAuthRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateBackendAuthPathParams;

  @SpeakeasyMetadata()
  headers: CreateBackendAuthHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateBackendAuthRequestBody;
}


export class CreateBackendAuthResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createBackendAuthResponse?: shared.CreateBackendAuthResponse;

  @SpeakeasyMetadata()
  gatewayTimeoutException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
