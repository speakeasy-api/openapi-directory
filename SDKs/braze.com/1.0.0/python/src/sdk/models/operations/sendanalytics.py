import dataclasses
from typing import Optional


@dataclasses.dataclass
class SendAnalyticsQueryParams:
    campaign_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'campaign_id', 'style': 'form', 'explode': True }})
    ending_at: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ending_at', 'style': 'form', 'explode': True }})
    length: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'length', 'style': 'form', 'explode': True }})
    send_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'send_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SendAnalyticsRequest:
    query_params: SendAnalyticsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SendAnalyticsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
