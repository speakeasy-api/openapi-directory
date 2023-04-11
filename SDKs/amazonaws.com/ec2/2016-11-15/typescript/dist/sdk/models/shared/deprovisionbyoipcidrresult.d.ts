import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the address pool.
 */
export declare enum DeprovisionByoipCidrResultByoipCidrStateEnum {
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
 * Information about the address range.
 */
export declare class DeprovisionByoipCidrResultByoipCidr extends SpeakeasyBase {
    cidr?: string;
    description?: string;
    state?: DeprovisionByoipCidrResultByoipCidrStateEnum;
    statusMessage?: string;
}
/**
 * Success
 */
export declare class DeprovisionByoipCidrResult extends SpeakeasyBase {
    byoipCidr?: DeprovisionByoipCidrResultByoipCidr;
}
