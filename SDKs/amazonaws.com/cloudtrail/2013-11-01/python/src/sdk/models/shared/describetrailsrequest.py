import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DescribeTrailsRequest:
    r"""DescribeTrailsRequest
    Returns information about the trail.
    """
    
    include_shadow_trails: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeShadowTrails') }})
    trail_name_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trailNameList') }})
    
