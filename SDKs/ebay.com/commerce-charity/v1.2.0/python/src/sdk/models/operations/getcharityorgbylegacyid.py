import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import charityorg as shared_charityorg


@dataclasses.dataclass
class GetCharityOrgByLegacyIDQueryParams:
    legacy_charity_org_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'legacy_charity_org_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCharityOrgByLegacyIDHeaders:
    x_ebay_c_marketplace_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCharityOrgByLegacyIDSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCharityOrgByLegacyIDRequest:
    headers: GetCharityOrgByLegacyIDHeaders = dataclasses.field()
    query_params: GetCharityOrgByLegacyIDQueryParams = dataclasses.field()
    security: GetCharityOrgByLegacyIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCharityOrgByLegacyIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    charity_org: Optional[shared_charityorg.CharityOrg] = dataclasses.field(default=None)
    
