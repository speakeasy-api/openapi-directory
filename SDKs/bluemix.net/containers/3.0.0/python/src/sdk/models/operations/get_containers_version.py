import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetContainersVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    containers_version_get_info: Optional[Any] = dataclasses.field(default=None)
    
