import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The mode of the local gateway route table.
 */
export declare enum DescribeLocalGatewayRouteTablesResultLocalGatewayRouteTablesModeEnum {
    DirectVpcRouting = "direct-vpc-routing",
    Coip = "coip"
}
/**
 * Information about the state change.
 */
export declare class DescribeLocalGatewayRouteTablesResultLocalGatewayRouteTablesStateReason extends SpeakeasyBase {
    code?: string;
    message?: string;
}
/**
 * Describes a tag.
 */
export declare class DescribeLocalGatewayRouteTablesResultLocalGatewayRouteTablesTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a local gateway route table.
 */
export declare class DescribeLocalGatewayRouteTablesResultLocalGatewayRouteTables extends SpeakeasyBase {
    localGatewayId?: string;
    localGatewayRouteTableArn?: string;
    localGatewayRouteTableId?: string;
    mode?: DescribeLocalGatewayRouteTablesResultLocalGatewayRouteTablesModeEnum;
    outpostArn?: string;
    ownerId?: string;
    state?: string;
    stateReason?: DescribeLocalGatewayRouteTablesResultLocalGatewayRouteTablesStateReason;
    tags?: DescribeLocalGatewayRouteTablesResultLocalGatewayRouteTablesTags[];
}
/**
 * Success
 */
export declare class DescribeLocalGatewayRouteTablesResult extends SpeakeasyBase {
    localGatewayRouteTables?: DescribeLocalGatewayRouteTablesResultLocalGatewayRouteTables[];
    nextToken?: string;
}
