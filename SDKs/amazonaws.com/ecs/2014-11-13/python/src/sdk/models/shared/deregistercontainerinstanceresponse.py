import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import containerinstance as shared_containerinstance


@dataclass_json
@dataclasses.dataclass
class DeregisterContainerInstanceResponse:
    container_instance: Optional[shared_containerinstance.ContainerInstance] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerInstance') }})
    
