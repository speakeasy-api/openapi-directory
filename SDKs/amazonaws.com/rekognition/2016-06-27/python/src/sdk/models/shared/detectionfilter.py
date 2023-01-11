import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DetectionFilter:
    r"""DetectionFilter
    A set of parameters that allow you to filter out certain results from your returned results.
    """
    
    min_bounding_box_height: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinBoundingBoxHeight') }})
    min_bounding_box_width: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinBoundingBoxWidth') }})
    min_confidence: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinConfidence') }})
    
