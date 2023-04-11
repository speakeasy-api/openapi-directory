import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class DescribeLocalGatewaysResultLocalGatewaysTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a local gateway.
 */
export declare class DescribeLocalGatewaysResultLocalGateways extends SpeakeasyBase {
    localGatewayId?: string;
    outpostArn?: string;
    ownerId?: string;
    state?: string;
    tags?: DescribeLocalGatewaysResultLocalGatewaysTags[];
}
/**
 * Success
 */
export declare class DescribeLocalGatewaysResult extends SpeakeasyBase {
    localGateways?: DescribeLocalGatewaysResultLocalGateways[];
    nextToken?: string;
}
