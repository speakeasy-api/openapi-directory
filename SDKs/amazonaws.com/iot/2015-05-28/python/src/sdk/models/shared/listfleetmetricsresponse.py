import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fleetmetricnameandarn as shared_fleetmetricnameandarn


@dataclass_json
@dataclasses.dataclass
class ListFleetMetricsResponse:
    fleet_metrics: Optional[list[shared_fleetmetricnameandarn.FleetMetricNameAndArn]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fleetMetrics') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
