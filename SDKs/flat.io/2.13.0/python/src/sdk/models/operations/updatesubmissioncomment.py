import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import assignmentsubmissioncommentcreation as shared_assignmentsubmissioncommentcreation
from ..shared import assignmentsubmissioncomment as shared_assignmentsubmissioncomment
from ..shared import flaterrorresponse as shared_flaterrorresponse


@dataclasses.dataclass
class UpdateSubmissionCommentPathParams:
    assignment: str = dataclasses.field(metadata={'path_param': { 'field_name': 'assignment', 'style': 'simple', 'explode': False }})
    class_: str = dataclasses.field(metadata={'path_param': { 'field_name': 'class', 'style': 'simple', 'explode': False }})
    comment: str = dataclasses.field(metadata={'path_param': { 'field_name': 'comment', 'style': 'simple', 'explode': False }})
    submission: str = dataclasses.field(metadata={'path_param': { 'field_name': 'submission', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSubmissionCommentSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateSubmissionCommentRequest:
    path_params: UpdateSubmissionCommentPathParams = dataclasses.field()
    request: shared_assignmentsubmissioncommentcreation.AssignmentSubmissionCommentCreation = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateSubmissionCommentSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpdateSubmissionCommentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    assignment_submission_comment: Optional[shared_assignmentsubmissioncomment.AssignmentSubmissionComment] = dataclasses.field(default=None)
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    
