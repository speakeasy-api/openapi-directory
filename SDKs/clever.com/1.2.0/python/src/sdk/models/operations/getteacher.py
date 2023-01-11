import dataclasses
from typing import Optional
from ..shared import notfound as shared_notfound
from ..shared import teacherresponse as shared_teacherresponse


@dataclasses.dataclass
class GetTeacherPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeacherQueryParams:
    include: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTeacherRequest:
    path_params: GetTeacherPathParams = dataclasses.field()
    query_params: GetTeacherQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTeacherResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    not_found: Optional[shared_notfound.NotFound] = dataclasses.field(default=None)
    teacher_response: Optional[shared_teacherresponse.TeacherResponse] = dataclasses.field(default=None)
    
