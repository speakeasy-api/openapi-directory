import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteCampaignPathParams:
    campaign_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteCampaignSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteCampaignRequest:
    path_params: DeleteCampaignPathParams = dataclasses.field()
    security: DeleteCampaignSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteCampaignResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
