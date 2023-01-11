import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import anomalygroup as shared_anomalygroup


@dataclass_json
@dataclasses.dataclass
class GetAnomalyGroupResponse:
    anomaly_group: Optional[shared_anomalygroup.AnomalyGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnomalyGroup') }})
    
