import { SpeakeasyBase } from "../../../internal/utils";
import { ExportReadSetJobDetail } from "./exportreadsetjobdetail";
/**
 * Success
 */
export declare class ListReadSetExportJobsResponse extends SpeakeasyBase {
    exportJobs?: ExportReadSetJobDetail[];
    nextToken?: string;
}
