import dataclasses
from typing import Optional


@dataclasses.dataclass
class CampaignDetailsQueryParams:
    campaign_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'campaign_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CampaignDetailsRequest:
    query_params: CampaignDetailsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CampaignDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
