import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentClassificationJobProperties } from "./documentclassificationjobproperties";
/**
 * Success
 */
export declare class ListDocumentClassificationJobsResponse extends SpeakeasyBase {
    documentClassificationJobPropertiesList?: DocumentClassificationJobProperties[];
    nextToken?: string;
}
