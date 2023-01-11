import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import payout as shared_payout


@dataclasses.dataclass
class GetPayoutPathParams:
    payout_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payout_Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPayoutSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetPayoutRequest:
    path_params: GetPayoutPathParams = dataclasses.field()
    security: GetPayoutSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetPayoutResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    payout: Optional[shared_payout.Payout] = dataclasses.field(default=None)
    
