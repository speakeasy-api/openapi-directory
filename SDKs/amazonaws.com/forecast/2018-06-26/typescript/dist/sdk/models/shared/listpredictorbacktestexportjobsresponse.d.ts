import { SpeakeasyBase } from "../../../internal/utils";
import { PredictorBacktestExportJobSummary } from "./predictorbacktestexportjobsummary";
/**
 * Success
 */
export declare class ListPredictorBacktestExportJobsResponse extends SpeakeasyBase {
    nextToken?: string;
    predictorBacktestExportJobs?: PredictorBacktestExportJobSummary[];
}
