import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errormessage as shared_errormessage
from ..shared import shortaccount as shared_shortaccount


@dataclasses.dataclass
class PrivateInstitutionAccountsListQueryParams:
    email: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    institution_user_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'institution_user_id', 'style': 'form', 'explode': True }})
    is_active: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'is_active', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PrivateInstitutionAccountsListSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateInstitutionAccountsListRequest:
    query_params: PrivateInstitutionAccountsListQueryParams = dataclasses.field()
    security: PrivateInstitutionAccountsListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateInstitutionAccountsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    short_accounts: Optional[list[shared_shortaccount.ShortAccount]] = dataclasses.field(default=None)
    
