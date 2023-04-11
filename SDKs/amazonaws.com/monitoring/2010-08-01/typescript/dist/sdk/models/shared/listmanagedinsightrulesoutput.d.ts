import { SpeakeasyBase } from "../../../internal/utils";
import { ManagedRuleDescription } from "./managedruledescription";
/**
 * Success
 */
export declare class ListManagedInsightRulesOutput extends SpeakeasyBase {
    managedRules?: ManagedRuleDescription[];
    nextToken?: string;
}
