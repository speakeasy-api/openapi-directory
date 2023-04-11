import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * The result of the payment. Possible values:
 *
 * @remarks
 *
 * * **Success** – The operation has been completed successfully.
 * * **Refused** – The operation was refused. The reason is given in the `refusalReason` field.
 * * **Error** – There was an error when the operation was processed. The reason is given in the `refusalReason` field.
 * * **NotEnoughBalance** – The amount on the payment method is lower than the amount given in the request. Only applicable to balance checks.
 *
 */
export declare enum StoredValueBalanceCheckResponseResultCodeEnum {
    Success = "Success",
    Refused = "Refused",
    Error = "Error",
    NotEnoughBalance = "NotEnoughBalance"
}
/**
 * OK - the request has succeeded.
 */
export declare class StoredValueBalanceCheckResponse extends SpeakeasyBase {
    currentBalance?: Amount;
    /**
     * Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.
     */
    pspReference?: string;
    /**
     * If the transaction is refused or an error occurs, this field holds Adyen's mapped reason for the refusal or a description of the error.
     *
     * @remarks
     *
     * When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.
     */
    refusalReason?: string;
    /**
     * The result of the payment. Possible values:
     *
     * @remarks
     *
     * * **Success** – The operation has been completed successfully.
     * * **Refused** – The operation was refused. The reason is given in the `refusalReason` field.
     * * **Error** – There was an error when the operation was processed. The reason is given in the `refusalReason` field.
     * * **NotEnoughBalance** – The amount on the payment method is lower than the amount given in the request. Only applicable to balance checks.
     *
     */
    resultCode?: StoredValueBalanceCheckResponseResultCodeEnum;
    /**
     * Raw refusal reason received from the third party, where available
     */
    thirdPartyRefusalReason?: string;
}
