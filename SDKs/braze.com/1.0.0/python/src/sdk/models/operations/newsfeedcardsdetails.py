import dataclasses
from typing import Optional


@dataclasses.dataclass
class NewsFeedCardsDetailsQueryParams:
    card_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'card_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class NewsFeedCardsDetailsRequest:
    query_params: NewsFeedCardsDetailsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class NewsFeedCardsDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
