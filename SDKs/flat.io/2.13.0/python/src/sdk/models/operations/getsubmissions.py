import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import assignmentsubmission as shared_assignmentsubmission
from ..shared import flaterrorresponse as shared_flaterrorresponse


@dataclasses.dataclass
class GetSubmissionsPathParams:
    assignment: str = dataclasses.field(metadata={'path_param': { 'field_name': 'assignment', 'style': 'simple', 'explode': False }})
    class_: str = dataclasses.field(metadata={'path_param': { 'field_name': 'class', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSubmissionsSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetSubmissionsRequest:
    path_params: GetSubmissionsPathParams = dataclasses.field()
    security: GetSubmissionsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetSubmissionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    assignment_submissions: Optional[list[shared_assignmentsubmission.AssignmentSubmission]] = dataclasses.field(default=None)
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    
