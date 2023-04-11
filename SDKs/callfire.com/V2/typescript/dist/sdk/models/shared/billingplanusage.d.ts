import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains statistics of billing plan usage
 */
export declare class BillingPlanUsage extends SpeakeasyBase {
    /**
     * End of usage period formatted in unix time milliseconds. Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
     */
    intervalEnd?: number;
    /**
     * Start of usage period formatted in unix time milliseconds. Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
     */
    intervalStart?: number;
    /**
     * Remaining pay as you go credits are rounded to nearest whole value
     */
    remainingPayAsYouGoCredits?: number;
    /**
     * Remaining credits are rounded to nearest whole value associated with a plan
     */
    remainingPlanCredits?: number;
    /**
     * Total number of remaining credits (remainingPlanCredits + remainingPayAsYouGoCredits)
     */
    totalRemainingCredits?: number;
}
