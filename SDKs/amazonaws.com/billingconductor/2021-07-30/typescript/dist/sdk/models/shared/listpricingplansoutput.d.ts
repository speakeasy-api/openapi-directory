import { SpeakeasyBase } from "../../../internal/utils";
import { PricingPlanListElement } from "./pricingplanlistelement";
/**
 * Success
 */
export declare class ListPricingPlansOutput extends SpeakeasyBase {
    billingPeriod?: string;
    nextToken?: string;
    pricingPlans?: PricingPlanListElement[];
}
