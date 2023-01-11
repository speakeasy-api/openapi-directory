import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import assignment as shared_assignment
from ..shared import flaterrorresponse as shared_flaterrorresponse


@dataclasses.dataclass
class UnarchiveAssignmentPathParams:
    assignment: str = dataclasses.field(metadata={'path_param': { 'field_name': 'assignment', 'style': 'simple', 'explode': False }})
    class_: str = dataclasses.field(metadata={'path_param': { 'field_name': 'class', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UnarchiveAssignmentSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UnarchiveAssignmentRequest:
    path_params: UnarchiveAssignmentPathParams = dataclasses.field()
    security: UnarchiveAssignmentSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UnarchiveAssignmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    assignment: Optional[shared_assignment.Assignment] = dataclasses.field(default=None)
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    
