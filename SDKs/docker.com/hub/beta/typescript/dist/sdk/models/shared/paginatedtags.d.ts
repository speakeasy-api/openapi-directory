import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * list repository tags
 */
export declare class PaginatedTags extends SpeakeasyBase {
    /**
     * total number of results available across all pages
     */
    count?: number;
    /**
     * link to next page of results if any
     */
    next?: string;
    /**
     * link to previous page of results  if any
     */
    previous?: string;
    results?: Tag[];
}
