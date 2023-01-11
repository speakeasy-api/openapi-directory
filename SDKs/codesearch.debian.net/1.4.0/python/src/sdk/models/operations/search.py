import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import searchresult as shared_searchresult

class SearchMatchModeEnum(str, Enum):
    LITERAL = "literal"
    REGEXP = "regexp"


@dataclasses.dataclass
class SearchQueryParams:
    query: str = dataclasses.field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    match_mode: Optional[SearchMatchModeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'match_mode', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SearchSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class SearchRequest:
    query_params: SearchQueryParams = dataclasses.field()
    security: SearchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class SearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    search_results: Optional[list[shared_searchresult.SearchResult]] = dataclasses.field(default=None)
    
