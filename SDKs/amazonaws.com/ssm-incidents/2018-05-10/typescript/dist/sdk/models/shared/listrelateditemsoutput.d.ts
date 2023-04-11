import { SpeakeasyBase } from "../../../internal/utils";
import { RelatedItem } from "./relateditem";
/**
 * Success
 */
export declare class ListRelatedItemsOutput extends SpeakeasyBase {
    nextToken?: string;
    relatedItems: RelatedItem[];
}
