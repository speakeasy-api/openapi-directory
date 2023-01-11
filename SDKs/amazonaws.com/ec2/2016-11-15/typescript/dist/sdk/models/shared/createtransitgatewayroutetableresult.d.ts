import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the transit gateway route table.
**/
export declare class CreateTransitGatewayRouteTableResultTransitGatewayRouteTable extends SpeakeasyBase {
    creationTime?: Record<string, any>;
    defaultAssociationRouteTable?: Record<string, any>;
    defaultPropagationRouteTable?: Record<string, any>;
    state?: Record<string, any>;
    tags?: Record<string, any>;
    transitGatewayId?: Record<string, any>;
    transitGatewayRouteTableId?: Record<string, any>;
}
export declare class CreateTransitGatewayRouteTableResult extends SpeakeasyBase {
    transitGatewayRouteTable?: CreateTransitGatewayRouteTableResultTransitGatewayRouteTable;
}
