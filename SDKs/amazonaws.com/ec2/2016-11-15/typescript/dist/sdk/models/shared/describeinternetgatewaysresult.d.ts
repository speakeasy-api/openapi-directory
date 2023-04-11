import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current state of the attachment. For an internet gateway, the state is <code>available</code> when attached to a VPC; otherwise, this value is not returned.
 */
export declare enum DescribeInternetGatewaysResultInternetGatewaysAttachmentsStateEnum {
    Attaching = "attaching",
    Attached = "attached",
    Detaching = "detaching",
    Detached = "detached"
}
/**
 * Describes the attachment of a VPC to an internet gateway or an egress-only internet gateway.
 */
export declare class DescribeInternetGatewaysResultInternetGatewaysAttachments extends SpeakeasyBase {
    state?: DescribeInternetGatewaysResultInternetGatewaysAttachmentsStateEnum;
    vpcId?: string;
}
/**
 * Describes a tag.
 */
export declare class DescribeInternetGatewaysResultInternetGatewaysTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes an internet gateway.
 */
export declare class DescribeInternetGatewaysResultInternetGateways extends SpeakeasyBase {
    attachments?: DescribeInternetGatewaysResultInternetGatewaysAttachments[];
    internetGatewayId?: string;
    ownerId?: string;
    tags?: DescribeInternetGatewaysResultInternetGatewaysTags[];
}
/**
 * Success
 */
export declare class DescribeInternetGatewaysResult extends SpeakeasyBase {
    internetGateways?: DescribeInternetGatewaysResultInternetGateways[];
    nextToken?: string;
}
