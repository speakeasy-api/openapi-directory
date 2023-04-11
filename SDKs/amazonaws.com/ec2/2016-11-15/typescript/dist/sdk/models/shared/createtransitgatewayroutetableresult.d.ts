import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the transit gateway route table.
 */
export declare enum CreateTransitGatewayRouteTableResultTransitGatewayRouteTableStateEnum {
    Pending = "pending",
    Available = "available",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * Describes a tag.
 */
export declare class CreateTransitGatewayRouteTableResultTransitGatewayRouteTableTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the transit gateway route table.
 */
export declare class CreateTransitGatewayRouteTableResultTransitGatewayRouteTable extends SpeakeasyBase {
    creationTime?: Date;
    defaultAssociationRouteTable?: boolean;
    defaultPropagationRouteTable?: boolean;
    state?: CreateTransitGatewayRouteTableResultTransitGatewayRouteTableStateEnum;
    tags?: CreateTransitGatewayRouteTableResultTransitGatewayRouteTableTags[];
    transitGatewayId?: string;
    transitGatewayRouteTableId?: string;
}
/**
 * Success
 */
export declare class CreateTransitGatewayRouteTableResult extends SpeakeasyBase {
    transitGatewayRouteTable?: CreateTransitGatewayRouteTableResultTransitGatewayRouteTable;
}
