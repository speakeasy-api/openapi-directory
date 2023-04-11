import { SpeakeasyBase } from "../../../internal/utils";
import { DataQualityRulesetFilterCriteria } from "./dataqualityrulesetfiltercriteria";
export declare class ListDataQualityRulesetsRequest extends SpeakeasyBase {
    filter?: DataQualityRulesetFilterCriteria;
    maxResults?: number;
    nextToken?: string;
    tags?: Record<string, string>;
}
