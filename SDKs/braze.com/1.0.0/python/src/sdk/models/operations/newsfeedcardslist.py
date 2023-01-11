import dataclasses
from typing import Optional


@dataclasses.dataclass
class NewsFeedCardsListQueryParams:
    include_archived: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_archived', 'style': 'form', 'explode': True }})
    page: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    sort_direction: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_direction', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class NewsFeedCardsListRequest:
    query_params: NewsFeedCardsListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class NewsFeedCardsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
