import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class PauseCampaignPathParams:
    campaign_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PauseCampaignSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PauseCampaignRequest:
    path_params: PauseCampaignPathParams = dataclasses.field()
    security: PauseCampaignSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PauseCampaignResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
