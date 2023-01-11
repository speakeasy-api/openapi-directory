import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetAPIV1DonationsCarbonStatsQueryParams:
    id: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAPIV1DonationsCarbonStatsSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetAPIV1DonationsCarbonStatsRequest:
    query_params: GetAPIV1DonationsCarbonStatsQueryParams = dataclasses.field()
    security: GetAPIV1DonationsCarbonStatsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAPIV1DonationsCarbonStatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
