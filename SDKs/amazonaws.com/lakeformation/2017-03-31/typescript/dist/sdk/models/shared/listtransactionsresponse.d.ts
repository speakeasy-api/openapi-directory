import { SpeakeasyBase } from "../../../internal/utils";
import { TransactionDescription } from "./transactiondescription";
/**
 * Success
 */
export declare class ListTransactionsResponse extends SpeakeasyBase {
    nextToken?: string;
    transactions?: TransactionDescription[];
}
