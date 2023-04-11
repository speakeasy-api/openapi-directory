import { SpeakeasyBase } from "../../../internal/utils";
import { PaginationLinks } from "./paginationlinks";
import { User } from "./user";
/**
 * OK - the request has succeeded.
 */
export declare class ListMerchantUsersResponse extends SpeakeasyBase {
    links?: PaginationLinks;
    /**
     * The list of users.
     */
    data?: User[];
    /**
     * Total number of items.
     */
    itemsTotal: number;
    /**
     * Total number of pages.
     */
    pagesTotal: number;
}
