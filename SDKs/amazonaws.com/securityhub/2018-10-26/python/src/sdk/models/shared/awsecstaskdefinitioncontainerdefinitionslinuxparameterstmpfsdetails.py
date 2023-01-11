import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails:
    r"""AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails
    The container path, mount options, and size (in MiB) of a tmpfs mount.
    """
    
    container_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContainerPath') }})
    mount_options: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MountOptions') }})
    size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Size') }})
    
