import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK - the request has succeeded.
 */
export declare class ModifyResponse extends SpeakeasyBase {
    /**
     * This field contains additional data, which may be returned in a particular response.
     */
    additionalData?: Record<string, string>;
    /**
     * Adyen's 16-character string reference associated with the transaction. This value is globally unique; quote it when communicating with us about this response.
     */
    pspReference: string;
    /**
     * The response:
     *
     * @remarks
     * * In case of success, it is either `payout-confirm-received` or `payout-decline-received`.
     * * In case of an error, an informational message is returned.
     */
    response: string;
}
