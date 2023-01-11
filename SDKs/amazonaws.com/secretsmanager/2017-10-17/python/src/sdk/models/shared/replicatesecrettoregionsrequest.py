import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import replicaregiontype as shared_replicaregiontype


@dataclass_json
@dataclasses.dataclass
class ReplicateSecretToRegionsRequest:
    add_replica_regions: list[shared_replicaregiontype.ReplicaRegionType] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddReplicaRegions') }})
    secret_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretId') }})
    force_overwrite_replica_secret: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ForceOverwriteReplicaSecret') }})
    
