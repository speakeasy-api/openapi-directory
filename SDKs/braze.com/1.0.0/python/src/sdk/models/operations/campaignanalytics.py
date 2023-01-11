import dataclasses
from typing import Optional


@dataclasses.dataclass
class CampaignAnalyticsQueryParams:
    campaign_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'campaign_id', 'style': 'form', 'explode': True }})
    ending_at: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ending_at', 'style': 'form', 'explode': True }})
    length: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'length', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CampaignAnalyticsRequest:
    query_params: CampaignAnalyticsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CampaignAnalyticsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
