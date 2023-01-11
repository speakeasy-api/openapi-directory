import dataclasses
from typing import Optional
from ..shared import notfound as shared_notfound
from ..shared import studentcontactsforstudentresponse as shared_studentcontactsforstudentresponse


@dataclasses.dataclass
class GetContactsForStudentPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetContactsForStudentQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetContactsForStudentRequest:
    path_params: GetContactsForStudentPathParams = dataclasses.field()
    query_params: GetContactsForStudentQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetContactsForStudentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    not_found: Optional[shared_notfound.NotFound] = dataclasses.field(default=None)
    student_contacts_for_student_response: Optional[shared_studentcontactsforstudentresponse.StudentContactsForStudentResponse] = dataclasses.field(default=None)
    
