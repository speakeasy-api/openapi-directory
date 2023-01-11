import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateNetworkInterfacePermissionResultInterfacePermissionPermissionState:
    r"""CreateNetworkInterfacePermissionResultInterfacePermissionPermissionState
    Information about the state of the permission.
    """
    
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    status_message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateNetworkInterfacePermissionResultInterfacePermission:
    r"""CreateNetworkInterfacePermissionResultInterfacePermission
    Information about the permission for the network interface.
    """
    
    aws_account_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    aws_service: Optional[dict[str, Any]] = dataclasses.field(default=None)
    network_interface_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    network_interface_permission_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    permission: Optional[dict[str, Any]] = dataclasses.field(default=None)
    permission_state: Optional[CreateNetworkInterfacePermissionResultInterfacePermissionPermissionState] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateNetworkInterfacePermissionResult:
    r"""CreateNetworkInterfacePermissionResult
    Contains the output of CreateNetworkInterfacePermission.
    """
    
    interface_permission: Optional[CreateNetworkInterfacePermissionResultInterfacePermission] = dataclasses.field(default=None)
    
