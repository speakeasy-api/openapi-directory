import { SpeakeasyBase } from "../../../internal/utils";
import { AnnotationImportJobItem } from "./annotationimportjobitem";
/**
 * Success
 */
export declare class ListAnnotationImportJobsResponse extends SpeakeasyBase {
    annotationImportJobs?: AnnotationImportJobItem[];
    nextToken?: string;
}
