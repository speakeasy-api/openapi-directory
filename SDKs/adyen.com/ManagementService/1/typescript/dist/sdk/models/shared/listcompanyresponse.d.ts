import { SpeakeasyBase } from "../../../internal/utils";
import { Company } from "./company";
import { PaginationLinks } from "./paginationlinks";
/**
 * OK - the request has succeeded.
 */
export declare class ListCompanyResponse extends SpeakeasyBase {
    links?: PaginationLinks;
    /**
     * The list of companies.
     */
    data?: Company[];
    /**
     * Total number of items.
     */
    itemsTotal: number;
    /**
     * Total number of pages.
     */
    pagesTotal: number;
}
