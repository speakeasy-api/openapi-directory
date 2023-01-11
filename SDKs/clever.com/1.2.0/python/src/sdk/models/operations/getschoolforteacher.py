import dataclasses
from typing import Optional
from ..shared import notfound as shared_notfound
from ..shared import schoolresponse as shared_schoolresponse


@dataclasses.dataclass
class GetSchoolForTeacherPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSchoolForTeacherRequest:
    path_params: GetSchoolForTeacherPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSchoolForTeacherResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    not_found: Optional[shared_notfound.NotFound] = dataclasses.field(default=None)
    school_response: Optional[shared_schoolresponse.SchoolResponse] = dataclasses.field(default=None)
    
