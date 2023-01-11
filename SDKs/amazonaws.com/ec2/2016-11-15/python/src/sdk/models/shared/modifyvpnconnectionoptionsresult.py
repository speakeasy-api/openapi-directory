import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ModifyVpnConnectionOptionsResultVpnConnectionOptions:
    r"""ModifyVpnConnectionOptionsResultVpnConnectionOptions
    The VPN connection options.
    """
    
    enable_acceleration: Optional[dict[str, Any]] = dataclasses.field(default=None)
    local_ipv4_network_cidr: Optional[dict[str, Any]] = dataclasses.field(default=None)
    local_ipv6_network_cidr: Optional[dict[str, Any]] = dataclasses.field(default=None)
    remote_ipv4_network_cidr: Optional[dict[str, Any]] = dataclasses.field(default=None)
    remote_ipv6_network_cidr: Optional[dict[str, Any]] = dataclasses.field(default=None)
    static_routes_only: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tunnel_inside_ip_version: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tunnel_options: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ModifyVpnConnectionOptionsResultVpnConnection:
    r"""ModifyVpnConnectionOptionsResultVpnConnection
    Describes a VPN connection.
    """
    
    category: Optional[dict[str, Any]] = dataclasses.field(default=None)
    customer_gateway_configuration: Optional[dict[str, Any]] = dataclasses.field(default=None)
    customer_gateway_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    options: Optional[ModifyVpnConnectionOptionsResultVpnConnectionOptions] = dataclasses.field(default=None)
    routes: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    vgw_telemetry: Optional[dict[str, Any]] = dataclasses.field(default=None)
    vpn_connection_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    vpn_gateway_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ModifyVpnConnectionOptionsResult:
    vpn_connection: Optional[ModifyVpnConnectionOptionsResultVpnConnection] = dataclasses.field(default=None)
    
