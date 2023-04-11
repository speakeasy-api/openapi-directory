import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK - the request has succeeded.
 */
export declare class RefundFundsTransferResponse extends SpeakeasyBase {
    /**
     * The value supplied by the executing user when initiating the transfer refund; may be used to link multiple transactions.
     */
    merchantReference?: string;
    /**
     * The message of the response.
     */
    message?: string;
    /**
     * A PSP reference of the original fund transfer.
     */
    originalReference?: string;
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
