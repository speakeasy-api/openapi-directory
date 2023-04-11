import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of billing period used.
 */
export declare enum PlanBillingPeriodTypeEnum {
    Day = "day",
    Week = "week",
    Month = "month",
    Year = "year",
    None = "none"
}
/**
 * The revenue type a plan targets.
 */
export declare enum PlanRevenueTypeEnum {
    Tvod = "TVOD",
    Svod = "SVOD"
}
/**
 * The type of plan.
 */
export declare enum PlanTypeEnum {
    Free = "Free",
    Subscription = "Subscription"
}
/**
 * The Plan requested.
 */
export declare class Plan extends SpeakeasyBase {
    /**
     * An alias for a plan.
     */
    alias: string;
    /**
     * The list of benefits to display for a plan.
     */
    benefits: string[];
    /**
     * Given the `billingPeriodType` this is how frequently it will run. e.g. every 2 weeks.
     */
    billingPeriodFrequency: number;
    /**
     * The type of billing period used.
     */
    billingPeriodType: PlanBillingPeriodTypeEnum;
    /**
     * The currency a plan is offered in.
     */
    currency: string;
    /**
     * A map of custom fields defined by a curator for a plan.
     */
    customFields?: Record<string, any>;
    /**
     * True if a plan has a trial period, false if not.
     */
    hasTrialPeriod: boolean;
    /**
     * The identifier of a plan.
     */
    id: string;
    /**
     * True if a plan is active, false if its retired.
     */
    isActive: boolean;
    /**
     * True if a plan should be highlighted as featured, false if not.
     */
    isFeatured: boolean;
    /**
     * True if a plan should not be presented in the primary plan options, false if not.
     */
    isPrivate: boolean;
    /**
     * The price of a plan. If a free plan then undefined.
     */
    price?: number;
    /**
     * The revenue type a plan targets.
     */
    revenueType: PlanRevenueTypeEnum;
    /**
     * The subscription code a plan targets.
     */
    subscriptionCode: string;
    /**
     * The short tagline for a plan.
     */
    tagline: string;
    /**
     * The terms and conditions for a plan.
     */
    termsAndConditions: string;
    /**
     * The title of a plan.
     */
    title: string;
    /**
     * How many days a trial period runs for a plan. Only valid if `hasTrialPeriod` is true.
     */
    trialPeriodDays: number;
    /**
     * The type of plan.
     */
    type: PlanTypeEnum;
}
