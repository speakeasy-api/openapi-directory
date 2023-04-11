import { SpeakeasyBase } from "../../../internal/utils";
import { PricingRuleListElement } from "./pricingrulelistelement";
/**
 * Success
 */
export declare class ListPricingRulesOutput extends SpeakeasyBase {
    billingPeriod?: string;
    nextToken?: string;
    pricingRules?: PricingRuleListElement[];
}
