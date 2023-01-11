import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateSnapshotRequest:
    cluster_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterName') }})
    snapshot_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotName') }})
    kms_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
