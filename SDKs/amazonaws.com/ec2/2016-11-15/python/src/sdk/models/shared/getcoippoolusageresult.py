import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetCoipPoolUsageResult:
    coip_address_usages: Optional[dict[str, Any]] = dataclasses.field(default=None)
    coip_pool_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    local_gateway_route_table_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
