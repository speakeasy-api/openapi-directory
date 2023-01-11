import dataclasses
from typing import Optional


@dataclasses.dataclass
class NewsFeedCardAnalyticsQueryParams:
    card_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'card_id', 'style': 'form', 'explode': True }})
    ending_at: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ending_at', 'style': 'form', 'explode': True }})
    length: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'length', 'style': 'form', 'explode': True }})
    unit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'unit', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class NewsFeedCardAnalyticsRequest:
    query_params: NewsFeedCardAnalyticsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class NewsFeedCardAnalyticsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
