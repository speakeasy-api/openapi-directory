import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current state of the virtual private gateway.
 */
export declare enum CreateVpnGatewayResultVpnGatewayStateEnum {
    Pending = "pending",
    Available = "available",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * Describes a tag.
 */
export declare class CreateVpnGatewayResultVpnGatewayTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The type of VPN connection the virtual private gateway supports.
 */
export declare enum CreateVpnGatewayResultVpnGatewayTypeEnum {
    Ipsec1 = "ipsec.1"
}
/**
 * The current state of the attachment.
 */
export declare enum CreateVpnGatewayResultVpnGatewayVpcAttachmentsStateEnum {
    Attaching = "attaching",
    Attached = "attached",
    Detaching = "detaching",
    Detached = "detached"
}
/**
 * Describes an attachment between a virtual private gateway and a VPC.
 */
export declare class CreateVpnGatewayResultVpnGatewayVpcAttachments extends SpeakeasyBase {
    state?: CreateVpnGatewayResultVpnGatewayVpcAttachmentsStateEnum;
    vpcId?: string;
}
/**
 * Information about the virtual private gateway.
 */
export declare class CreateVpnGatewayResultVpnGateway extends SpeakeasyBase {
    amazonSideAsn?: number;
    availabilityZone?: string;
    state?: CreateVpnGatewayResultVpnGatewayStateEnum;
    tags?: CreateVpnGatewayResultVpnGatewayTags[];
    type?: CreateVpnGatewayResultVpnGatewayTypeEnum;
    vpcAttachments?: CreateVpnGatewayResultVpnGatewayVpcAttachments[];
    vpnGatewayId?: string;
}
/**
 * Contains the output of CreateVpnGateway.
 */
export declare class CreateVpnGatewayResult extends SpeakeasyBase {
    vpnGateway?: CreateVpnGatewayResultVpnGateway;
}
