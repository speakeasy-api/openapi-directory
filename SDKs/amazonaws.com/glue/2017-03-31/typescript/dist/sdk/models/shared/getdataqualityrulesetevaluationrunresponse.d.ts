import { SpeakeasyBase } from "../../../internal/utils";
import { DataQualityEvaluationRunAdditionalRunOptions } from "./dataqualityevaluationrunadditionalrunoptions";
import { DataSource } from "./datasource";
import { TaskStatusTypeEnum } from "./taskstatustypeenum";
/**
 * Success
 */
export declare class GetDataQualityRulesetEvaluationRunResponse extends SpeakeasyBase {
    additionalRunOptions?: DataQualityEvaluationRunAdditionalRunOptions;
    completedOn?: Date;
    dataSource?: DataSource;
    errorString?: string;
    executionTime?: number;
    lastModifiedOn?: Date;
    numberOfWorkers?: number;
    resultIds?: string[];
    role?: string;
    rulesetNames?: string[];
    runId?: string;
    startedOn?: Date;
    status?: TaskStatusTypeEnum;
    timeout?: number;
}
