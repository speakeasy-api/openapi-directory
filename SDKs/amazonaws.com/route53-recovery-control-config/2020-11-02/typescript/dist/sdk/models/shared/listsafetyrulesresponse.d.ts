import { SpeakeasyBase } from "../../../internal/utils";
import { Rule } from "./rule";
/**
 * Success
 */
export declare class ListSafetyRulesResponse extends SpeakeasyBase {
    nextToken?: string;
    safetyRules?: Rule[];
}
