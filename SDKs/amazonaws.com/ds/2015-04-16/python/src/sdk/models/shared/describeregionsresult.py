import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import regiondescription as shared_regiondescription


@dataclass_json
@dataclasses.dataclass
class DescribeRegionsResult:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    regions_description: Optional[list[shared_regiondescription.RegionDescription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegionsDescription') }})
    
