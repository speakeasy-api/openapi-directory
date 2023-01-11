import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import onevehicles_1percent_7bvehicleidpercent_7d_get_responses_200_content_application_1json_schema as shared_onevehicles_1percent_7bvehicleidpercent_7d_get_responses_200_content_application_1json_schema


@dataclasses.dataclass
class GetVehiclesQueryParams:
    field_: Optional[list[Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'field[]', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetVehiclesSecurity:
    user_access_token: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    user_access_token1: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    user_access_token2: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    user_access_token3: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    user_access_token4: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    user_access_token5: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetVehiclesRequest:
    query_params: GetVehiclesQueryParams = dataclasses.field()
    security: GetVehiclesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetVehiclesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    onevehicles_1_percent_7_bvehicle_id_percent_7_d_get_responses_200_content_application_1json_schemas: Optional[list[shared_onevehicles_1percent_7bvehicleidpercent_7d_get_responses_200_content_application_1json_schema.Onevehicles1Percent7BvehicleIDPercent7DGetResponses200ContentApplication1jsonSchema]] = dataclasses.field(default=None)
    
