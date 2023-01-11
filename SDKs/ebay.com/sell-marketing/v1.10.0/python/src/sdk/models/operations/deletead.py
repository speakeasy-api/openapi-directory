import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteAdPathParams:
    ad_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ad_id', 'style': 'simple', 'explode': False }})
    campaign_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAdSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteAdRequest:
    path_params: DeleteAdPathParams = dataclasses.field()
    security: DeleteAdSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAdResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
