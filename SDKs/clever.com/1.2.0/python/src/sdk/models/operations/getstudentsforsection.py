import dataclasses
from typing import Optional
from ..shared import notfound as shared_notfound
from ..shared import studentsresponse as shared_studentsresponse


@dataclasses.dataclass
class GetStudentsForSectionPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetStudentsForSectionQueryParams:
    ending_before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ending_before', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'starting_after', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetStudentsForSectionRequest:
    path_params: GetStudentsForSectionPathParams = dataclasses.field()
    query_params: GetStudentsForSectionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetStudentsForSectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    not_found: Optional[shared_notfound.NotFound] = dataclasses.field(default=None)
    students_response: Optional[shared_studentsresponse.StudentsResponse] = dataclasses.field(default=None)
    
