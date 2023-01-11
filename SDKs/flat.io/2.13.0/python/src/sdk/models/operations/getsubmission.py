import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import assignmentsubmission as shared_assignmentsubmission
from ..shared import flaterrorresponse as shared_flaterrorresponse


@dataclasses.dataclass
class GetSubmissionPathParams:
    assignment: str = dataclasses.field(metadata={'path_param': { 'field_name': 'assignment', 'style': 'simple', 'explode': False }})
    class_: str = dataclasses.field(metadata={'path_param': { 'field_name': 'class', 'style': 'simple', 'explode': False }})
    submission: str = dataclasses.field(metadata={'path_param': { 'field_name': 'submission', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSubmissionSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetSubmissionRequest:
    path_params: GetSubmissionPathParams = dataclasses.field()
    security: GetSubmissionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetSubmissionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    assignment_submission: Optional[shared_assignmentsubmission.AssignmentSubmission] = dataclasses.field(default=None)
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    
