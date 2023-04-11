import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response
 */
export declare class CombinedBillingUsage extends SpeakeasyBase {
    /**
     * Numbers of days left in billing cycle.
     */
    daysLeftInBillingCycle: number;
    /**
     * Estimated storage space (GB) used in billing cycle.
     */
    estimatedPaidStorageForMonth: number;
    /**
     * Estimated sum of free and paid storage space (GB) used in billing cycle.
     */
    estimatedStorageForMonth: number;
}
