import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentClassifierProperties } from "./documentclassifierproperties";
/**
 * Success
 */
export declare class ListDocumentClassifiersResponse extends SpeakeasyBase {
    documentClassifierPropertiesList?: DocumentClassifierProperties[];
    nextToken?: string;
}
