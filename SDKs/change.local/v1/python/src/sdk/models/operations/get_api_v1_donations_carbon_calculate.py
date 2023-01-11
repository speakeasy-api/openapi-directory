import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security

class GetAPIV1DonationsCarbonCalculateTransportationMethodEnum(str, Enum):
    AIR = "air"
    TRUCK = "truck"
    RAIL = "rail"
    SEA = "sea"


@dataclasses.dataclass
class GetAPIV1DonationsCarbonCalculateQueryParams:
    weight_lb: float = dataclasses.field(metadata={'query_param': { 'field_name': 'weight_lb', 'style': 'form', 'explode': True }})
    destination_address: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'destination_address', 'style': 'form', 'explode': True }})
    distance_mi: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'distance_mi', 'style': 'form', 'explode': True }})
    origin_address: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'origin_address', 'style': 'form', 'explode': True }})
    transportation_method: Optional[GetAPIV1DonationsCarbonCalculateTransportationMethodEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'transportation_method', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAPIV1DonationsCarbonCalculateSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetAPIV1DonationsCarbonCalculateRequest:
    query_params: GetAPIV1DonationsCarbonCalculateQueryParams = dataclasses.field()
    security: GetAPIV1DonationsCarbonCalculateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAPIV1DonationsCarbonCalculateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
