import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errormessage as shared_errormessage
from ..shared import groupembargooptions as shared_groupembargooptions


@dataclasses.dataclass
class PrivateInstitutionEmbargoOptionsDetailsSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateInstitutionEmbargoOptionsDetailsRequest:
    security: PrivateInstitutionEmbargoOptionsDetailsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateInstitutionEmbargoOptionsDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    group_embargo_options: Optional[list[shared_groupembargooptions.GroupEmbargoOptions]] = dataclasses.field(default=None)
    
