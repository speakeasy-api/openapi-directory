import { SpeakeasyBase } from "../../../internal/utils";
import { DataQualityTargetTable } from "./dataqualitytargettable";
/**
 * Describes a data quality ruleset returned by <code>GetDataQualityRuleset</code>.
 */
export declare class DataQualityRulesetListDetails extends SpeakeasyBase {
    createdOn?: Date;
    description?: string;
    lastModifiedOn?: Date;
    name?: string;
    recommendationRunId?: string;
    ruleCount?: number;
    targetTable?: DataQualityTargetTable;
}
