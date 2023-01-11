import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The VPC attachment options.
**/
export declare class DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions extends SpeakeasyBase {
    applianceModeSupport?: Record<string, any>;
    dnsSupport?: Record<string, any>;
    ipv6Support?: Record<string, any>;
}
/**
 * Information about the deleted VPC attachment.
**/
export declare class DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment extends SpeakeasyBase {
    creationTime?: Record<string, any>;
    options?: DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions;
    state?: Record<string, any>;
    subnetIds?: Record<string, any>;
    tags?: Record<string, any>;
    transitGatewayAttachmentId?: Record<string, any>;
    transitGatewayId?: Record<string, any>;
    vpcId?: Record<string, any>;
    vpcOwnerId?: Record<string, any>;
}
export declare class DeleteTransitGatewayVpcAttachmentResult extends SpeakeasyBase {
    transitGatewayVpcAttachment?: DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment;
}
