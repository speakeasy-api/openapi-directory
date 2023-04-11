import { SpeakeasyBase } from "../../../internal/utils";
import { ImportReadSetJobItem } from "./importreadsetjobitem";
/**
 * Success
 */
export declare class ListReadSetImportJobsResponse extends SpeakeasyBase {
    importJobs?: ImportReadSetJobItem[];
    nextToken?: string;
}
