import { SpeakeasyBase } from "../../../internal/utils";
import { ItvEntitlement } from "./itventitlement";
/**
 * Details of current subscription.
 */
export declare class ItvSubscriptionState extends SpeakeasyBase {
    /**
     * The array of entitlement objects.
     */
    effectiveEntitlements: ItvEntitlement[];
    /**
     * The results of availability checks.
     */
    failedAvailabilityChecks: string[];
    /**
     * The array of entitlement names.
     */
    purchased: string[];
    /**
     * The payment provider (stripe/itunes)
     */
    source: string;
}
