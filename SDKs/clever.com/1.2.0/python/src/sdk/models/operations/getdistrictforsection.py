import dataclasses
from typing import Optional
from ..shared import districtresponse as shared_districtresponse
from ..shared import notfound as shared_notfound


@dataclasses.dataclass
class GetDistrictForSectionPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDistrictForSectionRequest:
    path_params: GetDistrictForSectionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDistrictForSectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    district_response: Optional[shared_districtresponse.DistrictResponse] = dataclasses.field(default=None)
    not_found: Optional[shared_notfound.NotFound] = dataclasses.field(default=None)
    
