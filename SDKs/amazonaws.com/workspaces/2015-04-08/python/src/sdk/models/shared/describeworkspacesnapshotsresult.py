import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import snapshot as shared_snapshot


@dataclass_json
@dataclasses.dataclass
class DescribeWorkspaceSnapshotsResult:
    rebuild_snapshots: Optional[list[shared_snapshot.Snapshot]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RebuildSnapshots') }})
    restore_snapshots: Optional[list[shared_snapshot.Snapshot]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RestoreSnapshots') }})
    
