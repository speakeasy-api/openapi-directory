import { SpeakeasyBase } from "../../../internal/utils";
import { PaginationResultLinks } from "./paginationresultlinks";
export declare class PaginationResult extends SpeakeasyBase {
    /**
     * The entry count currently returned
     */
    entryCount: number;
    /**
     * The navigation links 'first', 'last', 'next', 'previous'
     */
    links: PaginationResultLinks;
    /**
     * The page count
     */
    pageCount: number;
    /**
     * The total entry count
     */
    totalEntryCount: number;
}
