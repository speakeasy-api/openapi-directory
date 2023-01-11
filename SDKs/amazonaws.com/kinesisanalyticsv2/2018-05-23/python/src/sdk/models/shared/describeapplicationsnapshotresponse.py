import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import snapshotdetails as shared_snapshotdetails


@dataclass_json
@dataclasses.dataclass
class DescribeApplicationSnapshotResponse:
    snapshot_details: shared_snapshotdetails.SnapshotDetails = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotDetails') }})
    
