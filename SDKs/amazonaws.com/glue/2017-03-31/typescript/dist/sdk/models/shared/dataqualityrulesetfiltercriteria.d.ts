import { SpeakeasyBase } from "../../../internal/utils";
import { DataQualityTargetTable } from "./dataqualitytargettable";
/**
 * The criteria used to filter data quality rulesets.
 */
export declare class DataQualityRulesetFilterCriteria extends SpeakeasyBase {
    createdAfter?: Date;
    createdBefore?: Date;
    description?: string;
    lastModifiedAfter?: Date;
    lastModifiedBefore?: Date;
    name?: string;
    targetTable?: DataQualityTargetTable;
}
