import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import flaterrorresponse as shared_flaterrorresponse


@dataclasses.dataclass
class MarkScoreCommentUnresolvedPathParams:
    comment: str = dataclasses.field(metadata={'path_param': { 'field_name': 'comment', 'style': 'simple', 'explode': False }})
    score: str = dataclasses.field(metadata={'path_param': { 'field_name': 'score', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MarkScoreCommentUnresolvedQueryParams:
    sharing_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sharingKey', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class MarkScoreCommentUnresolvedSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class MarkScoreCommentUnresolvedRequest:
    path_params: MarkScoreCommentUnresolvedPathParams = dataclasses.field()
    query_params: MarkScoreCommentUnresolvedQueryParams = dataclasses.field()
    security: MarkScoreCommentUnresolvedSecurity = dataclasses.field()
    

@dataclasses.dataclass
class MarkScoreCommentUnresolvedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    
