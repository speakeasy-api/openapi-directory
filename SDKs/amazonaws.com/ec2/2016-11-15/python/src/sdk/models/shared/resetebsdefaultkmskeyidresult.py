import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ResetEbsDefaultKmsKeyIDResult:
    kms_key_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
