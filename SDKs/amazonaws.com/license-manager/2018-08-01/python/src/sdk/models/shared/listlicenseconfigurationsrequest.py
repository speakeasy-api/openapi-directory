import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filter as shared_filter


@dataclass_json
@dataclasses.dataclass
class ListLicenseConfigurationsRequest:
    filters: Optional[list[shared_filter.Filter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filters') }})
    license_configuration_arns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseConfigurationArns') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
