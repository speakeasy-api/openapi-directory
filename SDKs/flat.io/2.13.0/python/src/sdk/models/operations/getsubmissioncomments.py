import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import assignmentsubmissioncomment as shared_assignmentsubmissioncomment
from ..shared import flaterrorresponse as shared_flaterrorresponse


@dataclasses.dataclass
class GetSubmissionCommentsPathParams:
    assignment: str = dataclasses.field(metadata={'path_param': { 'field_name': 'assignment', 'style': 'simple', 'explode': False }})
    class_: str = dataclasses.field(metadata={'path_param': { 'field_name': 'class', 'style': 'simple', 'explode': False }})
    submission: str = dataclasses.field(metadata={'path_param': { 'field_name': 'submission', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSubmissionCommentsSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetSubmissionCommentsRequest:
    path_params: GetSubmissionCommentsPathParams = dataclasses.field()
    security: GetSubmissionCommentsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetSubmissionCommentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    assignment_submission_comments: Optional[list[shared_assignmentsubmissioncomment.AssignmentSubmissionComment]] = dataclasses.field(default=None)
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    
