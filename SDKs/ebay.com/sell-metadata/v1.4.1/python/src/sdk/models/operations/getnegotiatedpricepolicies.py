import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import negotiatedpricepolicyresponse as shared_negotiatedpricepolicyresponse


@dataclasses.dataclass
class GetNegotiatedPricePoliciesPathParams:
    marketplace_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'marketplace_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNegotiatedPricePoliciesQueryParams:
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNegotiatedPricePoliciesSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetNegotiatedPricePoliciesRequest:
    path_params: GetNegotiatedPricePoliciesPathParams = dataclasses.field()
    query_params: GetNegotiatedPricePoliciesQueryParams = dataclasses.field()
    security: GetNegotiatedPricePoliciesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetNegotiatedPricePoliciesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    negotiated_price_policy_response: Optional[shared_negotiatedpricepolicyresponse.NegotiatedPricePolicyResponse] = dataclasses.field(default=None)
    
