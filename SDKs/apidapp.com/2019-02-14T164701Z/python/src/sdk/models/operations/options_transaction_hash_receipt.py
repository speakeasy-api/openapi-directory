import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class OptionsTransactionHashReceiptPathParams:
    hash: str = dataclasses.field(metadata={'path_param': { 'field_name': 'hash', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OptionsTransactionHashReceiptRequest:
    path_params: OptionsTransactionHashReceiptPathParams = dataclasses.field()
    

@dataclasses.dataclass
class OptionsTransactionHashReceiptResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    empty: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
