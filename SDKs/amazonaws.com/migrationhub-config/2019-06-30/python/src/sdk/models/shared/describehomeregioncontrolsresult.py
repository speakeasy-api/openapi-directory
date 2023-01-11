import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import homeregioncontrol as shared_homeregioncontrol


@dataclass_json
@dataclasses.dataclass
class DescribeHomeRegionControlsResult:
    home_region_controls: Optional[list[shared_homeregioncontrol.HomeRegionControl]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomeRegionControls') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
