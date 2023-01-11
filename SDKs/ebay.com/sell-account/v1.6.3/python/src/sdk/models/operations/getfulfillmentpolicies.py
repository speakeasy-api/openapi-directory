import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import fulfillmentpolicyresponse as shared_fulfillmentpolicyresponse


@dataclasses.dataclass
class GetFulfillmentPoliciesQueryParams:
    marketplace_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'marketplace_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFulfillmentPoliciesSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetFulfillmentPoliciesRequest:
    query_params: GetFulfillmentPoliciesQueryParams = dataclasses.field()
    security: GetFulfillmentPoliciesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetFulfillmentPoliciesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    fulfillment_policy_response: Optional[shared_fulfillmentpolicyresponse.FulfillmentPolicyResponse] = dataclasses.field(default=None)
    
