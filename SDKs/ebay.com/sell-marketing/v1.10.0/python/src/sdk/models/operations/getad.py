import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import ad as shared_ad


@dataclasses.dataclass
class GetAdPathParams:
    ad_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ad_id', 'style': 'simple', 'explode': False }})
    campaign_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAdSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetAdRequest:
    path_params: GetAdPathParams = dataclasses.field()
    security: GetAdSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAdResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ad: Optional[shared_ad.Ad] = dataclasses.field(default=None)
    
