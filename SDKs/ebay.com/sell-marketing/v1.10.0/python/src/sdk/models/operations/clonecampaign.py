import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import clonecampaignrequest as shared_clonecampaignrequest


@dataclasses.dataclass
class CloneCampaignPathParams:
    campaign_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CloneCampaignSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CloneCampaignRequest:
    path_params: CloneCampaignPathParams = dataclasses.field()
    request: shared_clonecampaignrequest.CloneCampaignRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CloneCampaignSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CloneCampaignResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    clone_campaign_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
