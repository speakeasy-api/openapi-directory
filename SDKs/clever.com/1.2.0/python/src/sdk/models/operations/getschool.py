import dataclasses
from typing import Optional
from ..shared import notfound as shared_notfound
from ..shared import schoolresponse as shared_schoolresponse


@dataclasses.dataclass
class GetSchoolPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSchoolRequest:
    path_params: GetSchoolPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSchoolResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    not_found: Optional[shared_notfound.NotFound] = dataclasses.field(default=None)
    school_response: Optional[shared_schoolresponse.SchoolResponse] = dataclasses.field(default=None)
    
