import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current state of the attachment. For an internet gateway, the state is <code>available</code> when attached to a VPC; otherwise, this value is not returned.
 */
export declare enum DescribeEgressOnlyInternetGatewaysResultEgressOnlyInternetGatewaysAttachmentsStateEnum {
    Attaching = "attaching",
    Attached = "attached",
    Detaching = "detaching",
    Detached = "detached"
}
/**
 * Describes the attachment of a VPC to an internet gateway or an egress-only internet gateway.
 */
export declare class DescribeEgressOnlyInternetGatewaysResultEgressOnlyInternetGatewaysAttachments extends SpeakeasyBase {
    state?: DescribeEgressOnlyInternetGatewaysResultEgressOnlyInternetGatewaysAttachmentsStateEnum;
    vpcId?: string;
}
/**
 * Describes a tag.
 */
export declare class DescribeEgressOnlyInternetGatewaysResultEgressOnlyInternetGatewaysTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes an egress-only internet gateway.
 */
export declare class DescribeEgressOnlyInternetGatewaysResultEgressOnlyInternetGateways extends SpeakeasyBase {
    attachments?: DescribeEgressOnlyInternetGatewaysResultEgressOnlyInternetGatewaysAttachments[];
    egressOnlyInternetGatewayId?: string;
    tags?: DescribeEgressOnlyInternetGatewaysResultEgressOnlyInternetGatewaysTags[];
}
/**
 * Success
 */
export declare class DescribeEgressOnlyInternetGatewaysResult extends SpeakeasyBase {
    egressOnlyInternetGateways?: DescribeEgressOnlyInternetGatewaysResultEgressOnlyInternetGateways[];
    nextToken?: string;
}
