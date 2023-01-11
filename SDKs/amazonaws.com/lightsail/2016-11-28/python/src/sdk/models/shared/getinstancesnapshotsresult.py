import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instancesnapshot as shared_instancesnapshot


@dataclass_json
@dataclasses.dataclass
class GetInstanceSnapshotsResult:
    instance_snapshots: Optional[list[shared_instancesnapshot.InstanceSnapshot]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceSnapshots') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
