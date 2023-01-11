import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ModifyVpcTenancyResult:
    return_value: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
