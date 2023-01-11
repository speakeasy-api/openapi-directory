import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteClusterRequest:
    cluster_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterName') }})
    final_snapshot_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FinalSnapshotName') }})
    
