import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import networkbinding as shared_networkbinding


@dataclass_json
@dataclasses.dataclass
class ContainerStateChange:
    r"""ContainerStateChange
    An object representing a change in state for a container.
    """
    
    container_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerName') }})
    exit_code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exitCode') }})
    image_digest: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageDigest') }})
    network_bindings: Optional[list[shared_networkbinding.NetworkBinding]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkBindings') }})
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    runtime_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeId') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
