import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import onechargers_1percent_7bchargeridpercent_7d_get_responses_200_content_application_1json_schema as shared_onechargers_1percent_7bchargeridpercent_7d_get_responses_200_content_application_1json_schema

class GetChargersFieldEnum(str, Enum):
    CHARGE_STATE = "chargeState"
    LOCATION = "location"


@dataclasses.dataclass
class GetChargersQueryParams:
    field_: Optional[list[GetChargersFieldEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'field[]', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetChargersSecurity:
    user_access_token: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    user_access_token1: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    user_access_token2: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetChargersRequest:
    query_params: GetChargersQueryParams = dataclasses.field()
    security: GetChargersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetChargersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    onechargers_1_percent_7_bcharger_id_percent_7_d_get_responses_200_content_application_1json_schemas: Optional[list[shared_onechargers_1percent_7bchargeridpercent_7d_get_responses_200_content_application_1json_schema.Onechargers1Percent7BchargerIDPercent7DGetResponses200ContentApplication1jsonSchema]] = dataclasses.field(default=None)
    
