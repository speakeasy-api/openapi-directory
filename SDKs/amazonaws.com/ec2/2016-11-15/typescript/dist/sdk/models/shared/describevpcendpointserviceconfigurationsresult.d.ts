import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The payer responsibility.
 */
export declare enum DescribeVpcEndpointServiceConfigurationsResultServiceConfigurationsPayerResponsibilityEnum {
    ServiceOwner = "ServiceOwner"
}
/**
 * <p>The verification state of the VPC endpoint service.</p> <p>&gt;Consumers of the endpoint service can use the private name only when the state is <code>verified</code>.</p>
 */
export declare enum DescribeVpcEndpointServiceConfigurationsResultServiceConfigurationsPrivateDnsNameConfigurationStateEnum {
    PendingVerification = "pendingVerification",
    Verified = "verified",
    Failed = "failed"
}
/**
 * Information about the endpoint service private DNS name configuration.
 */
export declare class DescribeVpcEndpointServiceConfigurationsResultServiceConfigurationsPrivateDnsNameConfiguration extends SpeakeasyBase {
    name?: string;
    state?: DescribeVpcEndpointServiceConfigurationsResultServiceConfigurationsPrivateDnsNameConfigurationStateEnum;
    type?: string;
    value?: string;
}
/**
 * The service state.
 */
export declare enum DescribeVpcEndpointServiceConfigurationsResultServiceConfigurationsServiceStateEnum {
    Pending = "Pending",
    Available = "Available",
    Deleting = "Deleting",
    Deleted = "Deleted",
    Failed = "Failed"
}
/**
 * The type of service.
 */
export declare enum DescribeVpcEndpointServiceConfigurationsResultServiceConfigurationsServiceTypeServiceTypeEnum {
    Interface = "Interface",
    Gateway = "Gateway",
    GatewayLoadBalancer = "GatewayLoadBalancer"
}
/**
 * Describes the type of service for a VPC endpoint.
 */
export declare class DescribeVpcEndpointServiceConfigurationsResultServiceConfigurationsServiceType extends SpeakeasyBase {
    serviceType?: DescribeVpcEndpointServiceConfigurationsResultServiceConfigurationsServiceTypeServiceTypeEnum;
}
export declare enum DescribeVpcEndpointServiceConfigurationsResultServiceConfigurationsSupportedIpAddressTypesEnum {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}
/**
 * Describes a tag.
 */
export declare class DescribeVpcEndpointServiceConfigurationsResultServiceConfigurationsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a service configuration for a VPC endpoint service.
 */
export declare class DescribeVpcEndpointServiceConfigurationsResultServiceConfigurations extends SpeakeasyBase {
    acceptanceRequired?: boolean;
    availabilityZones?: string[];
    baseEndpointDnsNames?: string[];
    gatewayLoadBalancerArns?: string[];
    managesVpcEndpoints?: boolean;
    networkLoadBalancerArns?: string[];
    payerResponsibility?: DescribeVpcEndpointServiceConfigurationsResultServiceConfigurationsPayerResponsibilityEnum;
    privateDnsName?: string;
    privateDnsNameConfiguration?: DescribeVpcEndpointServiceConfigurationsResultServiceConfigurationsPrivateDnsNameConfiguration;
    serviceId?: string;
    serviceName?: string;
    serviceState?: DescribeVpcEndpointServiceConfigurationsResultServiceConfigurationsServiceStateEnum;
    serviceType?: DescribeVpcEndpointServiceConfigurationsResultServiceConfigurationsServiceType[];
    supportedIpAddressTypes?: DescribeVpcEndpointServiceConfigurationsResultServiceConfigurationsSupportedIpAddressTypesEnum[];
    tags?: DescribeVpcEndpointServiceConfigurationsResultServiceConfigurationsTags[];
}
/**
 * Success
 */
export declare class DescribeVpcEndpointServiceConfigurationsResult extends SpeakeasyBase {
    nextToken?: string;
    serviceConfigurations?: DescribeVpcEndpointServiceConfigurationsResultServiceConfigurations[];
}
