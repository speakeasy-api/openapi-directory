import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ImportKeyPairResult:
    key_fingerprint: Optional[dict[str, Any]] = dataclasses.field(default=None)
    key_name: Optional[dict[str, Any]] = dataclasses.field(default=None)
    key_pair_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
