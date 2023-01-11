import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import container as shared_container
from ..shared import endpointrequest as shared_endpointrequest


@dataclass_json
@dataclasses.dataclass
class CreateContainerServiceDeploymentRequest:
    service_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceName') }})
    containers: Optional[dict[str, shared_container.Container]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containers') }})
    public_endpoint: Optional[shared_endpointrequest.EndpointRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicEndpoint') }})
    
