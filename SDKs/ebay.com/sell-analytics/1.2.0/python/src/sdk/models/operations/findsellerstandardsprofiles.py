import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import findsellerstandardsprofilesresponse as shared_findsellerstandardsprofilesresponse


@dataclasses.dataclass
class FindSellerStandardsProfilesSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FindSellerStandardsProfilesRequest:
    security: FindSellerStandardsProfilesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FindSellerStandardsProfilesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    find_seller_standards_profiles_response: Optional[shared_findsellerstandardsprofilesresponse.FindSellerStandardsProfilesResponse] = dataclasses.field(default=None)
    
