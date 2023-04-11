import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GETModifyTransitGatewayVpcAttachmentActionEnum {
    ModifyTransitGatewayVpcAttachment = "ModifyTransitGatewayVpcAttachment"
}
/**
 * Describes the options for a VPC attachment.
 */
export declare class GETModifyTransitGatewayVpcAttachmentOptions extends SpeakeasyBase {
    applianceModeSupport?: shared.ApplianceModeSupportValueEnum;
    dnsSupport?: shared.DnsSupportValueEnum;
    ipv6Support?: shared.Ipv6SupportValueEnum;
}
export declare enum GETModifyTransitGatewayVpcAttachmentVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETModifyTransitGatewayVpcAttachmentRequest extends SpeakeasyBase {
    action: GETModifyTransitGatewayVpcAttachmentActionEnum;
    /**
     * The IDs of one or more subnets to add. You can specify at most one subnet per Availability Zone.
     */
    addSubnetIds?: string[];
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The new VPC attachment options.
     */
    options?: GETModifyTransitGatewayVpcAttachmentOptions;
    /**
     * The IDs of one or more subnets to remove.
     */
    removeSubnetIds?: string[];
    /**
     * The ID of the attachment.
     */
    transitGatewayAttachmentId: string;
    version: GETModifyTransitGatewayVpcAttachmentVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyTransitGatewayVpcAttachmentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
