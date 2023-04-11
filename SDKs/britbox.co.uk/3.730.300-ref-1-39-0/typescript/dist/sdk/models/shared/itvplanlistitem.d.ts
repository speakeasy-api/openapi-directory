import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of billing period used.
 */
export declare enum ItvPlanListItemIntervalEnum {
    Day = "day",
    Week = "week",
    Month = "month",
    Year = "year",
    None = "none"
}
export declare class ItvPlanListItem extends SpeakeasyBase {
    /**
     * The price of a plan. If a free plan then undefined.
     */
    amount: number;
    /**
     * The currency a plan is offered in.
     */
    currency: string;
    /**
     * The textual description.
     */
    description: string;
    /**
     * The identifier of a plan.
     */
    id: string;
    /**
     * The type of billing period used.
     */
    interval: ItvPlanListItemIntervalEnum;
    /**
     * Given the `interval` this is how frequently it will run. e.g. every 2 weeks.
     */
    intervalCount: number;
    /**
     * The title of a plan.
     */
    nickname: string;
    /**
     * The product description.
     */
    product: string;
    /**
     * The saving label.
     */
    savingLabel?: string;
    /**
     * The text to switch for.
     */
    switchingText?: string;
    /**
     * How many days a trial period runs for a plan. Only valid if `hasTrialPeriod` is true.
     */
    trialPeriodDays?: number;
}
