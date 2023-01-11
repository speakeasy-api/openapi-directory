import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import flaterrorresponse as shared_flaterrorresponse
from ..shared import scorecomment as shared_scorecomment


@dataclasses.dataclass
class GetScoreCommentsPathParams:
    score: str = dataclasses.field(metadata={'path_param': { 'field_name': 'score', 'style': 'simple', 'explode': False }})
    
class GetScoreCommentsDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetScoreCommentsSortEnum(str, Enum):
    DATE = "date"

class GetScoreCommentsTypeEnum(str, Enum):
    DOCUMENT = "document"
    INLINE = "inline"


@dataclasses.dataclass
class GetScoreCommentsQueryParams:
    direction: Optional[GetScoreCommentsDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    sharing_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sharingKey', 'style': 'form', 'explode': True }})
    sort: Optional[GetScoreCommentsSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    type: Optional[GetScoreCommentsTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetScoreCommentsSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetScoreCommentsRequest:
    path_params: GetScoreCommentsPathParams = dataclasses.field()
    query_params: GetScoreCommentsQueryParams = dataclasses.field()
    security: GetScoreCommentsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetScoreCommentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    score_comments: Optional[list[shared_scorecomment.ScoreComment]] = dataclasses.field(default=None)
    
