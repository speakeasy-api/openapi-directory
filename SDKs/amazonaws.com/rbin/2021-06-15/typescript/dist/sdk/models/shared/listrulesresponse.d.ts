import { SpeakeasyBase } from "../../../internal/utils";
import { RuleSummary } from "./rulesummary";
/**
 * Success
 */
export declare class ListRulesResponse extends SpeakeasyBase {
    nextToken?: string;
    rules?: RuleSummary[];
}
