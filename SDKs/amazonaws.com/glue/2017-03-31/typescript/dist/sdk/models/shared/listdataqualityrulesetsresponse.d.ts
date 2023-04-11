import { SpeakeasyBase } from "../../../internal/utils";
import { DataQualityRulesetListDetails } from "./dataqualityrulesetlistdetails";
/**
 * Success
 */
export declare class ListDataQualityRulesetsResponse extends SpeakeasyBase {
    nextToken?: string;
    rulesets?: DataQualityRulesetListDetails[];
}
