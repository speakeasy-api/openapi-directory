import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The VPC attachment options.
**/
export declare class RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions extends SpeakeasyBase {
    applianceModeSupport?: Record<string, any>;
    dnsSupport?: Record<string, any>;
    ipv6Support?: Record<string, any>;
}
/**
 * Information about the attachment.
**/
export declare class RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment extends SpeakeasyBase {
    creationTime?: Record<string, any>;
    options?: RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions;
    state?: Record<string, any>;
    subnetIds?: Record<string, any>;
    tags?: Record<string, any>;
    transitGatewayAttachmentId?: Record<string, any>;
    transitGatewayId?: Record<string, any>;
    vpcId?: Record<string, any>;
    vpcOwnerId?: Record<string, any>;
}
export declare class RejectTransitGatewayVpcAttachmentResult extends SpeakeasyBase {
    transitGatewayVpcAttachment?: RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment;
}
