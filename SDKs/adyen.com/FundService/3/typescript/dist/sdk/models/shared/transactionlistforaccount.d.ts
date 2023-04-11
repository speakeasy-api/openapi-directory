import { SpeakeasyBase } from "../../../internal/utils";
export declare class TransactionListForAccount extends SpeakeasyBase {
    /**
     * The account for which to retrieve the transactions.
     */
    accountCode: string;
    /**
     * The page of transactions to retrieve.
     *
     * @remarks
     * Each page lists fifty (50) transactions.  The most recent transactions are included on page 1.
     */
    page: number;
}
