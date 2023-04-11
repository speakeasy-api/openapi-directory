import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of plan purchased.
 */
export declare enum PlanPurchaseTypeEnum {
    Free = "Free",
    Subscription = "Subscription"
}
export declare class PlanPurchase extends SpeakeasyBase {
    /**
     * The identifier of the purchased plan.
     */
    id?: string;
    /**
     * The price of the purchased plan.
     */
    price?: number;
    /**
     * The identifier of the subscription membership to the plan.
     */
    subscriptionId?: string;
    /**
     * The title of the purchased plan.
     */
    title: string;
    /**
     * The type of plan purchased.
     */
    type: PlanPurchaseTypeEnum;
}
