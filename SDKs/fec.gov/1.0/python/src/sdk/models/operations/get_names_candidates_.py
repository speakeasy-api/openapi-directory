import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import candidatesearchlist as shared_candidatesearchlist


@dataclasses.dataclass
class GetNamesCandidatesQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    q: list[str] = dataclasses.field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNamesCandidatesRequest:
    query_params: GetNamesCandidatesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNamesCandidatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    candidate_search_list: Optional[shared_candidatesearchlist.CandidateSearchList] = dataclasses.field(default=None)
    
