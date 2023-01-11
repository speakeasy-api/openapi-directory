import dataclasses
from typing import Optional
from ..shared import notfound as shared_notfound
from ..shared import studentresponse as shared_studentresponse


@dataclasses.dataclass
class GetStudentPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetStudentQueryParams:
    include: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetStudentRequest:
    path_params: GetStudentPathParams = dataclasses.field()
    query_params: GetStudentQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetStudentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    not_found: Optional[shared_notfound.NotFound] = dataclasses.field(default=None)
    student_response: Optional[shared_studentresponse.StudentResponse] = dataclasses.field(default=None)
    
