import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDisableTransitGatewayRouteTablePropagationActionEnum {
    DisableTransitGatewayRouteTablePropagation = "DisableTransitGatewayRouteTablePropagation"
}
export declare enum GETDisableTransitGatewayRouteTablePropagationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDisableTransitGatewayRouteTablePropagationRequest extends SpeakeasyBase {
    action: GETDisableTransitGatewayRouteTablePropagationActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the attachment.
     */
    transitGatewayAttachmentId?: string;
    /**
     * The ID of the route table announcement.
     */
    transitGatewayRouteTableAnnouncementId?: string;
    /**
     * The ID of the propagation route table.
     */
    transitGatewayRouteTableId: string;
    version: GETDisableTransitGatewayRouteTablePropagationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDisableTransitGatewayRouteTablePropagationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
