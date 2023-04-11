import { SpeakeasyBase } from "../../../internal/utils";
import { AccountHolder } from "./accountholder";
/**
 * OK - the request has succeeded.
 */
export declare class PaginatedAccountHoldersResponse extends SpeakeasyBase {
    /**
     * List of account holders.
     */
    accountHolders: AccountHolder[];
    /**
     * Indicates whether there are more items on the next page.
     */
    hasNext: boolean;
    /**
     * Indicates whether there are more items on the previous page.
     */
    hasPrevious: boolean;
}
