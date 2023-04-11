import { SpeakeasyBase } from "../../../internal/utils";
import { DataQualityRuleResult } from "./dataqualityruleresult";
import { DataSource } from "./datasource";
/**
 * Describes a data quality result.
 */
export declare class DataQualityResult extends SpeakeasyBase {
    completedOn?: Date;
    dataSource?: DataSource;
    evaluationContext?: string;
    jobName?: string;
    jobRunId?: string;
    resultId?: string;
    ruleResults?: DataQualityRuleResult[];
    rulesetEvaluationRunId?: string;
    rulesetName?: string;
    score?: number;
    startedOn?: Date;
}
