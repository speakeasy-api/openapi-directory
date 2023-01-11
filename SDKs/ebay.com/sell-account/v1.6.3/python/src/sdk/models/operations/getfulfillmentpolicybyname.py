import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import fulfillmentpolicy as shared_fulfillmentpolicy


@dataclasses.dataclass
class GetFulfillmentPolicyByNameQueryParams:
    marketplace_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'marketplace_id', 'style': 'form', 'explode': True }})
    name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFulfillmentPolicyByNameSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetFulfillmentPolicyByNameRequest:
    query_params: GetFulfillmentPolicyByNameQueryParams = dataclasses.field()
    security: GetFulfillmentPolicyByNameSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetFulfillmentPolicyByNameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    fulfillment_policy: Optional[shared_fulfillmentpolicy.FulfillmentPolicy] = dataclasses.field(default=None)
    
