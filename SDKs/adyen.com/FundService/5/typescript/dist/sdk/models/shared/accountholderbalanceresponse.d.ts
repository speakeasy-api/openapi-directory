import { SpeakeasyBase } from "../../../internal/utils";
import { AccountDetailBalance } from "./accountdetailbalance";
import { DetailBalance } from "./detailbalance";
import { ErrorFieldType } from "./errorfieldtype";
/**
 * OK - the request has succeeded.
 */
export declare class AccountHolderBalanceResponse extends SpeakeasyBase {
    /**
     * A list of each account and their balances.
     */
    balancePerAccount?: AccountDetailBalance[];
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
    totalBalance?: DetailBalance;
}
