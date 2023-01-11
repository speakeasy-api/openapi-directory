import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeNetworkInterfacePermissionsResult:
    r"""DescribeNetworkInterfacePermissionsResult
    Contains the output for DescribeNetworkInterfacePermissions.
    """
    
    network_interface_permissions: Optional[dict[str, Any]] = dataclasses.field(default=None)
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
