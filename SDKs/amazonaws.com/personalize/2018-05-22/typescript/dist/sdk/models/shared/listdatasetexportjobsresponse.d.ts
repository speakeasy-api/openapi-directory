import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetExportJobSummary } from "./datasetexportjobsummary";
/**
 * Success
 */
export declare class ListDatasetExportJobsResponse extends SpeakeasyBase {
    datasetExportJobs?: DatasetExportJobSummary[];
    nextToken?: string;
}
