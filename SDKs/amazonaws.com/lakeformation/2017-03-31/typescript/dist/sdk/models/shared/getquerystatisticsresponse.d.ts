import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionStatistics } from "./executionstatistics";
import { PlanningStatistics } from "./planningstatistics";
/**
 * Success
 */
export declare class GetQueryStatisticsResponse extends SpeakeasyBase {
    executionStatistics?: ExecutionStatistics;
    planningStatistics?: PlanningStatistics;
    querySubmissionTime?: Date;
}
