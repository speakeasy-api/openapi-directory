import dataclasses
from typing import Optional
from ..shared import districtresponse as shared_districtresponse
from ..shared import notfound as shared_notfound


@dataclasses.dataclass
class GetDistrictPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDistrictQueryParams:
    include: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDistrictRequest:
    path_params: GetDistrictPathParams = dataclasses.field()
    query_params: GetDistrictQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDistrictResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    district_response: Optional[shared_districtresponse.DistrictResponse] = dataclasses.field(default=None)
    not_found: Optional[shared_notfound.NotFound] = dataclasses.field(default=None)
    
