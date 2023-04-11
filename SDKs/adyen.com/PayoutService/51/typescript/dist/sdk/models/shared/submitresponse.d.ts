import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK - the request has succeeded.
 */
export declare class SubmitResponse extends SpeakeasyBase {
    /**
     * This field contains additional data, which may be returned in a particular response.
     */
    additionalData?: Record<string, string>;
    /**
     * A new reference to uniquely identify this request.
     */
    pspReference: string;
    /**
     * In case of refusal, an informational message for the reason.
     */
    refusalReason?: string;
    /**
     * The response:
     *
     * @remarks
     * * In case of success, it is `payout-submit-received`.
     * * In case of an error, an informational message is returned.
     */
    resultCode: string;
}
