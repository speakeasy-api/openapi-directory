import { SpeakeasyBase } from "../../../internal/utils";
import { DataQualityRuleResult } from "./dataqualityruleresult";
import { DataSource } from "./datasource";
/**
 * Success
 */
export declare class GetDataQualityResultResponse extends SpeakeasyBase {
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
