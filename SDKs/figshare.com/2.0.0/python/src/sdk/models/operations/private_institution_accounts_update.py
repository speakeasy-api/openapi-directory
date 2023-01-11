import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import accountupdate as shared_accountupdate
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PrivateInstitutionAccountsUpdatePathParams:
    account_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateInstitutionAccountsUpdateSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateInstitutionAccountsUpdateRequest:
    path_params: PrivateInstitutionAccountsUpdatePathParams = dataclasses.field()
    request: shared_accountupdate.AccountUpdate = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PrivateInstitutionAccountsUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateInstitutionAccountsUpdateResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    
