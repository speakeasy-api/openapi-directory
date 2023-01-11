import { SpeakeasyBase } from "../../../internal/utils";
import { BankAccount } from "./bankaccount";
/**
 * A object with a data property that contains an array of up to limit bank accounts. Each entry in the array is a separate bank account object. If no more bank accounts are available, the resulting array will be empty.
**/
export declare class BankAccountList extends SpeakeasyBase {
    currentPage?: number;
    data?: BankAccount[];
    lastPage?: number;
    nextPageUrl?: string;
    perPage?: number;
    prevPageUrl?: string;
    total?: number;
}
