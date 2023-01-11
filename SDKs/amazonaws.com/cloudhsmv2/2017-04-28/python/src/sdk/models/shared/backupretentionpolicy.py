import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import backupretentiontype_enum as shared_backupretentiontype_enum


@dataclass_json
@dataclasses.dataclass
class BackupRetentionPolicy:
    r"""BackupRetentionPolicy
    A policy that defines the number of days to retain backups.
    """
    
    type: Optional[shared_backupretentiontype_enum.BackupRetentionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
