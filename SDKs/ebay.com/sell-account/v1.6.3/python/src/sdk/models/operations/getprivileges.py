import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import sellingprivileges as shared_sellingprivileges


@dataclasses.dataclass
class GetPrivilegesSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetPrivilegesRequest:
    security: GetPrivilegesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetPrivilegesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    selling_privileges: Optional[shared_sellingprivileges.SellingPrivileges] = dataclasses.field(default=None)
    
