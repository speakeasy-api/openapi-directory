import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The VPC attachment options.
**/
export declare class AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions extends SpeakeasyBase {
    applianceModeSupport?: Record<string, any>;
    dnsSupport?: Record<string, any>;
    ipv6Support?: Record<string, any>;
}
/**
 * The VPC attachment.
**/
export declare class AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment extends SpeakeasyBase {
    creationTime?: Record<string, any>;
    options?: AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions;
    state?: Record<string, any>;
    subnetIds?: Record<string, any>;
    tags?: Record<string, any>;
    transitGatewayAttachmentId?: Record<string, any>;
    transitGatewayId?: Record<string, any>;
    vpcId?: Record<string, any>;
    vpcOwnerId?: Record<string, any>;
}
export declare class AcceptTransitGatewayVpcAttachmentResult extends SpeakeasyBase {
    transitGatewayVpcAttachment?: AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment;
}
