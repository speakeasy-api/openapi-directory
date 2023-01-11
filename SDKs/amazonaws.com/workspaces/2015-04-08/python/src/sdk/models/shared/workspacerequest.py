import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tag as shared_tag
from ..shared import workspaceproperties as shared_workspaceproperties


@dataclass_json
@dataclasses.dataclass
class WorkspaceRequest:
    r"""WorkspaceRequest
    Describes the information used to create a WorkSpace.
    """
    
    bundle_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BundleId') }})
    directory_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    user_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserName') }})
    root_volume_encryption_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RootVolumeEncryptionEnabled') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    user_volume_encryption_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserVolumeEncryptionEnabled') }})
    volume_encryption_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumeEncryptionKey') }})
    workspace_properties: Optional[shared_workspaceproperties.WorkspaceProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkspaceProperties') }})
    
