import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DescribeApplicationSnapshotRequest:
    application_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationName') }})
    snapshot_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotName') }})
    
