import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCreateLocalGatewayRouteActionEnum {
    CreateLocalGatewayRoute = "CreateLocalGatewayRoute"
}
export declare enum GETCreateLocalGatewayRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETCreateLocalGatewayRouteRequest extends SpeakeasyBase {
    action: GETCreateLocalGatewayRouteActionEnum;
    /**
     * The CIDR range used for destination matches. Routing decisions are based on the most specific match.
     */
    destinationCidrBlock?: string;
    /**
     *  The ID of the prefix list. Use a prefix list in place of <code>DestinationCidrBlock</code>. You cannot use <code>DestinationPrefixListId</code> and <code>DestinationCidrBlock</code> in the same request.
     */
    destinationPrefixListId?: string;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the local gateway route table.
     */
    localGatewayRouteTableId: string;
    /**
     * The ID of the virtual interface group.
     */
    localGatewayVirtualInterfaceGroupId?: string;
    /**
     * The ID of the network interface.
     */
    networkInterfaceId?: string;
    version: GETCreateLocalGatewayRouteVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETCreateLocalGatewayRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
