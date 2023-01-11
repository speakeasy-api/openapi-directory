import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationOsEnum(str, Enum):
    ANDROID = "Android"
    IOS = "IOS"
    OTHER = "OTHER"

class OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDeviceNameEnum(str, Enum):
    I_PHONE = "iPhone"
    ANDROID = "Android"
    OTHER = "Other"

class OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationStatusEnum(str, Enum):
    LIVE = "LIVE"
    CLOSED = "CLOSED"
    LOCKED = "LOCKED"
    SMS_SENT = "SMS_SENT"


@dataclass_json
@dataclasses.dataclass
class OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplication:
    os: Optional[OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationOsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OS') }})
    business_user_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessUserId') }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientID') }})
    device_name: Optional[OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDeviceNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceName') }})
    device_os_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceOSVersion') }})
    mobile_application_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileApplicationId') }})
    status: Optional[OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
class OneusersGetResponses200ContentApplication1jsonSchemaItemsRoleEnum(str, Enum):
    ADMIN = "ADMIN"
    FULL_USER = "FULL_USER"
    READ_ONLY = "READ_ONLY"
    CARD_ONLY = "CARD_ONLY"

class OneusersGetResponses200ContentApplication1jsonSchemaItemsStatusEnum(str, Enum):
    LIVE = "LIVE"
    CLOSED = "CLOSED"
    FROZEN = "FROZEN"
    INVITE_SENT = "INVITE_SENT"
    SMS_CODE_SENT = "SMS_CODE_SENT"


@dataclass_json
@dataclasses.dataclass
class OneusersGetResponses200ContentApplication1jsonSchemaItems:
    email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailAddress') }})
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    lastlogin: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastlogin') }})
    mobile_application_details: Optional[OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplication] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileApplicationDetails') }})
    mobile_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileNumber') }})
    role: Optional[OneusersGetResponses200ContentApplication1jsonSchemaItemsRoleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    status: Optional[OneusersGetResponses200ContentApplication1jsonSchemaItemsStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    user_cvl: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userCvl') }})
    
