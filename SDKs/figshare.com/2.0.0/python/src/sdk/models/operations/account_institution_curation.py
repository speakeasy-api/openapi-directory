import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import curationdetail as shared_curationdetail
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class AccountInstitutionCurationPathParams:
    curation_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'curation_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AccountInstitutionCurationSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AccountInstitutionCurationRequest:
    path_params: AccountInstitutionCurationPathParams = dataclasses.field()
    security: AccountInstitutionCurationSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AccountInstitutionCurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    curation_detail: Optional[shared_curationdetail.CurationDetail] = dataclasses.field(default=None)
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    
