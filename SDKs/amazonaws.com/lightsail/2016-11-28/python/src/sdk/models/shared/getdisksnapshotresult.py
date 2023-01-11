import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import disksnapshot as shared_disksnapshot


@dataclass_json
@dataclasses.dataclass
class GetDiskSnapshotResult:
    disk_snapshot: Optional[shared_disksnapshot.DiskSnapshot] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskSnapshot') }})
    
