import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import assignmentcopy as shared_assignmentcopy
from ..shared import assignment as shared_assignment
from ..shared import flaterrorresponse as shared_flaterrorresponse


@dataclasses.dataclass
class CopyAssignmentPathParams:
    assignment: str = dataclasses.field(metadata={'path_param': { 'field_name': 'assignment', 'style': 'simple', 'explode': False }})
    class_: str = dataclasses.field(metadata={'path_param': { 'field_name': 'class', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CopyAssignmentSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CopyAssignmentRequest:
    path_params: CopyAssignmentPathParams = dataclasses.field()
    request: shared_assignmentcopy.AssignmentCopy = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CopyAssignmentSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CopyAssignmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    assignment: Optional[shared_assignment.Assignment] = dataclasses.field(default=None)
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    
