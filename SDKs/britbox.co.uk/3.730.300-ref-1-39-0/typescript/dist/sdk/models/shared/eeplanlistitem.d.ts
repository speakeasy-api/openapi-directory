import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of billing period used.
 */
export declare enum EePlanListItemIntervalEnum {
    Day = "day",
    Week = "week",
    Month = "month",
    Year = "year",
    None = "none"
}
/**
 * List of available plans.
 */
export declare class EePlanListItem extends SpeakeasyBase {
    /**
     * The price of a plan. If a free plan then undefined.
     */
    amount?: number;
    /**
     * The textual description.
     */
    ctaText: string;
    /**
     * The currency a plan is offered in.
     */
    currency: string;
    /**
     * The textual description.
     */
    description: string;
    /**
     * The textual description.
     */
    headerText: string;
    /**
     * The textual description.
     */
    heroText: string;
    /**
     * The identifier of a plan.
     */
    id: string;
    /**
     * The type of billing period used.
     */
    interval?: EePlanListItemIntervalEnum;
    /**
     * Given the `interval` this is how frequently it will run. e.g. every 2 weeks.
     */
    intervalCount?: number;
    /**
     * The textual description.
     */
    longText: string;
    /**
     * The title of a plan.
     */
    nickname: string;
    /**
     * The product of a plan.
     */
    product: string;
    /**
     * How many days a trial period runs for a plan. Only valid if `hasTrialPeriod` is true.
     */
    trialPeriodDays: number;
}
