import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import backupretentionpolicy as shared_backupretentionpolicy


@dataclass_json
@dataclasses.dataclass
class ModifyClusterRequest:
    backup_retention_policy: shared_backupretentionpolicy.BackupRetentionPolicy = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackupRetentionPolicy') }})
    cluster_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterId') }})
    
