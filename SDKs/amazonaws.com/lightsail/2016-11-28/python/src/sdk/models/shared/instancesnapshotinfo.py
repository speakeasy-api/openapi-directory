import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import diskinfo as shared_diskinfo


@dataclass_json
@dataclasses.dataclass
class InstanceSnapshotInfo:
    r"""InstanceSnapshotInfo
    Describes an instance snapshot.
    """
    
    from_blueprint_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromBlueprintId') }})
    from_bundle_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromBundleId') }})
    from_disk_info: Optional[list[shared_diskinfo.DiskInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromDiskInfo') }})
    
