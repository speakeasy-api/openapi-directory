import { SpeakeasyBase } from "../../../internal/utils";
import { BalanceAccount } from "./balanceaccount";
/**
 * OK - the request has succeeded.
 */
export declare class PaginatedBalanceAccountsResponse extends SpeakeasyBase {
    /**
     * List of balance accounts.
     */
    balanceAccounts: BalanceAccount[];
    /**
     * Indicates whether there are more items on the next page.
     */
    hasNext: boolean;
    /**
     * Indicates whether there are more items on the previous page.
     */
    hasPrevious: boolean;
}
