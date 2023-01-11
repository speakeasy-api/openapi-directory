import dataclasses
from typing import Optional
from ..shared import playersearchresult as shared_playersearchresult


@dataclasses.dataclass
class PlayerSearchQueryParams:
    search_term: str = dataclasses.field(metadata={'query_param': { 'field_name': 'searchTerm', 'style': 'form', 'explode': True }})
    position: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'position', 'style': 'form', 'explode': True }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PlayerSearchRequest:
    query_params: PlayerSearchQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PlayerSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_search_results: Optional[list[shared_playersearchresult.PlayerSearchResult]] = dataclasses.field(default=None)
    
