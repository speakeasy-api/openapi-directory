import dataclasses
from typing import Optional
from ..shared import studentsresponse as shared_studentsresponse


@dataclasses.dataclass
class GetStudentsQueryParams:
    ending_before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ending_before', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'starting_after', 'style': 'form', 'explode': True }})
    where: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'where', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetStudentsRequest:
    query_params: GetStudentsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetStudentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    students_response: Optional[shared_studentsresponse.StudentsResponse] = dataclasses.field(default=None)
    
