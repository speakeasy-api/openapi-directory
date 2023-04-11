import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETRejectTransitGatewayPeeringAttachmentActionEnum {
    RejectTransitGatewayPeeringAttachment = "RejectTransitGatewayPeeringAttachment"
}
export declare enum GETRejectTransitGatewayPeeringAttachmentVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETRejectTransitGatewayPeeringAttachmentRequest extends SpeakeasyBase {
    action: GETRejectTransitGatewayPeeringAttachmentActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the transit gateway peering attachment.
     */
    transitGatewayAttachmentId: string;
    version: GETRejectTransitGatewayPeeringAttachmentVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETRejectTransitGatewayPeeringAttachmentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
