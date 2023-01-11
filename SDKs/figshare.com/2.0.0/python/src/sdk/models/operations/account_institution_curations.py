import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import curation as shared_curation
from ..shared import errormessage as shared_errormessage

class AccountInstitutionCurationsStatusEnum(str, Enum):
    PENDING = "pending"
    APPROVED = "approved"
    REJECTED = "rejected"
    CLOSED = "closed"


@dataclasses.dataclass
class AccountInstitutionCurationsQueryParams:
    article_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'article_id', 'style': 'form', 'explode': True }})
    group_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'group_id', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    status: Optional[AccountInstitutionCurationsStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AccountInstitutionCurationsSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AccountInstitutionCurationsRequest:
    query_params: AccountInstitutionCurationsQueryParams = dataclasses.field()
    security: AccountInstitutionCurationsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AccountInstitutionCurationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    curation: Optional[shared_curation.Curation] = dataclasses.field(default=None)
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    
