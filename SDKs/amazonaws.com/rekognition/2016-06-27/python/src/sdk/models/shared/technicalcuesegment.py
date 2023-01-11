import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import technicalcuetype_enum as shared_technicalcuetype_enum


@dataclass_json
@dataclasses.dataclass
class TechnicalCueSegment:
    r"""TechnicalCueSegment
    Information about a technical cue segment. For more information, see <a>SegmentDetection</a>.
    """
    
    confidence: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Confidence') }})
    type: Optional[shared_technicalcuetype_enum.TechnicalCueTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
