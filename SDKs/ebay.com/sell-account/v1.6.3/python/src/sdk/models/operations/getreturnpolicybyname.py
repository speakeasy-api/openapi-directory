import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import returnpolicy as shared_returnpolicy


@dataclasses.dataclass
class GetReturnPolicyByNameQueryParams:
    marketplace_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'marketplace_id', 'style': 'form', 'explode': True }})
    name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetReturnPolicyByNameSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetReturnPolicyByNameRequest:
    query_params: GetReturnPolicyByNameQueryParams = dataclasses.field()
    security: GetReturnPolicyByNameSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetReturnPolicyByNameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    return_policy: Optional[shared_returnpolicy.ReturnPolicy] = dataclasses.field(default=None)
    
