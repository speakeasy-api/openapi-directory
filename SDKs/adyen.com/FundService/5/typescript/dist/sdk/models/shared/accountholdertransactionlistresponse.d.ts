import { SpeakeasyBase } from "../../../internal/utils";
import { AccountTransactionList } from "./accounttransactionlist";
import { ErrorFieldType } from "./errorfieldtype";
/**
 * OK - the request has succeeded.
 */
export declare class AccountHolderTransactionListResponse extends SpeakeasyBase {
    /**
     * A list of the transactions.
     */
    accountTransactionLists?: AccountTransactionList[];
    /**
     * Contains field validation errors that would prevent requests from being processed.
     */
    invalidFields?: ErrorFieldType[];
    /**
     * The reference of a request. Can be used to uniquely identify the request.
     */
    pspReference?: string;
    /**
     * The result code.
     */
    resultCode?: string;
}
