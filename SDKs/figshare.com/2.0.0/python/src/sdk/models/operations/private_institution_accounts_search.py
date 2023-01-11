import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import institutionaccountssearch as shared_institutionaccountssearch
from ..shared import errormessage as shared_errormessage
from ..shared import shortaccount as shared_shortaccount


@dataclasses.dataclass
class PrivateInstitutionAccountsSearchSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateInstitutionAccountsSearchRequest:
    request: shared_institutionaccountssearch.InstitutionAccountsSearch = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PrivateInstitutionAccountsSearchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateInstitutionAccountsSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    short_accounts: Optional[list[shared_shortaccount.ShortAccount]] = dataclasses.field(default=None)
    
