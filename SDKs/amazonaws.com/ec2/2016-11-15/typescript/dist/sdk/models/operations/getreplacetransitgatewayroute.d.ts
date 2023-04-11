import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETReplaceTransitGatewayRouteActionEnum {
    ReplaceTransitGatewayRoute = "ReplaceTransitGatewayRoute"
}
export declare enum GETReplaceTransitGatewayRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETReplaceTransitGatewayRouteRequest extends SpeakeasyBase {
    action: GETReplaceTransitGatewayRouteActionEnum;
    /**
     * Indicates whether traffic matching this route is to be dropped.
     */
    blackhole?: boolean;
    /**
     * The CIDR range used for the destination match. Routing decisions are based on the most specific match.
     */
    destinationCidrBlock: string;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the attachment.
     */
    transitGatewayAttachmentId?: string;
    /**
     * The ID of the route table.
     */
    transitGatewayRouteTableId: string;
    version: GETReplaceTransitGatewayRouteVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETReplaceTransitGatewayRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
