import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import framemetric as shared_framemetric


@dataclass_json
@dataclasses.dataclass
class FrameMetricDatum:
    r"""FrameMetricDatum
     Information about a frame metric and its values. 
    """
    
    frame_metric: shared_framemetric.FrameMetric = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('frameMetric') }})
    values: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
