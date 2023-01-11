import dataclasses
from typing import Optional


@dataclasses.dataclass
class CustomerStorageMessage:
    total_backup_size_in_mega_bytes: Optional[float] = dataclasses.field(default=None)
    total_provisioned_storage_in_mega_bytes: Optional[float] = dataclasses.field(default=None)
    
