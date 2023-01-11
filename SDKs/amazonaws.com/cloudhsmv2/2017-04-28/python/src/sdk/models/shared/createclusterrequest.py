import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import backupretentionpolicy as shared_backupretentionpolicy
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateClusterRequest:
    hsm_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HsmType') }})
    subnet_ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetIds') }})
    backup_retention_policy: Optional[shared_backupretentionpolicy.BackupRetentionPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackupRetentionPolicy') }})
    source_backup_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceBackupId') }})
    tag_list: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagList') }})
    
