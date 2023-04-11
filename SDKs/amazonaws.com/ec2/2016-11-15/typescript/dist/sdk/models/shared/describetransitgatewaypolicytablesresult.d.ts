import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the transit gateway policy table
 */
export declare enum DescribeTransitGatewayPolicyTablesResultTransitGatewayPolicyTablesStateEnum {
    Pending = "pending",
    Available = "available",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * Describes a tag.
 */
export declare class DescribeTransitGatewayPolicyTablesResultTransitGatewayPolicyTablesTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a transit gateway policy table.
 */
export declare class DescribeTransitGatewayPolicyTablesResultTransitGatewayPolicyTables extends SpeakeasyBase {
    creationTime?: Date;
    state?: DescribeTransitGatewayPolicyTablesResultTransitGatewayPolicyTablesStateEnum;
    tags?: DescribeTransitGatewayPolicyTablesResultTransitGatewayPolicyTablesTags[];
    transitGatewayId?: string;
    transitGatewayPolicyTableId?: string;
}
/**
 * Success
 */
export declare class DescribeTransitGatewayPolicyTablesResult extends SpeakeasyBase {
    nextToken?: string;
    transitGatewayPolicyTables?: DescribeTransitGatewayPolicyTablesResultTransitGatewayPolicyTables[];
}
