import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import slotmigration as shared_slotmigration


@dataclass_json
@dataclasses.dataclass
class ReshardingStatus:
    r"""ReshardingStatus
    The status of the online resharding
    """
    
    slot_migration: Optional[shared_slotmigration.SlotMigration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SlotMigration') }})
    
