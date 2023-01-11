import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class RegistryGetStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    status: Optional[Any] = dataclasses.field(default=None)
    
