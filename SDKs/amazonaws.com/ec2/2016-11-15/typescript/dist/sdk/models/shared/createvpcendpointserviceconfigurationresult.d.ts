import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the endpoint service private DNS name configuration.
**/
export declare class CreateVpcEndpointServiceConfigurationResultServiceConfigurationPrivateDnsNameConfiguration extends SpeakeasyBase {
    name?: Record<string, any>;
    state?: Record<string, any>;
    type?: Record<string, any>;
    value?: Record<string, any>;
}
/**
 * Information about the service configuration.
**/
export declare class CreateVpcEndpointServiceConfigurationResultServiceConfiguration extends SpeakeasyBase {
    acceptanceRequired?: Record<string, any>;
    availabilityZones?: Record<string, any>;
    baseEndpointDnsNames?: Record<string, any>;
    gatewayLoadBalancerArns?: Record<string, any>;
    managesVpcEndpoints?: Record<string, any>;
    networkLoadBalancerArns?: Record<string, any>;
    privateDnsName?: Record<string, any>;
    privateDnsNameConfiguration?: CreateVpcEndpointServiceConfigurationResultServiceConfigurationPrivateDnsNameConfiguration;
    serviceId?: Record<string, any>;
    serviceName?: Record<string, any>;
    serviceState?: Record<string, any>;
    serviceType?: Record<string, any>;
    tags?: Record<string, any>;
}
export declare class CreateVpcEndpointServiceConfigurationResult extends SpeakeasyBase {
    clientToken?: Record<string, any>;
    serviceConfiguration?: CreateVpcEndpointServiceConfigurationResultServiceConfiguration;
}
