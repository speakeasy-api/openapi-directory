import { SpeakeasyBase } from "../../../internal/utils";
import { CompanyApiCredential } from "./companyapicredential";
import { PaginationLinks } from "./paginationlinks";
/**
 * OK - the request has succeeded.
 */
export declare class ListCompanyApiCredentialsResponse extends SpeakeasyBase {
    links?: PaginationLinks;
    /**
     * The list of API credentials.
     */
    data?: CompanyApiCredential[];
    /**
     * Total number of items.
     */
    itemsTotal: number;
    /**
     * Total number of pages.
     */
    pagesTotal: number;
}
