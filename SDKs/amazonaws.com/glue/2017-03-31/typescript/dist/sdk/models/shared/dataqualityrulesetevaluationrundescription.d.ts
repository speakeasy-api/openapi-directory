import { SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";
import { TaskStatusTypeEnum } from "./taskstatustypeenum";
/**
 * Describes the result of a data quality ruleset evaluation run.
 */
export declare class DataQualityRulesetEvaluationRunDescription extends SpeakeasyBase {
    dataSource?: DataSource;
    runId?: string;
    startedOn?: Date;
    status?: TaskStatusTypeEnum;
}
