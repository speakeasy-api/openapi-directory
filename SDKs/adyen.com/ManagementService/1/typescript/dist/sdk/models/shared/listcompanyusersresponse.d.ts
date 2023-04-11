import { SpeakeasyBase } from "../../../internal/utils";
import { CompanyUser } from "./companyuser";
import { PaginationLinks } from "./paginationlinks";
/**
 * OK - the request has succeeded.
 */
export declare class ListCompanyUsersResponse extends SpeakeasyBase {
    links?: PaginationLinks;
    /**
     * The list of users.
     */
    data?: CompanyUser[];
    /**
     * Total number of items.
     */
    itemsTotal: number;
    /**
     * Total number of pages.
     */
    pagesTotal: number;
}
