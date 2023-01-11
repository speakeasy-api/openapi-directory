import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetBatchesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    array_of_batch: Optional[Any] = dataclasses.field(default=None)
    
