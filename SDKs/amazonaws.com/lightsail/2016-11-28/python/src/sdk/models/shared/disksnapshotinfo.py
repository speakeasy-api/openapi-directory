import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DiskSnapshotInfo:
    r"""DiskSnapshotInfo
    Describes a disk snapshot.
    """
    
    size_in_gb: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeInGb') }})
    
