import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Provides details about the routes in the route table.
 */
export declare class RouteSetDetails extends SpeakeasyBase {
    carrierGatewayId?: string;
    coreNetworkArn?: string;
    destinationCidrBlock?: string;
    destinationIpv6CidrBlock?: string;
    destinationPrefixListId?: string;
    egressOnlyInternetGatewayId?: string;
    gatewayId?: string;
    instanceId?: string;
    instanceOwnerId?: string;
    localGatewayId?: string;
    natGatewayId?: string;
    networkInterfaceId?: string;
    origin?: string;
    state?: string;
    transitGatewayId?: string;
    vpcPeeringConnectionId?: string;
}
