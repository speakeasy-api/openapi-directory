import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mfamode_enum as shared_mfamode_enum
from ..shared import backendauthsocialproviderconfig as shared_backendauthsocialproviderconfig
from ..shared import backendauthappleproviderconfig as shared_backendauthappleproviderconfig


@dataclass_json
@dataclasses.dataclass
class GetBackendAuthResponseResourceConfigIdentityPoolConfigs:
    r"""GetBackendAuthResponseResourceConfigIdentityPoolConfigs
    Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.
    """
    
    identity_pool_name: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityPoolName') }})
    unauthenticated_login: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnauthenticatedLogin') }})
    

@dataclass_json
@dataclasses.dataclass
class GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordEmailSettings:
    r"""GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordEmailSettings
    The configuration for the email sent when an app user forgets their password.
    """
    
    email_message: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailMessage') }})
    email_subject: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailSubject') }})
    

@dataclass_json
@dataclasses.dataclass
class GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordSmsSettings:
    r"""GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordSmsSettings
    The configuration for the SMS message sent when an app user forgets their password.
    """
    
    sms_message: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SmsMessage') }})
    

@dataclass_json
@dataclasses.dataclass
class GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPassword:
    r"""GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPassword
    Describes the forgotten password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
    """
    
    delivery_method: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryMethod') }})
    email_settings: Optional[GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordEmailSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailSettings') }})
    sms_settings: Optional[GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordSmsSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SmsSettings') }})
    

@dataclass_json
@dataclasses.dataclass
class GetBackendAuthResponseResourceConfigUserPoolConfigsMfaSettings:
    r"""GetBackendAuthResponseResourceConfigUserPoolConfigsMfaSettings
    Describes the configuration settings and methods for your Amplify app users to use MFA.
    """
    
    mfa_types: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MfaTypes') }})
    sms_message: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SmsMessage') }})
    

@dataclass_json
@dataclasses.dataclass
class GetBackendAuthResponseResourceConfigUserPoolConfigsMfa:
    r"""GetBackendAuthResponseResourceConfigUserPoolConfigsMfa
    Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.
    """
    
    mfa_mode: shared_mfamode_enum.MfaModeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MFAMode') }})
    settings: Optional[GetBackendAuthResponseResourceConfigUserPoolConfigsMfaSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Settings') }})
    

@dataclass_json
@dataclasses.dataclass
class GetBackendAuthResponseResourceConfigUserPoolConfigsOAuthSocialProviderSettings:
    r"""GetBackendAuthResponseResourceConfigUserPoolConfigsOAuthSocialProviderSettings
    The settings for using social providers to access your Amplify app.
    """
    
    facebook: Optional[shared_backendauthsocialproviderconfig.BackendAuthSocialProviderConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Facebook') }})
    google: Optional[shared_backendauthsocialproviderconfig.BackendAuthSocialProviderConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Google') }})
    login_with_amazon: Optional[shared_backendauthsocialproviderconfig.BackendAuthSocialProviderConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoginWithAmazon') }})
    sign_in_with_apple: Optional[shared_backendauthappleproviderconfig.BackendAuthAppleProviderConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SignInWithApple') }})
    

@dataclass_json
@dataclasses.dataclass
class GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth:
    r"""GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth
    Describes the OAuth policy and rules for your Amazon Cognito user pool, configured as a part of your Amplify project.
    """
    
    o_auth_grant_type: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OAuthGrantType') }})
    o_auth_scopes: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OAuthScopes') }})
    redirect_sign_in_ur_is: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedirectSignInURIs') }})
    redirect_sign_out_ur_is: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedirectSignOutURIs') }})
    domain_prefix: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainPrefix') }})
    social_provider_settings: Optional[GetBackendAuthResponseResourceConfigUserPoolConfigsOAuthSocialProviderSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SocialProviderSettings') }})
    

@dataclass_json
@dataclasses.dataclass
class GetBackendAuthResponseResourceConfigUserPoolConfigsPasswordPolicy:
    r"""GetBackendAuthResponseResourceConfigUserPoolConfigsPasswordPolicy
    Describes the password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
    """
    
    minimum_length: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumLength') }})
    additional_constraints: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalConstraints') }})
    

@dataclass_json
@dataclasses.dataclass
class GetBackendAuthResponseResourceConfigUserPoolConfigs:
    r"""GetBackendAuthResponseResourceConfigUserPoolConfigs
    Describes authentication configuration for the Amazon Cognito user pool, provisioned as a part of your auth resource in the Amplify project.
    """
    
    required_sign_up_attributes: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequiredSignUpAttributes') }})
    sign_in_method: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SignInMethod') }})
    user_pool_name: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolName') }})
    forgot_password: Optional[GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPassword] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ForgotPassword') }})
    mfa: Optional[GetBackendAuthResponseResourceConfigUserPoolConfigsMfa] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mfa') }})
    o_auth: Optional[GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OAuth') }})
    password_policy: Optional[GetBackendAuthResponseResourceConfigUserPoolConfigsPasswordPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PasswordPolicy') }})
    

@dataclass_json
@dataclasses.dataclass
class GetBackendAuthResponseResourceConfig:
    r"""GetBackendAuthResponseResourceConfig
    The resource configuration for authorization requests to the backend of your Amplify project.
    """
    
    auth_resources: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthResources') }})
    service: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Service') }})
    user_pool_configs: GetBackendAuthResponseResourceConfigUserPoolConfigs = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolConfigs') }})
    identity_pool_configs: Optional[GetBackendAuthResponseResourceConfigIdentityPoolConfigs] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityPoolConfigs') }})
    

@dataclass_json
@dataclasses.dataclass
class GetBackendAuthResponse:
    app_id: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppId') }})
    backend_environment_name: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackendEnvironmentName') }})
    error: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    resource_config: Optional[GetBackendAuthResponseResourceConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceConfig') }})
    resource_name: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceName') }})
    
