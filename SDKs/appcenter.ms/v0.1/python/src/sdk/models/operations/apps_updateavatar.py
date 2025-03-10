"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional


@dataclasses.dataclass
class AppsUpdateAvatarSecurity:
    
    api_token: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header', 'field_name': 'X-API-Token' }})  
    

@dataclasses.dataclass
class AppsUpdateAvatarRequestBodyAvatar:
    
    avatar: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'avatar' }})  
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})  
    

@dataclasses.dataclass
class AppsUpdateAvatarRequestBody:
    
    avatar: Optional[AppsUpdateAvatarRequestBodyAvatar] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    r"""The image for an app avatar to upload."""  
    

@dataclasses.dataclass
class AppsUpdateAvatarRequest:
    
    app_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'app_name', 'style': 'simple', 'explode': False }})
    r"""The name of the application"""  
    owner_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner_name', 'style': 'simple', 'explode': False }})
    r"""The name of the owner"""  
    request_body: Optional[AppsUpdateAvatarRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})  
    
class AppsUpdateAvatarDefaultApplicationJSONErrorCodeEnum(str, Enum):
    BAD_REQUEST = 'BadRequest'
    CONFLICT = 'Conflict'
    NOT_ACCEPTABLE = 'NotAcceptable'
    NOT_FOUND = 'NotFound'
    INTERNAL_SERVER_ERROR = 'InternalServerError'
    UNAUTHORIZED = 'Unauthorized'
    TOO_MANY_REQUESTS = 'TooManyRequests'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class AppsUpdateAvatarDefaultApplicationJSONError:
    
    code: AppsUpdateAvatarDefaultApplicationJSONErrorCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('code') }})  
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('message') }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class AppsUpdateAvatarDefaultApplicationJSON:
    r"""Error"""
    
    error: AppsUpdateAvatarDefaultApplicationJSONError = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('error') }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class AppsUpdateAvatar200ApplicationJSONAzureSubscription:
    
    subscription_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('subscription_id') }})
    r"""The azure subscription id"""  
    subscription_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('subscription_name') }})
    r"""The name of the azure subscription"""  
    tenant_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('tenant_id') }})
    r"""The tenant id of the azure subscription belongs to"""  
    is_billable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('is_billable'), 'exclude': lambda f: f is None }})
    r"""If the subscription can be used for billing"""  
    is_billing: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('is_billing'), 'exclude': lambda f: f is None }})
    r"""If the subscription is used for billing"""  
    is_microsoft_internal: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('is_microsoft_internal'), 'exclude': lambda f: f is None }})
    r"""If the subscription is internal Microsoft subscription"""  
    
class AppsUpdateAvatar200ApplicationJSONMemberPermissionsEnum(str, Enum):
    MANAGER = 'manager'
    DEVELOPER = 'developer'
    VIEWER = 'viewer'
    TESTER = 'tester'

class AppsUpdateAvatar200ApplicationJSONOriginEnum(str, Enum):
    r"""The creation origin of this app"""
    APPCENTER = 'appcenter'
    HOCKEYAPP = 'hockeyapp'
    CODEPUSH = 'codepush'

class AppsUpdateAvatar200ApplicationJSONOsEnum(str, Enum):
    r"""The OS the app will be running on"""
    ANDROID = 'Android'
    I_OS = 'iOS'
    MAC_OS = 'macOS'
    TIZEN = 'Tizen'
    TV_OS = 'tvOS'
    WINDOWS = 'Windows'
    LINUX = 'Linux'
    CUSTOM = 'Custom'

class AppsUpdateAvatar200ApplicationJSONOwnerTypeEnum(str, Enum):
    r"""The owner type. Can either be 'org' or 'user'"""
    ORG = 'org'
    USER = 'user'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class AppsUpdateAvatar200ApplicationJSONOwner:
    r"""The information about the app's owner"""
    
    display_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('display_name') }})
    r"""The owner's display name"""  
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id') }})
    r"""The unique id (UUID) of the owner"""  
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name') }})
    r"""The unique name that used to identify the owner"""  
    type: AppsUpdateAvatar200ApplicationJSONOwnerTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('type') }})
    r"""The owner type. Can either be 'org' or 'user'"""  
    avatar_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('avatar_url'), 'exclude': lambda f: f is None }})
    r"""The avatar URL of the owner"""  
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('email'), 'exclude': lambda f: f is None }})
    r"""The owner's email address"""  
    
class AppsUpdateAvatar200ApplicationJSONPlatformEnum(str, Enum):
    r"""The platform of the app"""
    JAVA = 'Java'
    OBJECTIVE_C_SWIFT = 'Objective-C-Swift'
    UWP = 'UWP'
    CORDOVA = 'Cordova'
    REACT_NATIVE = 'React-Native'
    UNITY = 'Unity'
    ELECTRON = 'Electron'
    XAMARIN = 'Xamarin'
    WPF = 'WPF'
    WIN_FORMS = 'WinForms'
    UNKNOWN = 'Unknown'
    CUSTOM = 'Custom'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class AppsUpdateAvatar200ApplicationJSON:
    r"""Success"""
    
    app_secret: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('app_secret') }})
    r"""A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics"""  
    display_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('display_name') }})
    r"""The display name of the app"""  
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id') }})
    r"""The unique ID (UUID) of the app"""  
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name') }})
    r"""The name of the app used in URLs"""  
    origin: AppsUpdateAvatar200ApplicationJSONOriginEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('origin') }})
    r"""The creation origin of this app"""  
    os: AppsUpdateAvatar200ApplicationJSONOsEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('os') }})
    r"""The OS the app will be running on"""  
    owner: AppsUpdateAvatar200ApplicationJSONOwner = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('owner') }})
    r"""The information about the app's owner"""  
    platform: AppsUpdateAvatar200ApplicationJSONPlatformEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('platform') }})
    r"""The platform of the app"""  
    azure_subscription: Optional[AppsUpdateAvatar200ApplicationJSONAzureSubscription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('azure_subscription'), 'exclude': lambda f: f is None }})  
    created_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('created_at'), 'exclude': lambda f: f is None }})
    r"""The created date of this app"""  
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('description'), 'exclude': lambda f: f is None }})
    r"""The description of the app"""  
    icon_source: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('icon_source'), 'exclude': lambda f: f is None }})
    r"""The string representation of the source of the app's icon"""  
    icon_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('icon_url'), 'exclude': lambda f: f is None }})
    r"""The string representation of the URL pointing to the app's icon"""  
    member_permissions: Optional[list[AppsUpdateAvatar200ApplicationJSONMemberPermissionsEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('member_permissions'), 'exclude': lambda f: f is None }})
    r"""The permissions of the calling user"""  
    release_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('release_type'), 'exclude': lambda f: f is None }})
    r"""A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase"""  
    updated_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('updated_at'), 'exclude': lambda f: f is None }})
    r"""The last updated date of this app"""  
    

@dataclasses.dataclass
class AppsUpdateAvatarResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    apps_update_avatar_200_application_json_object: Optional[AppsUpdateAvatar200ApplicationJSON] = dataclasses.field(default=None)
    r"""Success"""  
    apps_update_avatar_default_application_json_object: Optional[AppsUpdateAvatarDefaultApplicationJSON] = dataclasses.field(default=None)
    r"""Error"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    