import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lifecyclestate_enum as shared_lifecyclestate_enum
from ..shared import posixuser as shared_posixuser
from ..shared import rootdirectory as shared_rootdirectory
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class AccessPointDescription:
    r"""AccessPointDescription
    Provides a description of an EFS file system access point.
    """
    
    access_point_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessPointArn') }})
    access_point_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessPointId') }})
    client_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    file_system_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileSystemId') }})
    life_cycle_state: Optional[shared_lifecyclestate_enum.LifeCycleStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LifeCycleState') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    owner_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerId') }})
    posix_user: Optional[shared_posixuser.PosixUser] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PosixUser') }})
    root_directory: Optional[shared_rootdirectory.RootDirectory] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RootDirectory') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
