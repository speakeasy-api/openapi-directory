import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class AssignIpv6AddressesResult:
    assigned_ipv6_addresses: Optional[dict[str, Any]] = dataclasses.field(default=None)
    assigned_ipv6_prefixes: Optional[dict[str, Any]] = dataclasses.field(default=None)
    network_interface_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
