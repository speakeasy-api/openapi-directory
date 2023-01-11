import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Tmpfs:
    r"""Tmpfs
    <p>The container path, mount options, and size of the tmpfs mount.</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources.</p> </note>
    """
    
    container_path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerPath') }})
    size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    mount_options: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mountOptions') }})
    
