import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the address pool.
 */
export declare enum ProvisionByoipCidrResultByoipCidrStateEnum {
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
export declare class ProvisionByoipCidrResultByoipCidr extends SpeakeasyBase {
    cidr?: string;
    description?: string;
    state?: ProvisionByoipCidrResultByoipCidrStateEnum;
    statusMessage?: string;
}
/**
 * Success
 */
export declare class ProvisionByoipCidrResult extends SpeakeasyBase {
    byoipCidr?: ProvisionByoipCidrResultByoipCidr;
}
