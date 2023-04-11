import { SpeakeasyBase } from "../../../internal/utils";
import { PaginationLinks } from "./paginationlinks";
import { Webhook } from "./webhook";
/**
 * OK - the request has succeeded.
 */
export declare class ListWebhooksResponse extends SpeakeasyBase {
    links?: PaginationLinks;
    /**
     * Reference to the account.
     */
    accountReference?: string;
    /**
     * The list of webhooks configured for this account.
     */
    data?: Webhook[];
    /**
     * Total number of items.
     */
    itemsTotal: number;
    /**
     * Total number of pages.
     */
    pagesTotal: number;
}
