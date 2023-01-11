import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class EndCampaignPathParams:
    campaign_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndCampaignSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndCampaignRequest:
    path_params: EndCampaignPathParams = dataclasses.field()
    security: EndCampaignSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndCampaignResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
