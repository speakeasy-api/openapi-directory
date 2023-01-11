import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteLocalGatewayRouteTableVpcAssociationResultLocalGatewayRouteTableVpcAssociation:
    r"""DeleteLocalGatewayRouteTableVpcAssociationResultLocalGatewayRouteTableVpcAssociation
    Information about the association.
    """
    
    local_gateway_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    local_gateway_route_table_arn: Optional[dict[str, Any]] = dataclasses.field(default=None)
    local_gateway_route_table_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    local_gateway_route_table_vpc_association_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    vpc_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteLocalGatewayRouteTableVpcAssociationResult:
    local_gateway_route_table_vpc_association: Optional[DeleteLocalGatewayRouteTableVpcAssociationResultLocalGatewayRouteTableVpcAssociation] = dataclasses.field(default=None)
    
