import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import licensespecification as shared_licensespecification


@dataclass_json
@dataclasses.dataclass
class ListLicenseSpecificationsForResourceResponse:
    license_specifications: Optional[list[shared_licensespecification.LicenseSpecification]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseSpecifications') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
