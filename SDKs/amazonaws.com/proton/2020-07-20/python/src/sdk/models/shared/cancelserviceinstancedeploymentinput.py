import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CancelServiceInstanceDeploymentInput:
    service_instance_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceInstanceName') }})
    service_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceName') }})
    
