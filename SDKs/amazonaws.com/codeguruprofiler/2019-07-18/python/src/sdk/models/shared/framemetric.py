import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metrictype_enum as shared_metrictype_enum


@dataclass_json
@dataclasses.dataclass
class FrameMetric:
    r"""FrameMetric
     The frame name, metric type, and thread states. These are used to derive the value of the metric for the frame.
    """
    
    frame_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('frameName') }})
    thread_states: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('threadStates') }})
    type: shared_metrictype_enum.MetricTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
