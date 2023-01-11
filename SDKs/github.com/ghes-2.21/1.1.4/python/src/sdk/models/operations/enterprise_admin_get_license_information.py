import dataclasses
from typing import Optional
from ..shared import license_info as shared_license_info


@dataclasses.dataclass
class EnterpriseAdminGetLicenseInformationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    license_info: Optional[shared_license_info.LicenseInfo] = dataclasses.field(default=None)
    
