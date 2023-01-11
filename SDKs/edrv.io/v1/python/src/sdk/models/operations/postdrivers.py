import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostDriversRequestBodyAddress:
    city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    postal_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCode') }})
    street_and_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streetAndNumber') }})
    

@dataclass_json
@dataclasses.dataclass
class PostDriversRequestBodyPhone:
    home: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('home') }})
    mobile: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobile') }})
    work: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('work') }})
    
class PostDriversRequestBodySourceEnum(str, Enum):
    PHYSICAL = "physical"
    SLACK = "slack"
    TELEGRAM = "telegram"
    SMS = "sms"


@dataclass_json
@dataclasses.dataclass
class PostDriversRequestBody:
    firstname: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstname') }})
    lastname: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastname') }})
    source: PostDriversRequestBodySourceEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    address: Optional[PostDriversRequestBodyAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    phone: Optional[PostDriversRequestBodyPhone] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    

@dataclass_json
@dataclasses.dataclass
class PostDrivers200ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    ok: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    result: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class PostDriversRequest:
    request: PostDriversRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostDriversResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_drivers_200_application_json_object: Optional[PostDrivers200ApplicationJSON] = dataclasses.field(default=None)
    
