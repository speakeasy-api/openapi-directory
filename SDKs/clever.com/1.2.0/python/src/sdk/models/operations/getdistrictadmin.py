import dataclasses
from typing import Optional
from ..shared import districtadminresponse as shared_districtadminresponse
from ..shared import notfound as shared_notfound


@dataclasses.dataclass
class GetDistrictAdminPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDistrictAdminRequest:
    path_params: GetDistrictAdminPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDistrictAdminResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    district_admin_response: Optional[shared_districtadminresponse.DistrictAdminResponse] = dataclasses.field(default=None)
    not_found: Optional[shared_notfound.NotFound] = dataclasses.field(default=None)
    
