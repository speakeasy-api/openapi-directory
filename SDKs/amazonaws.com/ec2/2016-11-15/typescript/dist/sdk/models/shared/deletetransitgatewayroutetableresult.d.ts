import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the deleted transit gateway route table.
**/
export declare class DeleteTransitGatewayRouteTableResultTransitGatewayRouteTable extends SpeakeasyBase {
    creationTime?: Record<string, any>;
    defaultAssociationRouteTable?: Record<string, any>;
    defaultPropagationRouteTable?: Record<string, any>;
    state?: Record<string, any>;
    tags?: Record<string, any>;
    transitGatewayId?: Record<string, any>;
    transitGatewayRouteTableId?: Record<string, any>;
}
export declare class DeleteTransitGatewayRouteTableResult extends SpeakeasyBase {
    transitGatewayRouteTable?: DeleteTransitGatewayRouteTableResultTransitGatewayRouteTable;
}
