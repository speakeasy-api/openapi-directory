import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import scorecommentcreation as shared_scorecommentcreation
from ..shared import flaterrorresponse as shared_flaterrorresponse
from ..shared import scorecomment as shared_scorecomment


@dataclasses.dataclass
class PostScoreCommentPathParams:
    score: str = dataclasses.field(metadata={'path_param': { 'field_name': 'score', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostScoreCommentQueryParams:
    sharing_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sharingKey', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostScoreCommentSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PostScoreCommentRequest:
    path_params: PostScoreCommentPathParams = dataclasses.field()
    query_params: PostScoreCommentQueryParams = dataclasses.field()
    request: shared_scorecommentcreation.ScoreCommentCreation = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostScoreCommentSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostScoreCommentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    score_comment: Optional[shared_scorecomment.ScoreComment] = dataclasses.field(default=None)
    
