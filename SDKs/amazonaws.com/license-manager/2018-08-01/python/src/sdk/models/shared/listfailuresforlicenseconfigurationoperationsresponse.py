import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import licenseoperationfailure as shared_licenseoperationfailure


@dataclass_json
@dataclasses.dataclass
class ListFailuresForLicenseConfigurationOperationsResponse:
    license_operation_failure_list: Optional[list[shared_licenseoperationfailure.LicenseOperationFailure]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseOperationFailureList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
