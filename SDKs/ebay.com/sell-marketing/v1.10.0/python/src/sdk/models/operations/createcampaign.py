import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import createcampaignrequest as shared_createcampaignrequest


@dataclasses.dataclass
class CreateCampaignSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateCampaignRequest:
    request: shared_createcampaignrequest.CreateCampaignRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateCampaignSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateCampaignResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    create_campaign_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
