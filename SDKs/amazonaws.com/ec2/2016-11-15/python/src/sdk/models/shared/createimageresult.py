import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateImageResult:
    image_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
