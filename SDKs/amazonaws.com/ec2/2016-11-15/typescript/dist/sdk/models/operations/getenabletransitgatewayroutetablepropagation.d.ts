import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETEnableTransitGatewayRouteTablePropagationActionEnum {
    EnableTransitGatewayRouteTablePropagation = "EnableTransitGatewayRouteTablePropagation"
}
export declare enum GETEnableTransitGatewayRouteTablePropagationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETEnableTransitGatewayRouteTablePropagationRequest extends SpeakeasyBase {
    action: GETEnableTransitGatewayRouteTablePropagationActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the attachment.
     */
    transitGatewayAttachmentId?: string;
    /**
     * The ID of the transit gateway route table announcement.
     */
    transitGatewayRouteTableAnnouncementId?: string;
    /**
     * The ID of the propagation route table.
     */
    transitGatewayRouteTableId: string;
    version: GETEnableTransitGatewayRouteTablePropagationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETEnableTransitGatewayRouteTablePropagationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
