import { SpeakeasyBase } from "../../../internal/utils";
import { Rule } from "./rule";
/**
 * Success
 */
export declare class ListRulesResponse extends SpeakeasyBase {
    nextToken?: string;
    rules?: Rule[];
}
