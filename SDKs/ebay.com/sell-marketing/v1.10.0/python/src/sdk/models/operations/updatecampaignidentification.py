import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from ..shared import security as shared_security
from ..shared import updatecampaignidentificationrequest as shared_updatecampaignidentificationrequest


@dataclasses.dataclass
class UpdateCampaignIdentificationPathParams:
    campaign_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateCampaignIdentificationSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateCampaignIdentificationRequest:
    path_params: UpdateCampaignIdentificationPathParams = dataclasses.field()
    request: shared_updatecampaignidentificationrequest.UpdateCampaignIdentificationRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateCampaignIdentificationSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpdateCampaignIdentificationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
