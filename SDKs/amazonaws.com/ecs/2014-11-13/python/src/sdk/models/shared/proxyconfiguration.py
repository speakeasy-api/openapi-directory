import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import proxyconfigurationtype_enum as shared_proxyconfigurationtype_enum


@dataclass_json
@dataclasses.dataclass
class ProxyConfiguration:
    r"""ProxyConfiguration
    <p>The configuration details for the App Mesh proxy.</p> <p>For tasks using the EC2 launch type, the container instances require at least version 1.26.0 of the container agent and at least version 1.26.0-1 of the <code>ecs-init</code> package to enable a proxy configuration. If your container instances are launched from the Amazon ECS-optimized AMI version <code>20190301</code> or later, then they contain the required versions of the container agent and <code>ecs-init</code>. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html\">Amazon ECS-optimized Linux AMI</a> </p>
    """
    
    container_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerName') }})
    properties: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    type: Optional[shared_proxyconfigurationtype_enum.ProxyConfigurationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
