import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class OptionsKeyKeyPathParams:
    key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OptionsKeyKeyRequest:
    path_params: OptionsKeyKeyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class OptionsKeyKeyResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    empty: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
