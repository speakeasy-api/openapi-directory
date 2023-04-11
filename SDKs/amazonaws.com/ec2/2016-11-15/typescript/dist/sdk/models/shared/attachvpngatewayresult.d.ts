import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current state of the attachment.
 */
export declare enum AttachVpnGatewayResultVpcAttachmentStateEnum {
    Attaching = "attaching",
    Attached = "attached",
    Detaching = "detaching",
    Detached = "detached"
}
/**
 * Information about the attachment.
 */
export declare class AttachVpnGatewayResultVpcAttachment extends SpeakeasyBase {
    state?: AttachVpnGatewayResultVpcAttachmentStateEnum;
    vpcId?: string;
}
/**
 * Contains the output of AttachVpnGateway.
 */
export declare class AttachVpnGatewayResult extends SpeakeasyBase {
    vpcAttachment?: AttachVpnGatewayResultVpcAttachment;
}
