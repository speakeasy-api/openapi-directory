import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import onecharging_locations_post_requestbody_content_application_1json_schema as shared_onecharging_locations_post_requestbody_content_application_1json_schema
from ..shared import onecharging_locations_post_requestbody_content_application_1json_schema as shared_onecharging_locations_post_requestbody_content_application_1json_schema


@dataclasses.dataclass
class PutCharginglocationsCharginglocationidPathParams:
    charging_location_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'chargingLocationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutCharginglocationsCharginglocationidSecurity:
    user_access_token: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    user_access_token1: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PutCharginglocationsCharginglocationidRequest:
    path_params: PutCharginglocationsCharginglocationidPathParams = dataclasses.field()
    security: PutCharginglocationsCharginglocationidSecurity = dataclasses.field()
    request: Optional[shared_onecharging_locations_post_requestbody_content_application_1json_schema.OnechargingLocationsPostRequestBodyContentApplication1jsonSchemaInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutCharginglocationsCharginglocationidResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    onecharging_locations_post_request_body_content_application_1json_schema: Optional[shared_onecharging_locations_post_requestbody_content_application_1json_schema.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema] = dataclasses.field(default=None)
    
