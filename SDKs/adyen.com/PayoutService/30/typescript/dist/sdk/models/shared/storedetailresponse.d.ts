import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK - the request has succeeded.
 */
export declare class StoreDetailResponse extends SpeakeasyBase {
    /**
     * This field contains additional data, which may be returned in a particular response.
     */
    additionalData?: Record<string, string>;
    /**
     * A new reference to uniquely identify this request.
     */
    pspReference: string;
    /**
     * The token which you can use later on for submitting the payout.
     */
    recurringDetailReference: string;
    /**
     * The result code of the transaction. `Success` indicates that the details were stored successfully.
     */
    resultCode: string;
}
