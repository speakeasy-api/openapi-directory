import dataclasses
from typing import Optional
from ..shared import districtadminsresponse as shared_districtadminsresponse
from ..shared import notfound as shared_notfound


@dataclasses.dataclass
class GetAdminsForDistrictPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAdminsForDistrictRequest:
    path_params: GetAdminsForDistrictPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAdminsForDistrictResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    district_admins_response: Optional[shared_districtadminsresponse.DistrictAdminsResponse] = dataclasses.field(default=None)
    not_found: Optional[shared_notfound.NotFound] = dataclasses.field(default=None)
    
