import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class ResumeCampaignPathParams:
    campaign_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ResumeCampaignSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ResumeCampaignRequest:
    path_params: ResumeCampaignPathParams = dataclasses.field()
    security: ResumeCampaignSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ResumeCampaignResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
