import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The address family of the pool.
 */
export declare enum CreateIpamPoolResultIpamPoolAddressFamilyEnum {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}
/**
 * The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.
 */
export declare class CreateIpamPoolResultIpamPoolAllocationResourceTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Limits which service in Amazon Web Services that the pool can be used in. "ec2", for example, allows users to use space for Elastic IP addresses and VPCs.
 */
export declare enum CreateIpamPoolResultIpamPoolAwsServiceEnum {
    Ec2 = "ec2"
}
/**
 * In IPAM, a scope is the highest-level container within IPAM. An IPAM contains two default scopes. Each scope represents the IP space for a single network. The private scope is intended for all private IP address space. The public scope is intended for all public IP address space. Scopes enable you to reuse IP addresses across multiple unconnected networks without causing IP address overlap or conflict.
 */
export declare enum CreateIpamPoolResultIpamPoolIpamScopeTypeEnum {
    Public = "public",
    Private = "private"
}
/**
 * The IP address source for pools in the public scope. Only used for provisioning IP address CIDRs to pools in the public scope. Default is <code>BYOIP</code>. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/intro-create-ipv6-pools.html">Create IPv6 pools</a> in the <i>Amazon VPC IPAM User Guide</i>. By default, you can add only one Amazon-provided IPv6 CIDR block to a top-level IPv6 pool. For information on increasing the default limit, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/quotas-ipam.html"> Quotas for your IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.
 */
export declare enum CreateIpamPoolResultIpamPoolPublicIpSourceEnum {
    Amazon = "amazon",
    Byoip = "byoip"
}
/**
 * The state of the IPAM pool.
 */
export declare enum CreateIpamPoolResultIpamPoolStateEnum {
    CreateInProgress = "create-in-progress",
    CreateComplete = "create-complete",
    CreateFailed = "create-failed",
    ModifyInProgress = "modify-in-progress",
    ModifyComplete = "modify-complete",
    ModifyFailed = "modify-failed",
    DeleteInProgress = "delete-in-progress",
    DeleteComplete = "delete-complete",
    DeleteFailed = "delete-failed",
    IsolateInProgress = "isolate-in-progress",
    IsolateComplete = "isolate-complete",
    RestoreInProgress = "restore-in-progress"
}
/**
 * Describes a tag.
 */
export declare class CreateIpamPoolResultIpamPoolTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the IPAM pool created.
 */
export declare class CreateIpamPoolResultIpamPool extends SpeakeasyBase {
    addressFamily?: CreateIpamPoolResultIpamPoolAddressFamilyEnum;
    allocationDefaultNetmaskLength?: number;
    allocationMaxNetmaskLength?: number;
    allocationMinNetmaskLength?: number;
    allocationResourceTags?: CreateIpamPoolResultIpamPoolAllocationResourceTags[];
    autoImport?: boolean;
    awsService?: CreateIpamPoolResultIpamPoolAwsServiceEnum;
    description?: string;
    ipamArn?: string;
    ipamPoolArn?: string;
    ipamPoolId?: string;
    ipamRegion?: string;
    ipamScopeArn?: string;
    ipamScopeType?: CreateIpamPoolResultIpamPoolIpamScopeTypeEnum;
    locale?: string;
    ownerId?: string;
    poolDepth?: number;
    publicIpSource?: CreateIpamPoolResultIpamPoolPublicIpSourceEnum;
    publiclyAdvertisable?: boolean;
    sourceIpamPoolId?: string;
    state?: CreateIpamPoolResultIpamPoolStateEnum;
    stateMessage?: string;
    tags?: CreateIpamPoolResultIpamPoolTags[];
}
/**
 * Success
 */
export declare class CreateIpamPoolResult extends SpeakeasyBase {
    ipamPool?: CreateIpamPoolResultIpamPool;
}
