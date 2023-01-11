import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import keyvaluepair as shared_keyvaluepair
from ..shared import environmentfile as shared_environmentfile
from ..shared import resourcerequirement as shared_resourcerequirement


@dataclass_json
@dataclasses.dataclass
class ContainerOverride:
    r"""ContainerOverride
    The overrides that should be sent to a container. An empty container override can be passed in. An example of an empty container override would be <code>{\"containerOverrides\": [ ] }</code>. If a non-empty container override is specified, the <code>name</code> parameter must be included.
    """
    
    command: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    cpu: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpu') }})
    environment: Optional[list[shared_keyvaluepair.KeyValuePair]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    environment_files: Optional[list[shared_environmentfile.EnvironmentFile]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentFiles') }})
    memory: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    memory_reservation: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memoryReservation') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_requirements: Optional[list[shared_resourcerequirement.ResourceRequirement]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceRequirements') }})
    
