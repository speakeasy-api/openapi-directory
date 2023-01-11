import dataclasses
from typing import Optional
from ..shared import districtstatusresponses as shared_districtstatusresponses
from ..shared import notfound as shared_notfound


@dataclasses.dataclass
class GetDistrictStatusPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDistrictStatusRequest:
    path_params: GetDistrictStatusPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDistrictStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    district_status_responses: Optional[shared_districtstatusresponses.DistrictStatusResponses] = dataclasses.field(default=None)
    not_found: Optional[shared_notfound.NotFound] = dataclasses.field(default=None)
    
