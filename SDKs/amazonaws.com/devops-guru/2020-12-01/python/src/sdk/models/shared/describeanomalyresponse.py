import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import proactiveanomaly as shared_proactiveanomaly
from ..shared import reactiveanomaly as shared_reactiveanomaly


@dataclass_json
@dataclasses.dataclass
class DescribeAnomalyResponse:
    proactive_anomaly: Optional[shared_proactiveanomaly.ProactiveAnomaly] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProactiveAnomaly') }})
    reactive_anomaly: Optional[shared_reactiveanomaly.ReactiveAnomaly] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReactiveAnomaly') }})
    
