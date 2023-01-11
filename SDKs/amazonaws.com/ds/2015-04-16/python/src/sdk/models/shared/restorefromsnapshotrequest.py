import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RestoreFromSnapshotRequest:
    r"""RestoreFromSnapshotRequest
    An object representing the inputs for the <a>RestoreFromSnapshot</a> operation.
    """
    
    snapshot_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotId') }})
    
