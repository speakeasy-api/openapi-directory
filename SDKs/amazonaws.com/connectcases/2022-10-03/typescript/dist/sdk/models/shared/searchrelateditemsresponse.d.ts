import { SpeakeasyBase } from "../../../internal/utils";
import { SearchRelatedItemsResponseItem } from "./searchrelateditemsresponseitem";
/**
 * Success
 */
export declare class SearchRelatedItemsResponse extends SpeakeasyBase {
    nextToken?: string;
    relatedItems: SearchRelatedItemsResponseItem[];
}
