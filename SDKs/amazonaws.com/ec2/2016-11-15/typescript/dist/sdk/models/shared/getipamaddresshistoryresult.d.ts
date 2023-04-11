import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The compliance status of a resource. For more information on compliance statuses, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/monitor-cidr-compliance-ipam.html">Monitor CIDR usage by resource</a> in the <i>Amazon VPC IPAM User Guide</i>.
 */
export declare enum GetIpamAddressHistoryResultHistoryRecordsResourceComplianceStatusEnum {
    Compliant = "compliant",
    Noncompliant = "noncompliant",
    Unmanaged = "unmanaged",
    Ignored = "ignored"
}
/**
 * The overlap status of an IPAM resource. The overlap status tells you if the CIDR for a resource overlaps with another CIDR in the scope. For more information on overlap statuses, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/monitor-cidr-compliance-ipam.html">Monitor CIDR usage by resource</a> in the <i>Amazon VPC IPAM User Guide</i>.
 */
export declare enum GetIpamAddressHistoryResultHistoryRecordsResourceOverlapStatusEnum {
    Overlapping = "overlapping",
    Nonoverlapping = "nonoverlapping",
    Ignored = "ignored"
}
/**
 * The type of the resource.
 */
export declare enum GetIpamAddressHistoryResultHistoryRecordsResourceTypeEnum {
    Eip = "eip",
    Vpc = "vpc",
    Subnet = "subnet",
    NetworkInterface = "network-interface",
    Instance = "instance"
}
/**
 * The historical record of a CIDR within an IPAM scope. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/view-history-cidr-ipam.html">View the history of IP addresses</a> in the <i>Amazon VPC IPAM User Guide</i>.
 */
export declare class GetIpamAddressHistoryResultHistoryRecords extends SpeakeasyBase {
    resourceCidr?: string;
    resourceComplianceStatus?: GetIpamAddressHistoryResultHistoryRecordsResourceComplianceStatusEnum;
    resourceId?: string;
    resourceName?: string;
    resourceOverlapStatus?: GetIpamAddressHistoryResultHistoryRecordsResourceOverlapStatusEnum;
    resourceOwnerId?: string;
    resourceRegion?: string;
    resourceType?: GetIpamAddressHistoryResultHistoryRecordsResourceTypeEnum;
    sampledEndTime?: Date;
    sampledStartTime?: Date;
    vpcId?: string;
}
/**
 * Success
 */
export declare class GetIpamAddressHistoryResult extends SpeakeasyBase {
    historyRecords?: GetIpamAddressHistoryResultHistoryRecords[];
    nextToken?: string;
}
