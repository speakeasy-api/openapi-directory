import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class BalanceGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    balance_get_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
