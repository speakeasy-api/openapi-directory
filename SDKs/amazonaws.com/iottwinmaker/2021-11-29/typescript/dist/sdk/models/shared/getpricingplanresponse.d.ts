import { SpeakeasyBase } from "../../../internal/utils";
import { PricingPlan } from "./pricingplan";
/**
 * Success
 */
export declare class GetPricingPlanResponse extends SpeakeasyBase {
    currentPricingPlan: PricingPlan;
    pendingPricingPlan?: PricingPlan;
}
