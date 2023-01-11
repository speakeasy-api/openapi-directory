import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class UnassignIpv6AddressesResult:
    network_interface_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    unassigned_ipv6_addresses: Optional[dict[str, Any]] = dataclasses.field(default=None)
    unassigned_ipv6_prefixes: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
