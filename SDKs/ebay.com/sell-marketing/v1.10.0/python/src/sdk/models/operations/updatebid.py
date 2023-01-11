import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from ..shared import security as shared_security
from ..shared import updatebidpercentagerequest as shared_updatebidpercentagerequest


@dataclasses.dataclass
class UpdateBidPathParams:
    ad_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ad_id', 'style': 'simple', 'explode': False }})
    campaign_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateBidSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateBidRequest:
    path_params: UpdateBidPathParams = dataclasses.field()
    request: shared_updatebidpercentagerequest.UpdateBidPercentageRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateBidSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpdateBidResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
