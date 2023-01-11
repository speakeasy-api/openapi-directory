import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import kycresponse as shared_kycresponse


@dataclasses.dataclass
class GetKycSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetKycRequest:
    security: GetKycSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetKycResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    kyc_response: Optional[shared_kycresponse.KycResponse] = dataclasses.field(default=None)
    
