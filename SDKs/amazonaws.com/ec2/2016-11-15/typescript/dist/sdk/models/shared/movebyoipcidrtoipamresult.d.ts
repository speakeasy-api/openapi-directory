import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the address pool.
 */
export declare enum MoveByoipCidrToIpamResultByoipCidrStateEnum {
    Advertised = "advertised",
    Deprovisioned = "deprovisioned",
    FailedDeprovision = "failed-deprovision",
    FailedProvision = "failed-provision",
    PendingDeprovision = "pending-deprovision",
    PendingProvision = "pending-provision",
    Provisioned = "provisioned",
    ProvisionedNotPubliclyAdvertisable = "provisioned-not-publicly-advertisable"
}
/**
 * The BYOIP CIDR.
 */
export declare class MoveByoipCidrToIpamResultByoipCidr extends SpeakeasyBase {
    cidr?: string;
    description?: string;
    state?: MoveByoipCidrToIpamResultByoipCidrStateEnum;
    statusMessage?: string;
}
/**
 * Success
 */
export declare class MoveByoipCidrToIpamResult extends SpeakeasyBase {
    byoipCidr?: MoveByoipCidrToIpamResultByoipCidr;
}
