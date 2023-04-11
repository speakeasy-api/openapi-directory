import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK - the request has succeeded.
 */
export declare class ScheduleAccountUpdaterResult extends SpeakeasyBase {
    /**
     * Adyen's 16-character unique reference associated with the transaction. This value is globally unique; quote it when communicating with us about this request.
     */
    pspReference: string;
    /**
     * The result of scheduling an Account Updater. If scheduling was successful, this field returns **Success**; otherwise it contains the error message.
     */
    result: string;
}
