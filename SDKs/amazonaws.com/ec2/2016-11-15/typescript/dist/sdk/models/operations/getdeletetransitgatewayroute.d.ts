import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteTransitGatewayRouteActionEnum {
    DeleteTransitGatewayRoute = "DeleteTransitGatewayRoute"
}
export declare enum GETDeleteTransitGatewayRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDeleteTransitGatewayRouteRequest extends SpeakeasyBase {
    action: GETDeleteTransitGatewayRouteActionEnum;
    /**
     * The CIDR range for the route. This must match the CIDR for the route exactly.
     */
    destinationCidrBlock: string;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the transit gateway route table.
     */
    transitGatewayRouteTableId: string;
    version: GETDeleteTransitGatewayRouteVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteTransitGatewayRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
