import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import curationcomment as shared_curationcomment
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class AccountInstitutionCurationCommentsPathParams:
    curation_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'curation_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AccountInstitutionCurationCommentsQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AccountInstitutionCurationCommentsSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AccountInstitutionCurationCommentsRequest:
    path_params: AccountInstitutionCurationCommentsPathParams = dataclasses.field()
    query_params: AccountInstitutionCurationCommentsQueryParams = dataclasses.field()
    security: AccountInstitutionCurationCommentsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AccountInstitutionCurationCommentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    curation_comment: Optional[shared_curationcomment.CurationComment] = dataclasses.field(default=None)
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    
