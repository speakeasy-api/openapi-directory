import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetEbsEncryptionByDefaultResult:
    ebs_encryption_by_default: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
