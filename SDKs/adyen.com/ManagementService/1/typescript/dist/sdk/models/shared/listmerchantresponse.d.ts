import { SpeakeasyBase } from "../../../internal/utils";
import { Merchant } from "./merchant";
import { PaginationLinks } from "./paginationlinks";
/**
 * OK - the request has succeeded.
 */
export declare class ListMerchantResponse extends SpeakeasyBase {
    links?: PaginationLinks;
    /**
     * The list of merchant accounts.
     */
    data?: Merchant[];
    /**
     * Total number of items.
     */
    itemsTotal: number;
    /**
     * Total number of pages.
     */
    pagesTotal: number;
}
