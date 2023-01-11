import dataclasses
from typing import Optional
from ..shared import studentcontactsresponse as shared_studentcontactsresponse


@dataclasses.dataclass
class GetContactsQueryParams:
    ending_before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ending_before', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'starting_after', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetContactsRequest:
    query_params: GetContactsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetContactsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    student_contacts_response: Optional[shared_studentcontactsresponse.StudentContactsResponse] = dataclasses.field(default=None)
    
