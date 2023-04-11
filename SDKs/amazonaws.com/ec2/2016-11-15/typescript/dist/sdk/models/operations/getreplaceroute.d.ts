import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETReplaceRouteActionEnum {
    ReplaceRoute = "ReplaceRoute"
}
export declare enum GETReplaceRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETReplaceRouteRequest extends SpeakeasyBase {
    action: GETReplaceRouteActionEnum;
    /**
     * [IPv4 traffic only] The ID of a carrier gateway.
     */
    carrierGatewayId?: string;
    /**
     * The Amazon Resource Name (ARN) of the core network.
     */
    coreNetworkArn?: string;
    /**
     * The IPv4 CIDR address block used for the destination match. The value that you provide must match the CIDR of an existing route in the table.
     */
    destinationCidrBlock?: string;
    /**
     * The IPv6 CIDR address block used for the destination match. The value that you provide must match the CIDR of an existing route in the table.
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
     * [IPv6 traffic only] The ID of an egress-only internet gateway.
     */
    egressOnlyInternetGatewayId?: string;
    /**
     * The ID of an internet gateway or virtual private gateway.
     */
    gatewayId?: string;
    /**
     * The ID of a NAT instance in your VPC.
     */
    instanceId?: string;
    /**
     * The ID of the local gateway.
     */
    localGatewayId?: string;
    /**
     * Specifies whether to reset the local route to its default target (<code>local</code>).
     */
    localTarget?: boolean;
    /**
     * [IPv4 traffic only] The ID of a NAT gateway.
     */
    natGatewayId?: string;
    /**
     * The ID of a network interface.
     */
    networkInterfaceId?: string;
    /**
     * The ID of the route table.
     */
    routeTableId: string;
    /**
     * The ID of a transit gateway.
     */
    transitGatewayId?: string;
    version: GETReplaceRouteVersionEnum;
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
export declare class GETReplaceRouteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
