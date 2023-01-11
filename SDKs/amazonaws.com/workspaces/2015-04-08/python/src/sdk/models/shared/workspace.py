import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import modificationstate as shared_modificationstate
from ..shared import workspacestate_enum as shared_workspacestate_enum
from ..shared import workspaceproperties as shared_workspaceproperties


@dataclass_json
@dataclasses.dataclass
class Workspace:
    r"""Workspace
    Describes a WorkSpace.
    """
    
    bundle_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BundleId') }})
    computer_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComputerName') }})
    directory_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    error_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorCode') }})
    error_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorMessage') }})
    ip_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpAddress') }})
    modification_states: Optional[list[shared_modificationstate.ModificationState]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModificationStates') }})
    root_volume_encryption_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RootVolumeEncryptionEnabled') }})
    state: Optional[shared_workspacestate_enum.WorkspaceStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    subnet_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetId') }})
    user_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserName') }})
    user_volume_encryption_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserVolumeEncryptionEnabled') }})
    volume_encryption_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumeEncryptionKey') }})
    workspace_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkspaceId') }})
    workspace_properties: Optional[shared_workspaceproperties.WorkspaceProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkspaceProperties') }})
    
