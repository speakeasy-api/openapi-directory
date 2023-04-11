import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the address pool.
 */
export declare enum AdvertiseByoipCidrResultByoipCidrStateEnum {
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
export declare class AdvertiseByoipCidrResultByoipCidr extends SpeakeasyBase {
    cidr?: string;
    description?: string;
    state?: AdvertiseByoipCidrResultByoipCidrStateEnum;
    statusMessage?: string;
}
/**
 * Success
 */
export declare class AdvertiseByoipCidrResult extends SpeakeasyBase {
    byoipCidr?: AdvertiseByoipCidrResultByoipCidr;
}
