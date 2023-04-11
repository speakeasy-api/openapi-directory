import { SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";
import { TaskStatusTypeEnum } from "./taskstatustypeenum";
/**
 * Success
 */
export declare class GetDataQualityRuleRecommendationRunResponse extends SpeakeasyBase {
    completedOn?: Date;
    createdRulesetName?: string;
    dataSource?: DataSource;
    errorString?: string;
    executionTime?: number;
    lastModifiedOn?: Date;
    numberOfWorkers?: number;
    recommendedRuleset?: string;
    role?: string;
    runId?: string;
    startedOn?: Date;
    status?: TaskStatusTypeEnum;
    timeout?: number;
}
