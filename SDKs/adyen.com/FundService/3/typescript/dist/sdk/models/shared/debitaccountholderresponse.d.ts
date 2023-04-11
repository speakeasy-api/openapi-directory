import { SpeakeasyBase } from "../../../internal/utils";
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
    /**
     * Indicates whether the request is processed asynchronously. Depending on the request's platform settings, the following scenarios may be applied:
     *
     * @remarks
     * * **true**: The request is queued and will be executed when the providing service is available in the order in which the requests are received.
     * * **false**: The processing of the request is immediately attempted; it may result in an error if the providing service is unavailable.
     */
    submittedAsync?: boolean;
}
