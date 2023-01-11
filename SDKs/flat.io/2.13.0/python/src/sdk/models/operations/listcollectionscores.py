import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import flaterrorresponse as shared_flaterrorresponse
from ..shared import scoredetails as shared_scoredetails


@dataclasses.dataclass
class ListCollectionScoresPathParams:
    collection: str = dataclasses.field(metadata={'path_param': { 'field_name': 'collection', 'style': 'simple', 'explode': False }})
    
class ListCollectionScoresDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class ListCollectionScoresSortEnum(str, Enum):
    CREATION_DATE = "creationDate"
    MODIFICATION_DATE = "modificationDate"
    TITLE = "title"


@dataclasses.dataclass
class ListCollectionScoresQueryParams:
    direction: Optional[ListCollectionScoresDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'next', 'style': 'form', 'explode': True }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'previous', 'style': 'form', 'explode': True }})
    sharing_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sharingKey', 'style': 'form', 'explode': True }})
    sort: Optional[ListCollectionScoresSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListCollectionScoresSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ListCollectionScoresRequest:
    path_params: ListCollectionScoresPathParams = dataclasses.field()
    query_params: ListCollectionScoresQueryParams = dataclasses.field()
    security: ListCollectionScoresSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListCollectionScoresResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    score_details: Optional[list[shared_scoredetails.ScoreDetails]] = dataclasses.field(default=None)
    
