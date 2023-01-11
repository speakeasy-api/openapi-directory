import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class AssociateAddressResult:
    association_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
