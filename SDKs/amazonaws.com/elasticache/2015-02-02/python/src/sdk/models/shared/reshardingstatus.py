import dataclasses
from typing import Optional
from ..shared import slotmigration as shared_slotmigration


@dataclasses.dataclass
class ReshardingStatus:
    r"""ReshardingStatus
    The status of an online resharding operation.
    """
    
    slot_migration: Optional[shared_slotmigration.SlotMigration] = dataclasses.field(default=None)
    
