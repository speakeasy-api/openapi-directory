import { SpeakeasyBase } from "../../../internal/utils";
export declare class ModifyVpcEndpointServiceConfigurationRequest extends SpeakeasyBase {
    acceptanceRequired?: boolean;
    addGatewayLoadBalancerArns?: string[];
    addNetworkLoadBalancerArns?: string[];
    addSupportedIpAddressTypes?: string[];
    dryRun?: boolean;
    privateDnsName?: string;
    removeGatewayLoadBalancerArns?: string[];
    removeNetworkLoadBalancerArns?: string[];
    removePrivateDnsName?: boolean;
    removeSupportedIpAddressTypes?: string[];
    serviceId: string;
}
