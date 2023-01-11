import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import snapshotlimits as shared_snapshotlimits


@dataclass_json
@dataclasses.dataclass
class GetSnapshotLimitsResult:
    r"""GetSnapshotLimitsResult
    Contains the results of the <a>GetSnapshotLimits</a> operation.
    """
    
    snapshot_limits: Optional[shared_snapshotlimits.SnapshotLimits] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotLimits') }})
    
