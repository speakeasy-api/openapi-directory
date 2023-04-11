import { SpeakeasyBase } from "../../../internal/utils";
import { AnnotationStoreItem } from "./annotationstoreitem";
/**
 * Success
 */
export declare class ListAnnotationStoresResponse extends SpeakeasyBase {
    annotationStores?: AnnotationStoreItem[];
    nextToken?: string;
}
