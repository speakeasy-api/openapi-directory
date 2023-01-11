import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import licenseconfigurationusage as shared_licenseconfigurationusage


@dataclass_json
@dataclasses.dataclass
class ListUsageForLicenseConfigurationResponse:
    license_configuration_usage_list: Optional[list[shared_licenseconfigurationusage.LicenseConfigurationUsage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseConfigurationUsageList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
