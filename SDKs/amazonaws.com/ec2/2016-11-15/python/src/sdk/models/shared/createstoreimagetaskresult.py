import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateStoreImageTaskResult:
    object_key: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
