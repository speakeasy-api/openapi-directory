import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the address pool.
 */
export declare enum WithdrawByoipCidrResultByoipCidrStateEnum {
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
 * Information about the address pool.
 */
export declare class WithdrawByoipCidrResultByoipCidr extends SpeakeasyBase {
    cidr?: string;
    description?: string;
    state?: WithdrawByoipCidrResultByoipCidrStateEnum;
    statusMessage?: string;
}
/**
 * Success
 */
export declare class WithdrawByoipCidrResult extends SpeakeasyBase {
    byoipCidr?: WithdrawByoipCidrResultByoipCidr;
}
