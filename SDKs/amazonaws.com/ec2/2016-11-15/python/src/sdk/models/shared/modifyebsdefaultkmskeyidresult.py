import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ModifyEbsDefaultKmsKeyIDResult:
    kms_key_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
