import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import assignmentsubmissionhistory as shared_assignmentsubmissionhistory
from ..shared import flaterrorresponse as shared_flaterrorresponse


@dataclasses.dataclass
class GetSubmissionHistoryPathParams:
    assignment: str = dataclasses.field(metadata={'path_param': { 'field_name': 'assignment', 'style': 'simple', 'explode': False }})
    class_: str = dataclasses.field(metadata={'path_param': { 'field_name': 'class', 'style': 'simple', 'explode': False }})
    submission: str = dataclasses.field(metadata={'path_param': { 'field_name': 'submission', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSubmissionHistorySecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetSubmissionHistoryRequest:
    path_params: GetSubmissionHistoryPathParams = dataclasses.field()
    security: GetSubmissionHistorySecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetSubmissionHistoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    assignment_submission_histories: Optional[list[shared_assignmentsubmissionhistory.AssignmentSubmissionHistory]] = dataclasses.field(default=None)
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    
