import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import onecharging_locations_post_requestbody_content_application_1json_schema as shared_onecharging_locations_post_requestbody_content_application_1json_schema


@dataclass_json
@dataclasses.dataclass
class PostCharginglocationsRequestBodyInput:
    latitude: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclasses.dataclass
class PostCharginglocationsSecurity:
    user_access_token: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    user_access_token1: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PostCharginglocationsRequest:
    security: PostCharginglocationsSecurity = dataclasses.field()
    request: Optional[PostCharginglocationsRequestBodyInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCharginglocationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    onecharging_locations_post_request_body_content_application_1json_schema: Optional[shared_onecharging_locations_post_requestbody_content_application_1json_schema.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema] = dataclasses.field(default=None)
    
