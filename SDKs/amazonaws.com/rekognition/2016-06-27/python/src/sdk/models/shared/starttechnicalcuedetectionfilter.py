import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import blackframe as shared_blackframe


@dataclass_json
@dataclasses.dataclass
class StartTechnicalCueDetectionFilter:
    r"""StartTechnicalCueDetectionFilter
    Filters for the technical segments returned by <a>GetSegmentDetection</a>. For more information, see <a>StartSegmentDetectionFilters</a>.
    """
    
    black_frame: Optional[shared_blackframe.BlackFrame] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BlackFrame') }})
    min_segment_confidence: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinSegmentConfidence') }})
    
