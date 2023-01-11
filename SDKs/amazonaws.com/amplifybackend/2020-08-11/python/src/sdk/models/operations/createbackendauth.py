import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mfamode_enum as shared_mfamode_enum
from ..shared import backendauthsocialproviderconfig as shared_backendauthsocialproviderconfig
from ..shared import backendauthappleproviderconfig as shared_backendauthappleproviderconfig
from ..shared import createbackendauthresponse as shared_createbackendauthresponse


@dataclasses.dataclass
class CreateBackendAuthPathParams:
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateBackendAuthHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs:
    r"""CreateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs
    Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.
    """
    
    identity_pool_name: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityPoolName') }})
    unauthenticated_login: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnauthenticatedLogin') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings:
    r"""CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings
    The configuration for the email sent when an app user forgets their password.
    """
    
    email_message: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailMessage') }})
    email_subject: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailSubject') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings:
    r"""CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings
    The configuration for the SMS message sent when an app user forgets their password.
    """
    
    sms_message: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SmsMessage') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword:
    r"""CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword
    Describes the forgotten password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
    """
    
    delivery_method: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryMethod') }})
    email_settings: Optional[CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailSettings') }})
    sms_settings: Optional[CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SmsSettings') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings:
    r"""CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings
    Describes the configuration settings and methods for your Amplify app users to use MFA.
    """
    
    mfa_types: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MfaTypes') }})
    sms_message: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SmsMessage') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa:
    r"""CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa
    Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.
    """
    
    mfa_mode: shared_mfamode_enum.MfaModeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MFAMode') }})
    settings: Optional[CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Settings') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings:
    r"""CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings
    The settings for using social providers to access your Amplify app.
    """
    
    facebook: Optional[shared_backendauthsocialproviderconfig.BackendAuthSocialProviderConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Facebook') }})
    google: Optional[shared_backendauthsocialproviderconfig.BackendAuthSocialProviderConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Google') }})
    login_with_amazon: Optional[shared_backendauthsocialproviderconfig.BackendAuthSocialProviderConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoginWithAmazon') }})
    sign_in_with_apple: Optional[shared_backendauthappleproviderconfig.BackendAuthAppleProviderConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SignInWithApple') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth:
    r"""CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth
    Describes the OAuth policy and rules for your Amazon Cognito user pool, configured as a part of your Amplify project.
    """
    
    o_auth_grant_type: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OAuthGrantType') }})
    o_auth_scopes: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OAuthScopes') }})
    redirect_sign_in_ur_is: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedirectSignInURIs') }})
    redirect_sign_out_ur_is: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedirectSignOutURIs') }})
    domain_prefix: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainPrefix') }})
    social_provider_settings: Optional[CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SocialProviderSettings') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy:
    r"""CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy
    Describes the password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
    """
    
    minimum_length: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumLength') }})
    additional_constraints: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalConstraints') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs:
    r"""CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs
    Describes authentication configuration for the Amazon Cognito user pool, provisioned as a part of your auth resource in the Amplify project.
    """
    
    required_sign_up_attributes: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequiredSignUpAttributes') }})
    sign_in_method: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SignInMethod') }})
    user_pool_name: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolName') }})
    forgot_password: Optional[CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ForgotPassword') }})
    mfa: Optional[CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mfa') }})
    o_auth: Optional[CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OAuth') }})
    password_policy: Optional[CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PasswordPolicy') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateBackendAuthRequestBodyResourceConfig:
    r"""CreateBackendAuthRequestBodyResourceConfig
    Defines the resource configuration when creating an auth resource in your Amplify project.
    """
    
    auth_resources: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthResources') }})
    identity_pool_configs: Optional[CreateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityPoolConfigs') }})
    service: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Service') }})
    user_pool_configs: Optional[CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolConfigs') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateBackendAuthRequestBody:
    backend_environment_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('backendEnvironmentName') }})
    resource_config: CreateBackendAuthRequestBodyResourceConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceConfig') }})
    resource_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceName') }})
    

@dataclasses.dataclass
class CreateBackendAuthRequest:
    headers: CreateBackendAuthHeaders = dataclasses.field()
    path_params: CreateBackendAuthPathParams = dataclasses.field()
    request: CreateBackendAuthRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateBackendAuthResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    create_backend_auth_response: Optional[shared_createbackendauthresponse.CreateBackendAuthResponse] = dataclasses.field(default=None)
    gateway_timeout_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
