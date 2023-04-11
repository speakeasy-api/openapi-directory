import { SpeakeasyBase } from "../../../internal/utils";
import { ImportJobsResponse } from "./importjobsresponse";
/**
 * Success
 */
export declare class GetSegmentImportJobsResponse extends SpeakeasyBase {
    /**
     * Provides information about the status and settings of all the import jobs that are associated with an application or segment. An import job is a job that imports endpoint definitions from one or more files.
     */
    importJobsResponse: ImportJobsResponse;
}
