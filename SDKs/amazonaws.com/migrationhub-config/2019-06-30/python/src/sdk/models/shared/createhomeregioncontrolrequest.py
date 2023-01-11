import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import target as shared_target


@dataclass_json
@dataclasses.dataclass
class CreateHomeRegionControlRequest:
    home_region: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomeRegion') }})
    target: shared_target.Target = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Target') }})
    dry_run: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DryRun') }})
    
