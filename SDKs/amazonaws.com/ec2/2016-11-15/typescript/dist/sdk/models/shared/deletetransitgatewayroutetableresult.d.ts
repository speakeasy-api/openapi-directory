import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the transit gateway route table.
 */
export declare enum DeleteTransitGatewayRouteTableResultTransitGatewayRouteTableStateEnum {
    Pending = "pending",
    Available = "available",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * Describes a tag.
 */
export declare class DeleteTransitGatewayRouteTableResultTransitGatewayRouteTableTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the deleted transit gateway route table.
 */
export declare class DeleteTransitGatewayRouteTableResultTransitGatewayRouteTable extends SpeakeasyBase {
    creationTime?: Date;
    defaultAssociationRouteTable?: boolean;
    defaultPropagationRouteTable?: boolean;
    state?: DeleteTransitGatewayRouteTableResultTransitGatewayRouteTableStateEnum;
    tags?: DeleteTransitGatewayRouteTableResultTransitGatewayRouteTableTags[];
    transitGatewayId?: string;
    transitGatewayRouteTableId?: string;
}
/**
 * Success
 */
export declare class DeleteTransitGatewayRouteTableResult extends SpeakeasyBase {
    transitGatewayRouteTable?: DeleteTransitGatewayRouteTableResultTransitGatewayRouteTable;
}
