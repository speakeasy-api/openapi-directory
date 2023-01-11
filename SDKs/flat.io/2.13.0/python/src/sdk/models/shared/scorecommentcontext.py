import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ScoreCommentContext:
    r"""ScoreCommentContext
    The context of the comment (for inline/contextualized comments). A context will include all the information related to the location of the comment (i.e. score parts, range of measure, time position).
    
    """
    
    measure_uuids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('measureUuids') }})
    part_uuid: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('partUuid') }})
    start_dpq: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDpq') }})
    start_time_pos: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTimePos') }})
    stop_dpq: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stopDpq') }})
    stop_time_pos: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stopTimePos') }})
    staff_idx: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('staffIdx') }})
    staff_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('staffUuid') }})
    
