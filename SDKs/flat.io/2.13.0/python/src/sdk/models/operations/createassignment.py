import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import assignmentcreation as shared_assignmentcreation
from ..shared import assignment as shared_assignment
from ..shared import flaterrorresponse as shared_flaterrorresponse


@dataclasses.dataclass
class CreateAssignmentPathParams:
    class_: str = dataclasses.field(metadata={'path_param': { 'field_name': 'class', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateAssignmentSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateAssignmentRequest:
    path_params: CreateAssignmentPathParams = dataclasses.field()
    security: CreateAssignmentSecurity = dataclasses.field()
    request: Optional[shared_assignmentcreation.AssignmentCreation] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateAssignmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    assignment: Optional[shared_assignment.Assignment] = dataclasses.field(default=None)
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    
