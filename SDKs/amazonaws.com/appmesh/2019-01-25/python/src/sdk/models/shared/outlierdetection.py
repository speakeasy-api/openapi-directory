import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import duration as shared_duration


@dataclass_json
@dataclasses.dataclass
class OutlierDetection:
    r"""OutlierDetection
    An object that represents the outlier detection for a virtual node's listener.
    """
    
    base_ejection_duration: shared_duration.Duration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseEjectionDuration') }})
    interval: shared_duration.Duration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interval') }})
    max_ejection_percent: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxEjectionPercent') }})
    max_server_errors: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxServerErrors') }})
    
