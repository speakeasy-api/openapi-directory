import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCreateRouteActionEnum {
    CreateRoute = "CreateRoute"
}
export declare enum GETCreateRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETCreateRouteRequest extends SpeakeasyBase {
    action: GETCreateRouteActionEnum;
    /**
     * <p>The ID of the carrier gateway.</p> <p>You can only use this option when the VPC contains a subnet which is associated with a Wavelength Zone.</p>
     */
    carrierGatewayId?: string;
    /**
     * The Amazon Resource Name (ARN) of the core network.
     */
    coreNetworkArn?: string;
    /**
     * The IPv4 CIDR address block used for the destination match. Routing decisions are based on the most specific match. We modify the specified CIDR block to its canonical form; for example, if you specify <code>100.68.0.18/18</code>, we modify it to <code>100.68.0.0/18</code>.
     */
    destinationCidrBlock?: string;
    /**
     * The IPv6 CIDR block used for the destination match. Routing decisions are based on the most specific match.
     */
    destinationIpv6CidrBlock?: string;
    /**
     * The ID of a prefix list used for the destination match.
     */
    destinationPrefixListId?: string;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * [IPv6 traffic only] The ID of an egress-only internet gateway.
     */
    egressOnlyInternetGatewayId?: string;
    /**
     * The ID of an internet gateway or virtual private gateway attached to your VPC.
     */
    gatewayId?: string;
    /**
     * The ID of a NAT instance in your VPC. The operation fails if you specify an instance ID unless exactly one network interface is attached.
     */
    instanceId?: string;
    /**
     * The ID of the local gateway.
     */
    localGatewayId?: string;
    /**
     * [IPv4 traffic only] The ID of a NAT gateway.
     */
    natGatewayId?: string;
    /**
     * The ID of a network interface.
     */
    networkInterfaceId?: string;
    /**
     * The ID of the route table for the route.
     */
    routeTableId: string;
    /**
     * The ID of a transit gateway.
     */
    transitGatewayId?: string;
    version: GETCreateRouteVersionEnum;
    /**
     * The ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only.
     */
    vpcEndpointId?: string;
    /**
     * The ID of a VPC peering connection.
     */
    vpcPeeringConnectionId?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETCreateRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
