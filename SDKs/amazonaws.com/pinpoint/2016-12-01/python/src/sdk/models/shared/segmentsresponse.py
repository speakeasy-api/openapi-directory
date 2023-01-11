import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import segmentresponse as shared_segmentresponse


@dataclass_json
@dataclasses.dataclass
class SegmentsResponse:
    r"""SegmentsResponse
    Provides information about all the segments that are associated with an application.
    """
    
    item: list[shared_segmentresponse.SegmentResponse] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Item') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
