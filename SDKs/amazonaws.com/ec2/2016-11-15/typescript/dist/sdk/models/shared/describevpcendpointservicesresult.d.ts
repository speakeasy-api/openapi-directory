import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The payer responsibility.
 */
export declare enum DescribeVpcEndpointServicesResultServiceDetailsPayerResponsibilityEnum {
    ServiceOwner = "ServiceOwner"
}
/**
 * <p>The verification state of the VPC endpoint service.</p> <p>Consumers of the endpoint service cannot use the private name when the state is not <code>verified</code>.</p>
 */
export declare enum DescribeVpcEndpointServicesResultServiceDetailsPrivateDnsNameVerificationStateEnum {
    PendingVerification = "pendingVerification",
    Verified = "verified",
    Failed = "failed"
}
/**
 * Information about the Private DNS name for interface endpoints.
 */
export declare class DescribeVpcEndpointServicesResultServiceDetailsPrivateDnsNames extends SpeakeasyBase {
    privateDnsName?: string;
}
/**
 * The type of service.
 */
export declare enum DescribeVpcEndpointServicesResultServiceDetailsServiceTypeServiceTypeEnum {
    Interface = "Interface",
    Gateway = "Gateway",
    GatewayLoadBalancer = "GatewayLoadBalancer"
}
/**
 * Describes the type of service for a VPC endpoint.
 */
export declare class DescribeVpcEndpointServicesResultServiceDetailsServiceType extends SpeakeasyBase {
    serviceType?: DescribeVpcEndpointServicesResultServiceDetailsServiceTypeServiceTypeEnum;
}
export declare enum DescribeVpcEndpointServicesResultServiceDetailsSupportedIpAddressTypesEnum {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}
/**
 * Describes a tag.
 */
export declare class DescribeVpcEndpointServicesResultServiceDetailsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a VPC endpoint service.
 */
export declare class DescribeVpcEndpointServicesResultServiceDetails extends SpeakeasyBase {
    acceptanceRequired?: boolean;
    availabilityZones?: string[];
    baseEndpointDnsNames?: string[];
    managesVpcEndpoints?: boolean;
    owner?: string;
    payerResponsibility?: DescribeVpcEndpointServicesResultServiceDetailsPayerResponsibilityEnum;
    privateDnsName?: string;
    privateDnsNameVerificationState?: DescribeVpcEndpointServicesResultServiceDetailsPrivateDnsNameVerificationStateEnum;
    privateDnsNames?: DescribeVpcEndpointServicesResultServiceDetailsPrivateDnsNames[];
    serviceId?: string;
    serviceName?: string;
    serviceType?: DescribeVpcEndpointServicesResultServiceDetailsServiceType[];
    supportedIpAddressTypes?: DescribeVpcEndpointServicesResultServiceDetailsSupportedIpAddressTypesEnum[];
    tags?: DescribeVpcEndpointServicesResultServiceDetailsTags[];
    vpcEndpointPolicySupported?: boolean;
}
/**
 * Success
 */
export declare class DescribeVpcEndpointServicesResult extends SpeakeasyBase {
    nextToken?: string;
    serviceDetails?: DescribeVpcEndpointServicesResultServiceDetails[];
    serviceNames?: string[];
}
