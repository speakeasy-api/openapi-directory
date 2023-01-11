import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import containerservicehealthcheckconfig as shared_containerservicehealthcheckconfig


@dataclass_json
@dataclasses.dataclass
class EndpointRequest:
    r"""EndpointRequest
    Describes the settings of a public endpoint for an Amazon Lightsail container service.
    """
    
    container_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerName') }})
    container_port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerPort') }})
    health_check: Optional[shared_containerservicehealthcheckconfig.ContainerServiceHealthCheckConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthCheck') }})
    
