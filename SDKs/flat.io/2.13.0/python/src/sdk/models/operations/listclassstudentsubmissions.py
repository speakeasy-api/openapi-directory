import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import assignmentsubmission as shared_assignmentsubmission
from ..shared import flaterrorresponse as shared_flaterrorresponse


@dataclasses.dataclass
class ListClassStudentSubmissionsPathParams:
    class_: str = dataclasses.field(metadata={'path_param': { 'field_name': 'class', 'style': 'simple', 'explode': False }})
    user: str = dataclasses.field(metadata={'path_param': { 'field_name': 'user', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListClassStudentSubmissionsSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ListClassStudentSubmissionsRequest:
    path_params: ListClassStudentSubmissionsPathParams = dataclasses.field()
    security: ListClassStudentSubmissionsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListClassStudentSubmissionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    assignment_submissions: Optional[list[shared_assignmentsubmission.AssignmentSubmission]] = dataclasses.field(default=None)
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    
