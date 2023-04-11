import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a DNS entry.
 */
export declare class CreateVpcEndpointResultVpcEndpointDnsEntries extends SpeakeasyBase {
    dnsName?: string;
    hostedZoneId?: string;
}
/**
 * The DNS records created for the endpoint.
 */
export declare enum CreateVpcEndpointResultVpcEndpointDnsOptionsDnsRecordIpTypeEnum {
    Ipv4 = "ipv4",
    Dualstack = "dualstack",
    Ipv6 = "ipv6",
    ServiceDefined = "service-defined"
}
/**
 * The DNS options for the endpoint.
 */
export declare class CreateVpcEndpointResultVpcEndpointDnsOptions extends SpeakeasyBase {
    dnsRecordIpType?: CreateVpcEndpointResultVpcEndpointDnsOptionsDnsRecordIpTypeEnum;
    privateDnsOnlyForInboundResolverEndpoint?: boolean;
}
/**
 * Describes a security group.
 */
export declare class CreateVpcEndpointResultVpcEndpointGroups extends SpeakeasyBase {
    groupId?: string;
    groupName?: string;
}
/**
 * The IP address type for the endpoint.
 */
export declare enum CreateVpcEndpointResultVpcEndpointIpAddressTypeEnum {
    Ipv4 = "ipv4",
    Dualstack = "dualstack",
    Ipv6 = "ipv6"
}
/**
 * The last error that occurred for endpoint.
 */
export declare class CreateVpcEndpointResultVpcEndpointLastError extends SpeakeasyBase {
    code?: string;
    message?: string;
}
/**
 * The state of the endpoint.
 */
export declare enum CreateVpcEndpointResultVpcEndpointStateEnum {
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
export declare class CreateVpcEndpointResultVpcEndpointTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The type of endpoint.
 */
export declare enum CreateVpcEndpointResultVpcEndpointVpcEndpointTypeEnum {
    Interface = "Interface",
    Gateway = "Gateway",
    GatewayLoadBalancer = "GatewayLoadBalancer"
}
/**
 * Information about the endpoint.
 */
export declare class CreateVpcEndpointResultVpcEndpoint extends SpeakeasyBase {
    creationTimestamp?: Date;
    dnsEntries?: CreateVpcEndpointResultVpcEndpointDnsEntries[];
    dnsOptions?: CreateVpcEndpointResultVpcEndpointDnsOptions;
    groups?: CreateVpcEndpointResultVpcEndpointGroups[];
    ipAddressType?: CreateVpcEndpointResultVpcEndpointIpAddressTypeEnum;
    lastError?: CreateVpcEndpointResultVpcEndpointLastError;
    networkInterfaceIds?: string[];
    ownerId?: string;
    policyDocument?: string;
    privateDnsEnabled?: boolean;
    requesterManaged?: boolean;
    routeTableIds?: string[];
    serviceName?: string;
    state?: CreateVpcEndpointResultVpcEndpointStateEnum;
    subnetIds?: string[];
    tags?: CreateVpcEndpointResultVpcEndpointTags[];
    vpcEndpointId?: string;
    vpcEndpointType?: CreateVpcEndpointResultVpcEndpointVpcEndpointTypeEnum;
    vpcId?: string;
}
/**
 * Success
 */
export declare class CreateVpcEndpointResult extends SpeakeasyBase {
    clientToken?: string;
    vpcEndpoint?: CreateVpcEndpointResultVpcEndpoint;
}
