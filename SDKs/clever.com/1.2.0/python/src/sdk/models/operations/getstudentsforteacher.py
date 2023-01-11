import dataclasses
from typing import Optional
from ..shared import notfound as shared_notfound
from ..shared import studentsresponse as shared_studentsresponse


@dataclasses.dataclass
class GetStudentsForTeacherPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetStudentsForTeacherQueryParams:
    ending_before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ending_before', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'starting_after', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetStudentsForTeacherRequest:
    path_params: GetStudentsForTeacherPathParams = dataclasses.field()
    query_params: GetStudentsForTeacherQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetStudentsForTeacherResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    not_found: Optional[shared_notfound.NotFound] = dataclasses.field(default=None)
    students_response: Optional[shared_studentsresponse.StudentsResponse] = dataclasses.field(default=None)
    
