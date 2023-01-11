import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import homeregioncontrol as shared_homeregioncontrol


@dataclass_json
@dataclasses.dataclass
class CreateHomeRegionControlResult:
    home_region_control: Optional[shared_homeregioncontrol.HomeRegionControl] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomeRegionControl') }})
    
