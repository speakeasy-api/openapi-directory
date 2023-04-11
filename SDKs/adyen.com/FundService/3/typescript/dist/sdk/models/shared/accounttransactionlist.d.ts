import { SpeakeasyBase } from "../../../internal/utils";
import { Transaction } from "./transaction";
export declare class AccountTransactionList extends SpeakeasyBase {
    /**
     * The code of the account.
     */
    accountCode?: string;
    /**
     * Indicates whether there is a next page of transactions available.
     */
    hasNextPage?: boolean;
    /**
     * The list of transactions.
     */
    transactions?: Transaction[];
}
