import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the attachment.
**/
export declare class AttachVpnGatewayResultVpcAttachment extends SpeakeasyBase {
    state?: Record<string, any>;
    vpcId?: Record<string, any>;
}
/**
 * Contains the output of AttachVpnGateway.
**/
export declare class AttachVpnGatewayResult extends SpeakeasyBase {
    vpcAttachment?: AttachVpnGatewayResultVpcAttachment;
}
