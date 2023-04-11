import { SpeakeasyBase } from "../../../internal/utils";
import { ApiCredential } from "./apicredential";
import { PaginationLinks } from "./paginationlinks";
/**
 * OK - the request has succeeded.
 */
export declare class ListMerchantApiCredentialsResponse extends SpeakeasyBase {
    links?: PaginationLinks;
    /**
     * The list of API credentials.
     */
    data?: ApiCredential[];
    /**
     * Total number of items.
     */
    itemsTotal: number;
    /**
     * Total number of pages.
     */
    pagesTotal: number;
}
