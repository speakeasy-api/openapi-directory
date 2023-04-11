import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An error code related to why an IPAM pool CIDR failed to be provisioned.
 */
export declare enum ProvisionIpamPoolCidrResultIpamPoolCidrFailureReasonCodeEnum {
    CidrNotAvailable = "cidr-not-available",
    LimitExceeded = "limit-exceeded"
}
/**
 * Details related to why an IPAM pool CIDR failed to be provisioned.
 */
export declare class ProvisionIpamPoolCidrResultIpamPoolCidrFailureReason extends SpeakeasyBase {
    code?: ProvisionIpamPoolCidrResultIpamPoolCidrFailureReasonCodeEnum;
    message?: string;
}
/**
 * The state of the CIDR.
 */
export declare enum ProvisionIpamPoolCidrResultIpamPoolCidrStateEnum {
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
 * Information about the provisioned CIDR.
 */
export declare class ProvisionIpamPoolCidrResultIpamPoolCidr extends SpeakeasyBase {
    cidr?: string;
    failureReason?: ProvisionIpamPoolCidrResultIpamPoolCidrFailureReason;
    ipamPoolCidrId?: string;
    netmaskLength?: number;
    state?: ProvisionIpamPoolCidrResultIpamPoolCidrStateEnum;
}
/**
 * Success
 */
export declare class ProvisionIpamPoolCidrResult extends SpeakeasyBase {
    ipamPoolCidr?: ProvisionIpamPoolCidrResultIpamPoolCidr;
}
