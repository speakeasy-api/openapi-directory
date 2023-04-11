import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.
 */
export declare class GetIpamDiscoveredResourceCidrsResultIpamDiscoveredResourceCidrsResourceTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The resource type.
 */
export declare enum GetIpamDiscoveredResourceCidrsResultIpamDiscoveredResourceCidrsResourceTypeEnum {
    Vpc = "vpc",
    Subnet = "subnet",
    Eip = "eip",
    PublicIpv4Pool = "public-ipv4-pool",
    Ipv6Pool = "ipv6-pool"
}
/**
 * An IPAM discovered resource CIDR. A discovered resource is a resource CIDR monitored under a resource discovery. The following resources can be discovered: VPCs, Public IPv4 pools, VPC subnets, and Elastic IP addresses. The discovered resource CIDR is the IP address range in CIDR notation that is associated with the resource.
 */
export declare class GetIpamDiscoveredResourceCidrsResultIpamDiscoveredResourceCidrs extends SpeakeasyBase {
    ipUsage?: number;
    ipamResourceDiscoveryId?: string;
    resourceCidr?: string;
    resourceId?: string;
    resourceOwnerId?: string;
    resourceRegion?: string;
    resourceTags?: GetIpamDiscoveredResourceCidrsResultIpamDiscoveredResourceCidrsResourceTags[];
    resourceType?: GetIpamDiscoveredResourceCidrsResultIpamDiscoveredResourceCidrsResourceTypeEnum;
    sampleTime?: Date;
    vpcId?: string;
}
/**
 * Success
 */
export declare class GetIpamDiscoveredResourceCidrsResult extends SpeakeasyBase {
    ipamDiscoveredResourceCidrs?: GetIpamDiscoveredResourceCidrsResultIpamDiscoveredResourceCidrs[];
    nextToken?: string;
}
