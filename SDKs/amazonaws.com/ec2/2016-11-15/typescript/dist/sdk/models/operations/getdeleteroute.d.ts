import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteRouteActionEnum {
    DeleteRoute = "DeleteRoute"
}
export declare enum GETDeleteRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDeleteRouteRequest extends SpeakeasyBase {
    action: GETDeleteRouteActionEnum;
    /**
     * The IPv4 CIDR range for the route. The value you specify must match the CIDR for the route exactly.
     */
    destinationCidrBlock?: string;
    /**
     * The IPv6 CIDR range for the route. The value you specify must match the CIDR for the route exactly.
     */
    destinationIpv6CidrBlock?: string;
    /**
     * The ID of the prefix list for the route.
     */
    destinationPrefixListId?: string;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the route table.
     */
    routeTableId: string;
    version: GETDeleteRouteVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteRouteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
