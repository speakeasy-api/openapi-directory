import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class StartShotDetectionFilter:
    r"""StartShotDetectionFilter
    Filters for the shot detection segments returned by <code>GetSegmentDetection</code>. For more information, see <a>StartSegmentDetectionFilters</a>.
    """
    
    min_segment_confidence: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinSegmentConfidence') }})
    
