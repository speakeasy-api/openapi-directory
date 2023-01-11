import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import containerservicehealthcheckconfig as shared_containerservicehealthcheckconfig


@dataclass_json
@dataclasses.dataclass
class ContainerServiceEndpoint:
    r"""ContainerServiceEndpoint
    Describes the public endpoint configuration of a deployment of an Amazon Lightsail container service.
    """
    
    container_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerName') }})
    container_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerPort') }})
    health_check: Optional[shared_containerservicehealthcheckconfig.ContainerServiceHealthCheckConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthCheck') }})
    
