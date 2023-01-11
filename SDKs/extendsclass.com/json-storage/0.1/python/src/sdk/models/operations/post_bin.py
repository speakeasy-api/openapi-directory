import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class PostBinResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_status: Optional[Any] = dataclasses.field(default=None)
    error: Optional[Any] = dataclasses.field(default=None)
    
