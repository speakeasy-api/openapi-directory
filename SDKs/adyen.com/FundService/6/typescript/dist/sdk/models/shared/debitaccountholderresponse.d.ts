import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorFieldType } from "./errorfieldtype";
/**
 * OK - the request has succeeded.
 */
export declare class DebitAccountHolderResponse extends SpeakeasyBase {
    /**
     * The code of the account holder.
     */
    accountHolderCode?: string;
    /**
     * The Adyen-generated unique alphanumeric identifier (UUID) of the account holder's bank account.
     */
    bankAccountUUID?: string;
    /**
     * Contains field validation errors that would prevent requests from being processed.
     */
    invalidFields?: ErrorFieldType[];
    /**
     * List of the `reference` values from the `split` array in the request.
     */
    merchantReferences?: string[];
    /**
     * The reference of a request. Can be used to uniquely identify the request.
     */
    pspReference?: string;
    /**
     * The result code.
     */
    resultCode?: string;
}
