import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class AssignPrivateIPAddressesResult:
    assigned_ipv4_prefixes: Optional[dict[str, Any]] = dataclasses.field(default=None)
    assigned_private_ip_addresses: Optional[dict[str, Any]] = dataclasses.field(default=None)
    network_interface_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
