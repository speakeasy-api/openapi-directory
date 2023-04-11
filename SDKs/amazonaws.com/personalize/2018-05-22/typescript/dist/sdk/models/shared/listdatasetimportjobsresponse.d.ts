import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetImportJobSummary } from "./datasetimportjobsummary";
/**
 * Success
 */
export declare class ListDatasetImportJobsResponse extends SpeakeasyBase {
    datasetImportJobs?: DatasetImportJobSummary[];
    nextToken?: string;
}
