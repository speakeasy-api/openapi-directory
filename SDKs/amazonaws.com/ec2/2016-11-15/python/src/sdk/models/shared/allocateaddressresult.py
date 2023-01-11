import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class AllocateAddressResult:
    allocation_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    carrier_ip: Optional[dict[str, Any]] = dataclasses.field(default=None)
    customer_owned_ip: Optional[dict[str, Any]] = dataclasses.field(default=None)
    customer_owned_ipv4_pool: Optional[dict[str, Any]] = dataclasses.field(default=None)
    domain: Optional[dict[str, Any]] = dataclasses.field(default=None)
    network_border_group: Optional[dict[str, Any]] = dataclasses.field(default=None)
    public_ip: Optional[dict[str, Any]] = dataclasses.field(default=None)
    public_ipv4_pool: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
