import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current state of the virtual private gateway.
 */
export declare enum DescribeVpnGatewaysResultVpnGatewaysStateEnum {
    Pending = "pending",
    Available = "available",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * Describes a tag.
 */
export declare class DescribeVpnGatewaysResultVpnGatewaysTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The type of VPN connection the virtual private gateway supports.
 */
export declare enum DescribeVpnGatewaysResultVpnGatewaysTypeEnum {
    Ipsec1 = "ipsec.1"
}
/**
 * The current state of the attachment.
 */
export declare enum DescribeVpnGatewaysResultVpnGatewaysVpcAttachmentsStateEnum {
    Attaching = "attaching",
    Attached = "attached",
    Detaching = "detaching",
    Detached = "detached"
}
/**
 * Describes an attachment between a virtual private gateway and a VPC.
 */
export declare class DescribeVpnGatewaysResultVpnGatewaysVpcAttachments extends SpeakeasyBase {
    state?: DescribeVpnGatewaysResultVpnGatewaysVpcAttachmentsStateEnum;
    vpcId?: string;
}
/**
 * Describes a virtual private gateway.
 */
export declare class DescribeVpnGatewaysResultVpnGateways extends SpeakeasyBase {
    amazonSideAsn?: number;
    availabilityZone?: string;
    state?: DescribeVpnGatewaysResultVpnGatewaysStateEnum;
    tags?: DescribeVpnGatewaysResultVpnGatewaysTags[];
    type?: DescribeVpnGatewaysResultVpnGatewaysTypeEnum;
    vpcAttachments?: DescribeVpnGatewaysResultVpnGatewaysVpcAttachments[];
    vpnGatewayId?: string;
}
/**
 * Contains the output of DescribeVpnGateways.
 */
export declare class DescribeVpnGatewaysResult extends SpeakeasyBase {
    vpnGateways?: DescribeVpnGatewaysResultVpnGateways[];
}
