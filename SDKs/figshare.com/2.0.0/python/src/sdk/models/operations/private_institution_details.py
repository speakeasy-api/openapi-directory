import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errormessage as shared_errormessage
from ..shared import institution as shared_institution


@dataclasses.dataclass
class PrivateInstitutionDetailsSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateInstitutionDetailsRequest:
    security: PrivateInstitutionDetailsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateInstitutionDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    institution: Optional[shared_institution.Institution] = dataclasses.field(default=None)
    
