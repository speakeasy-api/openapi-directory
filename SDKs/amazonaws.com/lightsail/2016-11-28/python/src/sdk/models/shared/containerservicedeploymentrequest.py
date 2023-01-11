import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import container as shared_container
from ..shared import endpointrequest as shared_endpointrequest


@dataclass_json
@dataclasses.dataclass
class ContainerServiceDeploymentRequest:
    r"""ContainerServiceDeploymentRequest
    <p>Describes a container deployment configuration of an Amazon Lightsail container service.</p> <p>A deployment specifies the settings, such as the ports and launch command, of containers that are deployed to your container service.</p>
    """
    
    containers: Optional[dict[str, shared_container.Container]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containers') }})
    public_endpoint: Optional[shared_endpointrequest.EndpointRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicEndpoint') }})
    
