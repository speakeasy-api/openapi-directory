import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import containerservicedeploymentrequest as shared_containerservicedeploymentrequest
from ..shared import containerservicepowername_enum as shared_containerservicepowername_enum
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateContainerServiceRequest:
    power: shared_containerservicepowername_enum.ContainerServicePowerNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('power') }})
    scale: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scale') }})
    service_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceName') }})
    deployment: Optional[shared_containerservicedeploymentrequest.ContainerServiceDeploymentRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployment') }})
    public_domain_names: Optional[dict[str, list[str]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicDomainNames') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
