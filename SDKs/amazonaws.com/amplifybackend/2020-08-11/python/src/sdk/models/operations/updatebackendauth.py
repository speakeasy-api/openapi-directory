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
from ..shared import updatebackendauthresponse as shared_updatebackendauthresponse


@dataclasses.dataclass
class UpdateBackendAuthPathParams:
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    backend_environment_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'backendEnvironmentName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateBackendAuthHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs:
    r"""UpdateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs
    Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.
    """
    
    unauthenticated_login: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnauthenticatedLogin') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings:
    r"""UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings
    The configuration for the email sent when an app user forgets their password.
    """
    
    email_message: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailMessage') }})
    email_subject: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailSubject') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings:
    r"""UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings
    The configuration for the SMS message sent when an Amplify app user forgets their password.
    """
    
    sms_message: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SmsMessage') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword:
    r"""UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword
    Describes the forgot password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
    """
    
    delivery_method: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryMethod') }})
    email_settings: Optional[UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailSettings') }})
    sms_settings: Optional[UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SmsSettings') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings:
    r"""UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings
    The settings of your MFA configuration for the backend of your Amplify project.
    """
    
    mfa_types: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MfaTypes') }})
    sms_message: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SmsMessage') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa:
    r"""UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa
    Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.
    """
    
    mfa_mode: Optional[shared_mfamode_enum.MfaModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MFAMode') }})
    settings: Optional[UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Settings') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings:
    r"""UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings
    Describes third-party social federation configurations for allowing your users to sign in with OAuth.
    """
    
    facebook: Optional[shared_backendauthsocialproviderconfig.BackendAuthSocialProviderConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Facebook') }})
    google: Optional[shared_backendauthsocialproviderconfig.BackendAuthSocialProviderConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Google') }})
    login_with_amazon: Optional[shared_backendauthsocialproviderconfig.BackendAuthSocialProviderConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoginWithAmazon') }})
    sign_in_with_apple: Optional[shared_backendauthappleproviderconfig.BackendAuthAppleProviderConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SignInWithApple') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth:
    r"""UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth
    Describes the OAuth policy and rules for your Amazon Cognito user pool, configured as a part of your Amplify project.
    """
    
    domain_prefix: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainPrefix') }})
    o_auth_grant_type: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OAuthGrantType') }})
    o_auth_scopes: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OAuthScopes') }})
    redirect_sign_in_ur_is: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedirectSignInURIs') }})
    redirect_sign_out_ur_is: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedirectSignOutURIs') }})
    social_provider_settings: Optional[UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SocialProviderSettings') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy:
    r"""UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy
    Describes the password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
    """
    
    additional_constraints: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalConstraints') }})
    minimum_length: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumLength') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs:
    r"""UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs
    Describes the authentication configuration for the Amazon Cognito user pool, provisioned as a part of your auth resource in the Amplify project.
    """
    
    forgot_password: Optional[UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ForgotPassword') }})
    mfa: Optional[UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mfa') }})
    o_auth: Optional[UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OAuth') }})
    password_policy: Optional[UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PasswordPolicy') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateBackendAuthRequestBodyResourceConfig:
    r"""UpdateBackendAuthRequestBodyResourceConfig
    Defines the resource configuration when updating an authentication resource in your Amplify project.
    """
    
    auth_resources: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthResources') }})
    identity_pool_configs: Optional[UpdateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityPoolConfigs') }})
    service: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Service') }})
    user_pool_configs: Optional[UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolConfigs') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateBackendAuthRequestBody:
    resource_config: UpdateBackendAuthRequestBodyResourceConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceConfig') }})
    resource_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceName') }})
    

@dataclasses.dataclass
class UpdateBackendAuthRequest:
    headers: UpdateBackendAuthHeaders = dataclasses.field()
    path_params: UpdateBackendAuthPathParams = dataclasses.field()
    request: UpdateBackendAuthRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateBackendAuthResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    gateway_timeout_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    update_backend_auth_response: Optional[shared_updatebackendauthresponse.UpdateBackendAuthResponse] = dataclasses.field(default=None)
    
