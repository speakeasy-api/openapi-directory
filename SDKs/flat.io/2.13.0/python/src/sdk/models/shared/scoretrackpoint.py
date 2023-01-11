import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ScoreTrackPointTypeEnum(str, Enum):
    MEASURE = "measure"
    END = "end"


@dataclass_json
@dataclasses.dataclass
class ScoreTrackPoint:
    r"""ScoreTrackPoint
    A track synchronization point
    """
    
    time: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    type: ScoreTrackPointTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    measure_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('measureUuid') }})
    
