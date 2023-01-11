import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import trail as shared_trail


@dataclass_json
@dataclasses.dataclass
class DescribeTrailsResponse:
    r"""DescribeTrailsResponse
    Returns the objects or data listed below if successful. Otherwise, returns an error.
    """
    
    trail_list: Optional[list[shared_trail.Trail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trailList') }})
    
