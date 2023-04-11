import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReplaceRouteRequest extends SpeakeasyBase {
    carrierGatewayId?: string;
    coreNetworkArn?: string;
    destinationCidrBlock?: string;
    destinationIpv6CidrBlock?: string;
    destinationPrefixListId?: string;
    dryRun?: boolean;
    egressOnlyInternetGatewayId?: string;
    gatewayId?: string;
    instanceId?: string;
    localGatewayId?: string;
    localTarget?: boolean;
    natGatewayId?: string;
    networkInterfaceId?: string;
    routeTableId: string;
    transitGatewayId?: string;
    vpcEndpointId?: string;
    vpcPeeringConnectionId?: string;
}
