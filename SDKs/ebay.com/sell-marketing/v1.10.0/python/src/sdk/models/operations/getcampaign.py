import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import campaign as shared_campaign


@dataclasses.dataclass
class GetCampaignPathParams:
    campaign_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCampaignSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCampaignRequest:
    path_params: GetCampaignPathParams = dataclasses.field()
    security: GetCampaignSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCampaignResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    campaign: Optional[shared_campaign.Campaign] = dataclasses.field(default=None)
    
