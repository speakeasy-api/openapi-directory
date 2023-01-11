import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import campaign as shared_campaign


@dataclasses.dataclass
class GetCampaignByNameQueryParams:
    campaign_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'campaign_name', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCampaignByNameSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCampaignByNameRequest:
    query_params: GetCampaignByNameQueryParams = dataclasses.field()
    security: GetCampaignByNameSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCampaignByNameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    campaign: Optional[shared_campaign.Campaign] = dataclasses.field(default=None)
    
