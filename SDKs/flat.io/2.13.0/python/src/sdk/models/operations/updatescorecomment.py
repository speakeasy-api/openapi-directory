import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import scorecommentupdate as shared_scorecommentupdate
from ..shared import flaterrorresponse as shared_flaterrorresponse
from ..shared import scorecomment as shared_scorecomment


@dataclasses.dataclass
class UpdateScoreCommentPathParams:
    comment: str = dataclasses.field(metadata={'path_param': { 'field_name': 'comment', 'style': 'simple', 'explode': False }})
    score: str = dataclasses.field(metadata={'path_param': { 'field_name': 'score', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateScoreCommentQueryParams:
    sharing_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sharingKey', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UpdateScoreCommentSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateScoreCommentRequest:
    path_params: UpdateScoreCommentPathParams = dataclasses.field()
    query_params: UpdateScoreCommentQueryParams = dataclasses.field()
    request: shared_scorecommentupdate.ScoreCommentUpdate = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateScoreCommentSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpdateScoreCommentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    score_comment: Optional[shared_scorecomment.ScoreComment] = dataclasses.field(default=None)
    
