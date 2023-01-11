import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import userentity as shared_userentity

class PatchUserRequestBodyAuthenticationMethodEnum(str, Enum):
    PASSWORD = "password"
    UNUSED_FORMER_LDAP = "unused_former_ldap"
    SSO = "sso"
    NONE = "none"
    EMAIL_SIGNUP = "email_signup"


@dataclasses.dataclass
class PatchUserRequestBodyAvatarFile:
    avatar_file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'avatar_file' }})
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    
class PatchUserRequestBodyRequire2faEnum(str, Enum):
    USE_SYSTEM_SETTING = "use_system_setting"
    ALWAYS_REQUIRE = "always_require"
    NEVER_REQUIRE = "never_require"

class PatchUserRequestBodySslRequiredEnum(str, Enum):
    USE_SYSTEM_SETTING = "use_system_setting"
    ALWAYS_REQUIRE = "always_require"
    NEVER_REQUIRE = "never_require"


@dataclasses.dataclass
class PatchUserRequestBody:
    allowed_ips: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'allowed_ips' }})
    announcements_read: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'announcements_read' }})
    attachments_permission: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'attachments_permission' }})
    authenticate_until: Optional[datetime] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'authenticate_until' }})
    authentication_method: Optional[PatchUserRequestBodyAuthenticationMethodEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'authentication_method' }})
    avatar_delete: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'avatar_delete' }})
    avatar_file: Optional[PatchUserRequestBodyAvatarFile] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    billing_permission: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'billing_permission' }})
    bypass_inactive_disable: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'bypass_inactive_disable' }})
    bypass_site_allowed_ips: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'bypass_site_allowed_ips' }})
    change_password: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'change_password' }})
    change_password_confirmation: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'change_password_confirmation' }})
    company: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'company' }})
    dav_permission: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'dav_permission' }})
    disabled: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'disabled' }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'email' }})
    ftp_permission: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'ftp_permission' }})
    grant_permission: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'grant_permission' }})
    group_id: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'group_id' }})
    group_ids: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'group_ids' }})
    header_text: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'header_text' }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'language' }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'notes' }})
    notification_daily_send_time: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'notification_daily_send_time' }})
    office_integration_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'office_integration_enabled' }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'password' }})
    password_confirmation: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'password_confirmation' }})
    password_validity_days: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'password_validity_days' }})
    receive_admin_alerts: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'receive_admin_alerts' }})
    require_2fa: Optional[PatchUserRequestBodyRequire2faEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'require_2fa' }})
    require_password_change: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'require_password_change' }})
    restapi_permission: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'restapi_permission' }})
    self_managed: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'self_managed' }})
    sftp_permission: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'sftp_permission' }})
    site_admin: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'site_admin' }})
    skip_welcome_screen: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'skip_welcome_screen' }})
    ssl_required: Optional[PatchUserRequestBodySslRequiredEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'ssl_required' }})
    sso_strategy_id: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'sso_strategy_id' }})
    subscribe_to_newsletter: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'subscribe_to_newsletter' }})
    time_zone: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'time_zone' }})
    user_root: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'user_root' }})
    username: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'username' }})
    

@dataclasses.dataclass
class PatchUserRequest:
    request: Optional[PatchUserRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PatchUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user_entity: Optional[shared_userentity.UserEntity] = dataclasses.field(default=None)
    
