import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import licenseconfiguration as shared_licenseconfiguration


@dataclass_json
@dataclasses.dataclass
class ListLicenseConfigurationsResponse:
    license_configurations: Optional[list[shared_licenseconfiguration.LicenseConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseConfigurations') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
