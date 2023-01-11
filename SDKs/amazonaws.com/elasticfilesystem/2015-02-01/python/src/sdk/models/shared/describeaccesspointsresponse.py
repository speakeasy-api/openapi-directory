import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accesspointdescription as shared_accesspointdescription


@dataclass_json
@dataclasses.dataclass
class DescribeAccessPointsResponse:
    access_points: Optional[list[shared_accesspointdescription.AccessPointDescription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessPoints') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
