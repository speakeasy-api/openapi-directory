import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import standardsprofile as shared_standardsprofile


@dataclasses.dataclass
class GetSellerStandardsProfilePathParams:
    cycle: str = dataclasses.field(metadata={'path_param': { 'field_name': 'cycle', 'style': 'simple', 'explode': False }})
    program: str = dataclasses.field(metadata={'path_param': { 'field_name': 'program', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSellerStandardsProfileSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetSellerStandardsProfileRequest:
    path_params: GetSellerStandardsProfilePathParams = dataclasses.field()
    security: GetSellerStandardsProfileSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetSellerStandardsProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    standards_profile: Optional[shared_standardsprofile.StandardsProfile] = dataclasses.field(default=None)
    
