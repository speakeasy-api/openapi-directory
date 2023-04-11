import { SpeakeasyBase } from "../../../internal/utils";
import { PaginationLinks } from "./paginationlinks";
import { Store } from "./store";
/**
 * OK - the request has succeeded.
 */
export declare class ListStoresResponse extends SpeakeasyBase {
    links?: PaginationLinks;
    /**
     * List of stores
     */
    data?: Store[];
    /**
     * Total number of items.
     */
    itemsTotal: number;
    /**
     * Total number of pages.
     */
    pagesTotal: number;
}
