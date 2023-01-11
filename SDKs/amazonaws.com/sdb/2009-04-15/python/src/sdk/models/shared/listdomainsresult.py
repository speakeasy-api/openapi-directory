import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ListDomainsResult:
    domain_names: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    next_token: Optional[str] = dataclasses.field(default=None)
    
