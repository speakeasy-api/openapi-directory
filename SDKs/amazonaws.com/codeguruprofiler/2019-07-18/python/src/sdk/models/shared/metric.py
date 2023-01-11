import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metrictype_enum as shared_metrictype_enum


@dataclass_json
@dataclasses.dataclass
class Metric:
    r"""Metric
     Details about the metric that the analysis used when it detected the anomaly. The metric what is analyzed to create recommendations. It includes the name of the frame that was analyzed and the type and thread states used to derive the metric value for that frame. 
    """
    
    frame_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('frameName') }})
    thread_states: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('threadStates') }})
    type: shared_metrictype_enum.MetricTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
