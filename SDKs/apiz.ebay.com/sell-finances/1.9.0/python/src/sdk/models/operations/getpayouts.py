import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import payouts as shared_payouts


@dataclasses.dataclass
class GetPayoutsQueryParams:
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPayoutsSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetPayoutsRequest:
    query_params: GetPayoutsQueryParams = dataclasses.field()
    security: GetPayoutsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetPayoutsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    payouts: Optional[shared_payouts.Payouts] = dataclasses.field(default=None)
    
