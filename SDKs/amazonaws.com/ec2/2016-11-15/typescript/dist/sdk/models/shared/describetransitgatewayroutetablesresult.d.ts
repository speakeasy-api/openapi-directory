import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the transit gateway route table.
 */
export declare enum DescribeTransitGatewayRouteTablesResultTransitGatewayRouteTablesStateEnum {
    Pending = "pending",
    Available = "available",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * Describes a tag.
 */
export declare class DescribeTransitGatewayRouteTablesResultTransitGatewayRouteTablesTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a transit gateway route table.
 */
export declare class DescribeTransitGatewayRouteTablesResultTransitGatewayRouteTables extends SpeakeasyBase {
    creationTime?: Date;
    defaultAssociationRouteTable?: boolean;
    defaultPropagationRouteTable?: boolean;
    state?: DescribeTransitGatewayRouteTablesResultTransitGatewayRouteTablesStateEnum;
    tags?: DescribeTransitGatewayRouteTablesResultTransitGatewayRouteTablesTags[];
    transitGatewayId?: string;
    transitGatewayRouteTableId?: string;
}
/**
 * Success
 */
export declare class DescribeTransitGatewayRouteTablesResult extends SpeakeasyBase {
    nextToken?: string;
    transitGatewayRouteTables?: DescribeTransitGatewayRouteTablesResultTransitGatewayRouteTables[];
}
