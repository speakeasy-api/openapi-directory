import dataclasses
from typing import Optional
from ..shared import districtresponse as shared_districtresponse
from ..shared import notfound as shared_notfound


@dataclasses.dataclass
class GetDistrictForStudentContactPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDistrictForStudentContactRequest:
    path_params: GetDistrictForStudentContactPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDistrictForStudentContactResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    district_response: Optional[shared_districtresponse.DistrictResponse] = dataclasses.field(default=None)
    not_found: Optional[shared_notfound.NotFound] = dataclasses.field(default=None)
    
