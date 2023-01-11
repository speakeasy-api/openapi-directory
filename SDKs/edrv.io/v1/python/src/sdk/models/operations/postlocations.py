import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostLocationsRequestBodyAddress:
    city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    postal_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCode') }})
    street_and_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streetAndNumber') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLocationsRequestBodyCoordinates:
    latitude: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLocationsRequestBody:
    address: PostLocationsRequestBodyAddress = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    coordinates: PostLocationsRequestBodyCoordinates = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('coordinates') }})
    operator_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatorName') }})
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    chargestations: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargestations') }})
    

@dataclass_json
@dataclasses.dataclass
class PostLocations200ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    ok: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    result: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class PostLocationsRequest:
    request: PostLocationsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostLocationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_locations_200_application_json_object: Optional[PostLocations200ApplicationJSON] = dataclasses.field(default=None)
    
