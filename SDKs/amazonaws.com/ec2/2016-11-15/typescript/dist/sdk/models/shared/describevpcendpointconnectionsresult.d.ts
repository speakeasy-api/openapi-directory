import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a DNS entry.
 */
export declare class DescribeVpcEndpointConnectionsResultVpcEndpointConnectionsDnsEntries extends SpeakeasyBase {
    dnsName?: string;
    hostedZoneId?: string;
}
/**
 * The IP address type for the endpoint.
 */
export declare enum DescribeVpcEndpointConnectionsResultVpcEndpointConnectionsIpAddressTypeEnum {
    Ipv4 = "ipv4",
    Dualstack = "dualstack",
    Ipv6 = "ipv6"
}
/**
 * Describes a tag.
 */
export declare class DescribeVpcEndpointConnectionsResultVpcEndpointConnectionsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The state of the VPC endpoint.
 */
export declare enum DescribeVpcEndpointConnectionsResultVpcEndpointConnectionsVpcEndpointStateEnum {
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
 * Describes a VPC endpoint connection to a service.
 */
export declare class DescribeVpcEndpointConnectionsResultVpcEndpointConnections extends SpeakeasyBase {
    creationTimestamp?: Date;
    dnsEntries?: DescribeVpcEndpointConnectionsResultVpcEndpointConnectionsDnsEntries[];
    gatewayLoadBalancerArns?: string[];
    ipAddressType?: DescribeVpcEndpointConnectionsResultVpcEndpointConnectionsIpAddressTypeEnum;
    networkLoadBalancerArns?: string[];
    serviceId?: string;
    tags?: DescribeVpcEndpointConnectionsResultVpcEndpointConnectionsTags[];
    vpcEndpointConnectionId?: string;
    vpcEndpointId?: string;
    vpcEndpointOwner?: string;
    vpcEndpointState?: DescribeVpcEndpointConnectionsResultVpcEndpointConnectionsVpcEndpointStateEnum;
}
/**
 * Success
 */
export declare class DescribeVpcEndpointConnectionsResult extends SpeakeasyBase {
    nextToken?: string;
    vpcEndpointConnections?: DescribeVpcEndpointConnectionsResultVpcEndpointConnections[];
}
