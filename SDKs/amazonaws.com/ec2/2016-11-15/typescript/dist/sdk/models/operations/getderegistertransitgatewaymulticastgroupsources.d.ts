import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeregisterTransitGatewayMulticastGroupSourcesActionEnum {
    DeregisterTransitGatewayMulticastGroupSources = "DeregisterTransitGatewayMulticastGroupSources"
}
export declare enum GETDeregisterTransitGatewayMulticastGroupSourcesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDeregisterTransitGatewayMulticastGroupSourcesRequest extends SpeakeasyBase {
    action: GETDeregisterTransitGatewayMulticastGroupSourcesActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The IP address assigned to the transit gateway multicast group.
     */
    groupIpAddress?: string;
    /**
     * The IDs of the group sources' network interfaces.
     */
    networkInterfaceIds?: string[];
    /**
     * The ID of the transit gateway multicast domain.
     */
    transitGatewayMulticastDomainId?: string;
    version: GETDeregisterTransitGatewayMulticastGroupSourcesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeregisterTransitGatewayMulticastGroupSourcesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
