import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import flaterrorresponse as shared_flaterrorresponse


@dataclasses.dataclass
class DeleteScoreCommentPathParams:
    comment: str = dataclasses.field(metadata={'path_param': { 'field_name': 'comment', 'style': 'simple', 'explode': False }})
    score: str = dataclasses.field(metadata={'path_param': { 'field_name': 'score', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteScoreCommentQueryParams:
    sharing_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sharingKey', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteScoreCommentSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteScoreCommentRequest:
    path_params: DeleteScoreCommentPathParams = dataclasses.field()
    query_params: DeleteScoreCommentQueryParams = dataclasses.field()
    security: DeleteScoreCommentSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteScoreCommentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    
