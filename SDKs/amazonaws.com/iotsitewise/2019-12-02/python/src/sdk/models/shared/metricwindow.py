import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tumblingwindow as shared_tumblingwindow


@dataclass_json
@dataclasses.dataclass
class MetricWindow:
    r"""MetricWindow
    Contains a time interval window used for data aggregate computations (for example, average, sum, count, and so on).
    """
    
    tumbling: Optional[shared_tumblingwindow.TumblingWindow] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tumbling') }})
    
