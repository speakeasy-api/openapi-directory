import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import productadoptionpolicyresponse as shared_productadoptionpolicyresponse


@dataclasses.dataclass
class GetProductAdoptionPoliciesPathParams:
    marketplace_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'marketplace_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProductAdoptionPoliciesQueryParams:
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetProductAdoptionPoliciesSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetProductAdoptionPoliciesRequest:
    path_params: GetProductAdoptionPoliciesPathParams = dataclasses.field()
    query_params: GetProductAdoptionPoliciesQueryParams = dataclasses.field()
    security: GetProductAdoptionPoliciesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetProductAdoptionPoliciesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    product_adoption_policy_response: Optional[shared_productadoptionpolicyresponse.ProductAdoptionPolicyResponse] = dataclasses.field(default=None)
    
