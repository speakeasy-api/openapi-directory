import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonPaginationResultLinks } from "./beezupcommonpaginationresultlinks";
export declare class BeezUPCommonPaginationResult extends SpeakeasyBase {
    /**
     * The entry count currently returned
     */
    entryCount: number;
    /**
     * The navigation links 'first', 'last', 'next', 'previous'
     */
    links: BeezUPCommonPaginationResultLinks;
    /**
     * The page count
     */
    pageCount: number;
    /**
     * The total entry count
     */
    totalEntryCount: number;
}
