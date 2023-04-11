import { SpeakeasyBase } from "../../../internal/utils";
import { PricingPlan } from "./pricingplan";
/**
 * Success
 */
export declare class UpdatePricingPlanResponse extends SpeakeasyBase {
    currentPricingPlan: PricingPlan;
    pendingPricingPlan?: PricingPlan;
}
