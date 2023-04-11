import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The compliance status of the IPAM resource. For more information on compliance statuses, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/monitor-cidr-compliance-ipam.html">Monitor CIDR usage by resource</a> in the <i>Amazon VPC IPAM User Guide</i>.
 */
export declare enum ModifyIpamResourceCidrResultIpamResourceCidrComplianceStatusEnum {
    Compliant = "compliant",
    Noncompliant = "noncompliant",
    Unmanaged = "unmanaged",
    Ignored = "ignored"
}
/**
 * The management state of the resource. For more information about management states, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/monitor-cidr-compliance-ipam.html">Monitor CIDR usage by resource</a> in the <i>Amazon VPC IPAM User Guide</i>.
 */
export declare enum ModifyIpamResourceCidrResultIpamResourceCidrManagementStateEnum {
    Managed = "managed",
    Unmanaged = "unmanaged",
    Ignored = "ignored"
}
/**
 * The overlap status of an IPAM resource. The overlap status tells you if the CIDR for a resource overlaps with another CIDR in the scope. For more information on overlap statuses, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/monitor-cidr-compliance-ipam.html">Monitor CIDR usage by resource</a> in the <i>Amazon VPC IPAM User Guide</i>.
 */
export declare enum ModifyIpamResourceCidrResultIpamResourceCidrOverlapStatusEnum {
    Overlapping = "overlapping",
    Nonoverlapping = "nonoverlapping",
    Ignored = "ignored"
}
/**
 * The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.
 */
export declare class ModifyIpamResourceCidrResultIpamResourceCidrResourceTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The type of IPAM resource.
 */
export declare enum ModifyIpamResourceCidrResultIpamResourceCidrResourceTypeEnum {
    Vpc = "vpc",
    Subnet = "subnet",
    Eip = "eip",
    PublicIpv4Pool = "public-ipv4-pool",
    Ipv6Pool = "ipv6-pool"
}
/**
 * The CIDR of the resource.
 */
export declare class ModifyIpamResourceCidrResultIpamResourceCidr extends SpeakeasyBase {
    complianceStatus?: ModifyIpamResourceCidrResultIpamResourceCidrComplianceStatusEnum;
    ipUsage?: number;
    ipamId?: string;
    ipamPoolId?: string;
    ipamScopeId?: string;
    managementState?: ModifyIpamResourceCidrResultIpamResourceCidrManagementStateEnum;
    overlapStatus?: ModifyIpamResourceCidrResultIpamResourceCidrOverlapStatusEnum;
    resourceCidr?: string;
    resourceId?: string;
    resourceName?: string;
    resourceOwnerId?: string;
    resourceRegion?: string;
    resourceTags?: ModifyIpamResourceCidrResultIpamResourceCidrResourceTags[];
    resourceType?: ModifyIpamResourceCidrResultIpamResourceCidrResourceTypeEnum;
    vpcId?: string;
}
/**
 * Success
 */
export declare class ModifyIpamResourceCidrResult extends SpeakeasyBase {
    ipamResourceCidr?: ModifyIpamResourceCidrResultIpamResourceCidr;
}
