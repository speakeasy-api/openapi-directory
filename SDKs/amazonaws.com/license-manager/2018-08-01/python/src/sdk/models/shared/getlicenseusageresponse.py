import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import licenseusage as shared_licenseusage


@dataclass_json
@dataclasses.dataclass
class GetLicenseUsageResponse:
    license_usage: Optional[shared_licenseusage.LicenseUsage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseUsage') }})
    
