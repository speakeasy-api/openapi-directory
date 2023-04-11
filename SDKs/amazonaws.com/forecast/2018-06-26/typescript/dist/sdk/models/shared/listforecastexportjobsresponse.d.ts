import { SpeakeasyBase } from "../../../internal/utils";
import { ForecastExportJobSummary } from "./forecastexportjobsummary";
/**
 * Success
 */
export declare class ListForecastExportJobsResponse extends SpeakeasyBase {
    forecastExportJobs?: ForecastExportJobSummary[];
    nextToken?: string;
}
