import { SpeakeasyBase } from "../../../internal/utils";
import { ImportReferenceJobItem } from "./importreferencejobitem";
/**
 * Success
 */
export declare class ListReferenceImportJobsResponse extends SpeakeasyBase {
    importJobs?: ImportReferenceJobItem[];
    nextToken?: string;
}
