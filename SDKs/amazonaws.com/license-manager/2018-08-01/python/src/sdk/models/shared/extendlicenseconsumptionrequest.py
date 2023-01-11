import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ExtendLicenseConsumptionRequest:
    license_consumption_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseConsumptionToken') }})
    dry_run: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DryRun') }})
    
