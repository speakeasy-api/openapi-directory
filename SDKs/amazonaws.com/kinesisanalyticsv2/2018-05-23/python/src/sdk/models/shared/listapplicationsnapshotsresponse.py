import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import snapshotdetails as shared_snapshotdetails


@dataclass_json
@dataclasses.dataclass
class ListApplicationSnapshotsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    snapshot_summaries: Optional[list[shared_snapshotdetails.SnapshotDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotSummaries') }})
    
