import { SpeakeasyBase } from "../../../internal/utils";
import { PaginationAuth } from "./paginationauth";
import { PaginationOptions } from "./paginationoptions";
export declare class Pagination extends SpeakeasyBase {
    authorization?: PaginationAuth;
    /**
     * Path to load next page of data, or null if not available
     */
    next?: string;
    options?: PaginationOptions;
    /**
     * The current page number.
     *
     * @remarks
     *
     * A value of 0 indicates that the fist page has not yet been loaded. This is
     * useful when wanting to return the paging metadata to indicate how to
     * load in the first page.
     *
     */
    page: number;
    /**
     * Path to load previous page of data, or null if not available.
     */
    previous?: string;
    /**
     * The current page size.
     *
     * @remarks
     *
     * A value of -1 indicates that the size has not yet been determined. This may
     * arise when embedding secure list pagination info in a page which must be cached
     * by a CDN. For example a Bookmarks list.
     *
     */
    size?: number;
    /**
     * The total number of pages available given the current page size.
     *
     * @remarks
     *
     * A value of -1 indicates that the total has not yet been determined. This may
     * arise when embedding secure list pagination info in a page which must be cached
     * by a CDN. For example a Bookmarks list.
     *
     */
    total: number;
}
