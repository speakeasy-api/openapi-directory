import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ForecastStatistics:
    r"""ForecastStatistics
    The predicted high and low fault count. This is used to determine if a service has become anomalous and if an insight should be created.
    """
    
    fault_count_high: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FaultCountHigh') }})
    fault_count_low: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FaultCountLow') }})
    
