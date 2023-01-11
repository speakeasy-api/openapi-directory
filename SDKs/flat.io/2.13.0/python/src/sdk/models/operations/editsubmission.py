import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import assignmentsubmissionupdate as shared_assignmentsubmissionupdate
from ..shared import assignmentsubmission as shared_assignmentsubmission
from ..shared import flaterrorresponse as shared_flaterrorresponse


@dataclasses.dataclass
class EditSubmissionPathParams:
    assignment: str = dataclasses.field(metadata={'path_param': { 'field_name': 'assignment', 'style': 'simple', 'explode': False }})
    class_: str = dataclasses.field(metadata={'path_param': { 'field_name': 'class', 'style': 'simple', 'explode': False }})
    submission: str = dataclasses.field(metadata={'path_param': { 'field_name': 'submission', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EditSubmissionSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EditSubmissionRequest:
    path_params: EditSubmissionPathParams = dataclasses.field()
    request: shared_assignmentsubmissionupdate.AssignmentSubmissionUpdate = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: EditSubmissionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EditSubmissionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    assignment_submission: Optional[shared_assignmentsubmission.AssignmentSubmission] = dataclasses.field(default=None)
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    
