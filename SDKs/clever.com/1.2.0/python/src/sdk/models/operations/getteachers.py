import dataclasses
from typing import Optional
from ..shared import teachersresponse as shared_teachersresponse


@dataclasses.dataclass
class GetTeachersQueryParams:
    ending_before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ending_before', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'starting_after', 'style': 'form', 'explode': True }})
    where: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'where', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTeachersRequest:
    query_params: GetTeachersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTeachersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    teachers_response: Optional[shared_teachersresponse.TeachersResponse] = dataclasses.field(default=None)
    
