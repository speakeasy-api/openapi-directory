import { SpeakeasyBase } from "../../../internal/utils";
import { DataQualityTargetTable } from "./dataqualitytargettable";
/**
 * Success
 */
export declare class GetDataQualityRulesetResponse extends SpeakeasyBase {
    createdOn?: Date;
    description?: string;
    lastModifiedOn?: Date;
    name?: string;
    recommendationRunId?: string;
    ruleset?: string;
    targetTable?: DataQualityTargetTable;
}
