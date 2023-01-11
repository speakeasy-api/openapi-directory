import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import startshotdetectionfilter as shared_startshotdetectionfilter
from ..shared import starttechnicalcuedetectionfilter as shared_starttechnicalcuedetectionfilter


@dataclass_json
@dataclasses.dataclass
class StartSegmentDetectionFilters:
    r"""StartSegmentDetectionFilters
    Filters applied to the technical cue or shot detection segments. For more information, see <a>StartSegmentDetection</a>. 
    """
    
    shot_filter: Optional[shared_startshotdetectionfilter.StartShotDetectionFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShotFilter') }})
    technical_cue_filter: Optional[shared_starttechnicalcuedetectionfilter.StartTechnicalCueDetectionFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TechnicalCueFilter') }})
    
