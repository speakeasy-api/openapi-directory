import dataclasses
from typing import Optional


@dataclasses.dataclass
class SlotMigration:
    r"""SlotMigration
    Represents the progress of an online resharding operation.
    """
    
    progress_percentage: Optional[float] = dataclasses.field(default=None)
    
