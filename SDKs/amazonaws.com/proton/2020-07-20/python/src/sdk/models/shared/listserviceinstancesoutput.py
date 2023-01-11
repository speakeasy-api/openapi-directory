import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import serviceinstancesummary as shared_serviceinstancesummary


@dataclass_json
@dataclasses.dataclass
class ListServiceInstancesOutput:
    service_instances: list[shared_serviceinstancesummary.ServiceInstanceSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceInstances') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
