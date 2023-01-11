import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class PatchOrganizationPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PatchOrganizationRequestBodyAddress:
    city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    postal_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCode') }})
    street_and_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streetAndNumber') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchOrganizationRequestBodyChannels:
    slack: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slack') }})
    telegram: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('telegram') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchOrganizationRequestBodyConfigurations:
    basic_auth_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicAuthEnabled') }})
    basic_auth_password: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicAuthPassword') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchOrganizationRequestBodyLinks:
    about: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('about') }})
    contact: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact') }})
    privacy: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    support: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('support') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchOrganizationRequestBodySupportChat:
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchOrganizationRequestBodySupport:
    business_hours: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('business_hours') }})
    chat: Optional[PatchOrganizationRequestBodySupportChat] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chat') }})
    contact_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact_number') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchOrganizationRequestBodySupportChat1:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchOrganizationRequestBodyThemeColors:
    primary: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    secondary: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondary') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchOrganizationRequestBodyTheme:
    colors: Optional[PatchOrganizationRequestBodyThemeColors] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colors') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchOrganizationRequestBody:
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    address: Optional[PatchOrganizationRequestBodyAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    channels: Optional[PatchOrganizationRequestBodyChannels] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    configurations: Optional[PatchOrganizationRequestBodyConfigurations] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurations') }})
    links: Optional[PatchOrganizationRequestBodyLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    locations: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    logo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    otp: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otp') }})
    stripe_connected_account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stripe_connected_account_id') }})
    stripe_country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stripe_country') }})
    stripe_currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stripe_currency') }})
    stripe_reserve_amount: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stripe_reserve_amount') }})
    support: Optional[PatchOrganizationRequestBodySupport] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('support') }})
    support_chat: Optional[PatchOrganizationRequestBodySupportChat1] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportChat') }})
    theme: Optional[PatchOrganizationRequestBodyTheme] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('theme') }})
    

@dataclasses.dataclass
class PatchOrganizationRequest:
    path_params: PatchOrganizationPathParams = dataclasses.field()
    request: PatchOrganizationRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchOrganizationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
