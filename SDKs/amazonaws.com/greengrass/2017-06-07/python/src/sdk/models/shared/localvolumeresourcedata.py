import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import groupownersetting as shared_groupownersetting


@dataclass_json
@dataclasses.dataclass
class LocalVolumeResourceData:
    r"""LocalVolumeResourceData
    Attributes that define a local volume resource.
    """
    
    destination_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationPath') }})
    group_owner_setting: Optional[shared_groupownersetting.GroupOwnerSetting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupOwnerSetting') }})
    source_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourcePath') }})
    
