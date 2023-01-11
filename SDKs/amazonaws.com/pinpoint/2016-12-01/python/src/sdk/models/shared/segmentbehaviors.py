import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recencydimension as shared_recencydimension


@dataclass_json
@dataclasses.dataclass
class SegmentBehaviors:
    r"""SegmentBehaviors
    Specifies dimension settings for including or excluding endpoints from a segment based on how recently an endpoint was active.
    """
    
    recency: Optional[shared_recencydimension.RecencyDimension] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Recency') }})
    
