import dataclasses
from typing import Optional
from ..shared import notfound as shared_notfound
from ..shared import teacherresponse as shared_teacherresponse


@dataclasses.dataclass
class GetTeacherForSectionPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeacherForSectionRequest:
    path_params: GetTeacherForSectionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTeacherForSectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    not_found: Optional[shared_notfound.NotFound] = dataclasses.field(default=None)
    teacher_response: Optional[shared_teacherresponse.TeacherResponse] = dataclasses.field(default=None)
    
