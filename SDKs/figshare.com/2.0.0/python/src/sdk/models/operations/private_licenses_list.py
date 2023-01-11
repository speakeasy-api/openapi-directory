import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errormessage as shared_errormessage
from ..shared import license as shared_license


@dataclasses.dataclass
class PrivateLicensesListSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateLicensesListRequest:
    security: PrivateLicensesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateLicensesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    licenses: Optional[list[shared_license.License]] = dataclasses.field(default=None)
    
