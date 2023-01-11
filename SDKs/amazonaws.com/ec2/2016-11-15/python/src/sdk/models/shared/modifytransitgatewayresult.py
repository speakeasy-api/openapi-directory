import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ModifyTransitGatewayResultTransitGatewayOptions:
    r"""ModifyTransitGatewayResultTransitGatewayOptions
    The transit gateway options.
    """
    
    amazon_side_asn: Optional[dict[str, Any]] = dataclasses.field(default=None)
    association_default_route_table_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    auto_accept_shared_attachments: Optional[dict[str, Any]] = dataclasses.field(default=None)
    default_route_table_association: Optional[dict[str, Any]] = dataclasses.field(default=None)
    default_route_table_propagation: Optional[dict[str, Any]] = dataclasses.field(default=None)
    dns_support: Optional[dict[str, Any]] = dataclasses.field(default=None)
    multicast_support: Optional[dict[str, Any]] = dataclasses.field(default=None)
    propagation_default_route_table_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_cidr_blocks: Optional[dict[str, Any]] = dataclasses.field(default=None)
    vpn_ecmp_support: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ModifyTransitGatewayResultTransitGateway:
    r"""ModifyTransitGatewayResultTransitGateway
    Describes a transit gateway.
    """
    
    creation_time: Optional[dict[str, Any]] = dataclasses.field(default=None)
    description: Optional[dict[str, Any]] = dataclasses.field(default=None)
    options: Optional[ModifyTransitGatewayResultTransitGatewayOptions] = dataclasses.field(default=None)
    owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_arn: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ModifyTransitGatewayResult:
    transit_gateway: Optional[ModifyTransitGatewayResultTransitGateway] = dataclasses.field(default=None)
    
