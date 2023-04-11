import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success, returns eligibility data.
 */
export declare class EeBtEligibility extends SpeakeasyBase {
    /**
     * Whether or not user is eligible
     */
    eligible: boolean;
    /**
     * The identifier of a plan.
     */
    plan?: string;
    /**
     * Stripe etc.
     */
    source?: string;
}
