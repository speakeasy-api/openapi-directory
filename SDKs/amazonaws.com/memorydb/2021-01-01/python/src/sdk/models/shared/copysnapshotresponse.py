import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import snapshot as shared_snapshot


@dataclass_json
@dataclasses.dataclass
class CopySnapshotResponse:
    snapshot: Optional[shared_snapshot.Snapshot] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Snapshot') }})
    
