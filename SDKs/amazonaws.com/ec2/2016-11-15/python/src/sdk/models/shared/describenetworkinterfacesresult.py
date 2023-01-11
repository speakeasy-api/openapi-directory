import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeNetworkInterfacesResult:
    r"""DescribeNetworkInterfacesResult
    Contains the output of DescribeNetworkInterfaces.
    """
    
    network_interfaces: Optional[dict[str, Any]] = dataclasses.field(default=None)
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
