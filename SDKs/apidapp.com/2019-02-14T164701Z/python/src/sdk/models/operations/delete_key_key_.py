import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteKeyKeyPathParams:
    key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteKeyKeyRequest:
    path_params: DeleteKeyKeyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteKeyKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    empty: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
