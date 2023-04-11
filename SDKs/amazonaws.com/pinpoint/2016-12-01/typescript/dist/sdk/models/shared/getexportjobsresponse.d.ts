import { SpeakeasyBase } from "../../../internal/utils";
import { ExportJobsResponse } from "./exportjobsresponse";
/**
 * Success
 */
export declare class GetExportJobsResponse extends SpeakeasyBase {
    /**
     * Provides information about all the export jobs that are associated with an application or segment. An export job is a job that exports endpoint definitions to a file.
     */
    exportJobsResponse: ExportJobsResponse;
}
