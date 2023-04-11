import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a DNS entry.
 */
export declare class DescribeVpcEndpointsResultVpcEndpointsDnsEntries extends SpeakeasyBase {
    dnsName?: string;
    hostedZoneId?: string;
}
/**
 * The DNS records created for the endpoint.
 */
export declare enum DescribeVpcEndpointsResultVpcEndpointsDnsOptionsDnsRecordIpTypeEnum {
    Ipv4 = "ipv4",
    Dualstack = "dualstack",
    Ipv6 = "ipv6",
    ServiceDefined = "service-defined"
}
/**
 * The DNS options for the endpoint.
 */
export declare class DescribeVpcEndpointsResultVpcEndpointsDnsOptions extends SpeakeasyBase {
    dnsRecordIpType?: DescribeVpcEndpointsResultVpcEndpointsDnsOptionsDnsRecordIpTypeEnum;
    privateDnsOnlyForInboundResolverEndpoint?: boolean;
}
/**
 * Describes a security group.
 */
export declare class DescribeVpcEndpointsResultVpcEndpointsGroups extends SpeakeasyBase {
    groupId?: string;
    groupName?: string;
}
/**
 * The IP address type for the endpoint.
 */
export declare enum DescribeVpcEndpointsResultVpcEndpointsIpAddressTypeEnum {
    Ipv4 = "ipv4",
    Dualstack = "dualstack",
    Ipv6 = "ipv6"
}
/**
 * The last error that occurred for endpoint.
 */
export declare class DescribeVpcEndpointsResultVpcEndpointsLastError extends SpeakeasyBase {
    code?: string;
    message?: string;
}
/**
 * The state of the endpoint.
 */
export declare enum DescribeVpcEndpointsResultVpcEndpointsStateEnum {
    PendingAcceptance = "PendingAcceptance",
    Pending = "Pending",
    Available = "Available",
    Deleting = "Deleting",
    Deleted = "Deleted",
    Rejected = "Rejected",
    Failed = "Failed",
    Expired = "Expired"
}
/**
 * Describes a tag.
 */
export declare class DescribeVpcEndpointsResultVpcEndpointsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The type of endpoint.
 */
export declare enum DescribeVpcEndpointsResultVpcEndpointsVpcEndpointTypeEnum {
    Interface = "Interface",
    Gateway = "Gateway",
    GatewayLoadBalancer = "GatewayLoadBalancer"
}
/**
 * Describes a VPC endpoint.
 */
export declare class DescribeVpcEndpointsResultVpcEndpoints extends SpeakeasyBase {
    creationTimestamp?: Date;
    dnsEntries?: DescribeVpcEndpointsResultVpcEndpointsDnsEntries[];
    dnsOptions?: DescribeVpcEndpointsResultVpcEndpointsDnsOptions;
    groups?: DescribeVpcEndpointsResultVpcEndpointsGroups[];
    ipAddressType?: DescribeVpcEndpointsResultVpcEndpointsIpAddressTypeEnum;
    lastError?: DescribeVpcEndpointsResultVpcEndpointsLastError;
    networkInterfaceIds?: string[];
    ownerId?: string;
    policyDocument?: string;
    privateDnsEnabled?: boolean;
    requesterManaged?: boolean;
    routeTableIds?: string[];
    serviceName?: string;
    state?: DescribeVpcEndpointsResultVpcEndpointsStateEnum;
    subnetIds?: string[];
    tags?: DescribeVpcEndpointsResultVpcEndpointsTags[];
    vpcEndpointId?: string;
    vpcEndpointType?: DescribeVpcEndpointsResultVpcEndpointsVpcEndpointTypeEnum;
    vpcId?: string;
}
/**
 * Success
 */
export declare class DescribeVpcEndpointsResult extends SpeakeasyBase {
    nextToken?: string;
    vpcEndpoints?: DescribeVpcEndpointsResultVpcEndpoints[];
}
