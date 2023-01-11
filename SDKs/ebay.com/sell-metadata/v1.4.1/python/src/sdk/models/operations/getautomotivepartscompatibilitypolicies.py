import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import automotivepartscompatibilitypolicyresponse as shared_automotivepartscompatibilitypolicyresponse


@dataclasses.dataclass
class GetAutomotivePartsCompatibilityPoliciesPathParams:
    marketplace_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'marketplace_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAutomotivePartsCompatibilityPoliciesQueryParams:
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAutomotivePartsCompatibilityPoliciesSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetAutomotivePartsCompatibilityPoliciesRequest:
    path_params: GetAutomotivePartsCompatibilityPoliciesPathParams = dataclasses.field()
    query_params: GetAutomotivePartsCompatibilityPoliciesQueryParams = dataclasses.field()
    security: GetAutomotivePartsCompatibilityPoliciesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAutomotivePartsCompatibilityPoliciesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    automotive_parts_compatibility_policy_response: Optional[shared_automotivepartscompatibilitypolicyresponse.AutomotivePartsCompatibilityPolicyResponse] = dataclasses.field(default=None)
    
