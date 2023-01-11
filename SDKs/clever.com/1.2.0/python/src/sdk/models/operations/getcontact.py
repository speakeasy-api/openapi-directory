import dataclasses
from typing import Optional
from ..shared import notfound as shared_notfound
from ..shared import studentcontactresponse as shared_studentcontactresponse


@dataclasses.dataclass
class GetContactPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetContactRequest:
    path_params: GetContactPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetContactResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    not_found: Optional[shared_notfound.NotFound] = dataclasses.field(default=None)
    student_contact_response: Optional[shared_studentcontactresponse.StudentContactResponse] = dataclasses.field(default=None)
    
