import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The payer responsibility.
 */
export declare enum CreateVpcEndpointServiceConfigurationResultServiceConfigurationPayerResponsibilityEnum {
    ServiceOwner = "ServiceOwner"
}
/**
 * <p>The verification state of the VPC endpoint service.</p> <p>&gt;Consumers of the endpoint service can use the private name only when the state is <code>verified</code>.</p>
 */
export declare enum CreateVpcEndpointServiceConfigurationResultServiceConfigurationPrivateDnsNameConfigurationStateEnum {
    PendingVerification = "pendingVerification",
    Verified = "verified",
    Failed = "failed"
}
/**
 * Information about the endpoint service private DNS name configuration.
 */
export declare class CreateVpcEndpointServiceConfigurationResultServiceConfigurationPrivateDnsNameConfiguration extends SpeakeasyBase {
    name?: string;
    state?: CreateVpcEndpointServiceConfigurationResultServiceConfigurationPrivateDnsNameConfigurationStateEnum;
    type?: string;
    value?: string;
}
/**
 * The service state.
 */
export declare enum CreateVpcEndpointServiceConfigurationResultServiceConfigurationServiceStateEnum {
    Pending = "Pending",
    Available = "Available",
    Deleting = "Deleting",
    Deleted = "Deleted",
    Failed = "Failed"
}
/**
 * The type of service.
 */
export declare enum CreateVpcEndpointServiceConfigurationResultServiceConfigurationServiceTypeServiceTypeEnum {
    Interface = "Interface",
    Gateway = "Gateway",
    GatewayLoadBalancer = "GatewayLoadBalancer"
}
/**
 * Describes the type of service for a VPC endpoint.
 */
export declare class CreateVpcEndpointServiceConfigurationResultServiceConfigurationServiceType extends SpeakeasyBase {
    serviceType?: CreateVpcEndpointServiceConfigurationResultServiceConfigurationServiceTypeServiceTypeEnum;
}
export declare enum CreateVpcEndpointServiceConfigurationResultServiceConfigurationSupportedIpAddressTypesEnum {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}
/**
 * Describes a tag.
 */
export declare class CreateVpcEndpointServiceConfigurationResultServiceConfigurationTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the service configuration.
 */
export declare class CreateVpcEndpointServiceConfigurationResultServiceConfiguration extends SpeakeasyBase {
    acceptanceRequired?: boolean;
    availabilityZones?: string[];
    baseEndpointDnsNames?: string[];
    gatewayLoadBalancerArns?: string[];
    managesVpcEndpoints?: boolean;
    networkLoadBalancerArns?: string[];
    payerResponsibility?: CreateVpcEndpointServiceConfigurationResultServiceConfigurationPayerResponsibilityEnum;
    privateDnsName?: string;
    privateDnsNameConfiguration?: CreateVpcEndpointServiceConfigurationResultServiceConfigurationPrivateDnsNameConfiguration;
    serviceId?: string;
    serviceName?: string;
    serviceState?: CreateVpcEndpointServiceConfigurationResultServiceConfigurationServiceStateEnum;
    serviceType?: CreateVpcEndpointServiceConfigurationResultServiceConfigurationServiceType[];
    supportedIpAddressTypes?: CreateVpcEndpointServiceConfigurationResultServiceConfigurationSupportedIpAddressTypesEnum[];
    tags?: CreateVpcEndpointServiceConfigurationResultServiceConfigurationTags[];
}
/**
 * Success
 */
export declare class CreateVpcEndpointServiceConfigurationResult extends SpeakeasyBase {
    clientToken?: string;
    serviceConfiguration?: CreateVpcEndpointServiceConfigurationResultServiceConfiguration;
}
