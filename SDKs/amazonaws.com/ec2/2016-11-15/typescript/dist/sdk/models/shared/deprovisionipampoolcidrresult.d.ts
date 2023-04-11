import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An error code related to why an IPAM pool CIDR failed to be provisioned.
 */
export declare enum DeprovisionIpamPoolCidrResultIpamPoolCidrFailureReasonCodeEnum {
    CidrNotAvailable = "cidr-not-available",
    LimitExceeded = "limit-exceeded"
}
/**
 * Details related to why an IPAM pool CIDR failed to be provisioned.
 */
export declare class DeprovisionIpamPoolCidrResultIpamPoolCidrFailureReason extends SpeakeasyBase {
    code?: DeprovisionIpamPoolCidrResultIpamPoolCidrFailureReasonCodeEnum;
    message?: string;
}
/**
 * The state of the CIDR.
 */
export declare enum DeprovisionIpamPoolCidrResultIpamPoolCidrStateEnum {
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
 * The deprovisioned pool CIDR.
 */
export declare class DeprovisionIpamPoolCidrResultIpamPoolCidr extends SpeakeasyBase {
    cidr?: string;
    failureReason?: DeprovisionIpamPoolCidrResultIpamPoolCidrFailureReason;
    ipamPoolCidrId?: string;
    netmaskLength?: number;
    state?: DeprovisionIpamPoolCidrResultIpamPoolCidrStateEnum;
}
/**
 * Success
 */
export declare class DeprovisionIpamPoolCidrResult extends SpeakeasyBase {
    ipamPoolCidr?: DeprovisionIpamPoolCidrResultIpamPoolCidr;
}
