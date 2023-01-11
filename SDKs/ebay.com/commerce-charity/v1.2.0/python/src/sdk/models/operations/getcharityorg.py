import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import charityorg as shared_charityorg


@dataclasses.dataclass
class GetCharityOrgPathParams:
    charity_org_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'charity_org_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCharityOrgHeaders:
    x_ebay_c_marketplace_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCharityOrgSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCharityOrgRequest:
    headers: GetCharityOrgHeaders = dataclasses.field()
    path_params: GetCharityOrgPathParams = dataclasses.field()
    security: GetCharityOrgSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCharityOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    charity_org: Optional[shared_charityorg.CharityOrg] = dataclasses.field(default=None)
    
