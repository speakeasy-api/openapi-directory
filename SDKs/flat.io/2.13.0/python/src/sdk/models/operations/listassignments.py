import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import assignment as shared_assignment
from ..shared import flaterrorresponse as shared_flaterrorresponse


@dataclasses.dataclass
class ListAssignmentsPathParams:
    class_: str = dataclasses.field(metadata={'path_param': { 'field_name': 'class', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListAssignmentsSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ListAssignmentsRequest:
    path_params: ListAssignmentsPathParams = dataclasses.field()
    security: ListAssignmentsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListAssignmentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    assignments: Optional[list[shared_assignment.Assignment]] = dataclasses.field(default=None)
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    
