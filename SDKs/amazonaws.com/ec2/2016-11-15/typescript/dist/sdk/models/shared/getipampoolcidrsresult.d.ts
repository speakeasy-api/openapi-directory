import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An error code related to why an IPAM pool CIDR failed to be provisioned.
 */
export declare enum GetIpamPoolCidrsResultIpamPoolCidrsFailureReasonCodeEnum {
    CidrNotAvailable = "cidr-not-available",
    LimitExceeded = "limit-exceeded"
}
/**
 * Details related to why an IPAM pool CIDR failed to be provisioned.
 */
export declare class GetIpamPoolCidrsResultIpamPoolCidrsFailureReason extends SpeakeasyBase {
    code?: GetIpamPoolCidrsResultIpamPoolCidrsFailureReasonCodeEnum;
    message?: string;
}
/**
 * The state of the CIDR.
 */
export declare enum GetIpamPoolCidrsResultIpamPoolCidrsStateEnum {
    PendingProvision = "pending-provision",
    Provisioned = "provisioned",
    FailedProvision = "failed-provision",
    PendingDeprovision = "pending-deprovision",
    Deprovisioned = "deprovisioned",
    FailedDeprovision = "failed-deprovision",
    PendingImport = "pending-import",
    FailedImport = "failed-import"
}
/**
 * A CIDR provisioned to an IPAM pool.
 */
export declare class GetIpamPoolCidrsResultIpamPoolCidrs extends SpeakeasyBase {
    cidr?: string;
    failureReason?: GetIpamPoolCidrsResultIpamPoolCidrsFailureReason;
    ipamPoolCidrId?: string;
    netmaskLength?: number;
    state?: GetIpamPoolCidrsResultIpamPoolCidrsStateEnum;
}
/**
 * Success
 */
export declare class GetIpamPoolCidrsResult extends SpeakeasyBase {
    ipamPoolCidrs?: GetIpamPoolCidrsResultIpamPoolCidrs[];
    nextToken?: string;
}
