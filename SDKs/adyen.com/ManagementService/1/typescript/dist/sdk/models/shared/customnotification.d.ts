import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
export declare class CustomNotification extends SpeakeasyBase {
    amount?: Amount;
    /**
     * The event that caused the notification to be sent.Currently supported values:
     *
     * @remarks
     * * **AUTHORISATION**
     * * **CANCELLATION**
     * * **REFUND**
     * * **CAPTURE**
     * * **DEACTIVATE_RECURRING**
     * * **REPORT_AVAILABLE**
     * * **CHARGEBACK**
     * * **REQUEST_FOR_INFORMATION**
     * * **NOTIFICATION_OF_CHARGEBACK**
     * * **NOTIFICATIONTEST**
     * * **ORDER_OPENED**
     * * **ORDER_CLOSED**
     * * **CHARGEBACK_REVERSED**
     * * **REFUNDED_REVERSED**
     * * **REFUND_WITH_DATA**
     */
    eventCode?: string;
    /**
     * The time of the event. Format: [ISO 8601](http://www.w3.org/TR/NOTE-datetime), YYYY-MM-DDThh:mm:ssTZD.
     */
    eventDate?: Date;
    /**
     * Your reference for the custom test notification.
     */
    merchantReference?: string;
    /**
     * The payment method for the payment that the notification is about. Possible values:
     *
     * @remarks
     * * **amex**
     * * **visa**
     * * **mc**
     * * **maestro**
     * * **bcmc**
     * * **paypal**
     *  * **sms**
     *  * **bankTransfer_NL**
     * * **bankTransfer_DE**
     * * **bankTransfer_BE**
     * * **ideal**
     * * **elv**
     * * **sepadirectdebit**
     *
     */
    paymentMethod?: string;
    /**
     * A descripton of what caused the notification.
     */
    reason?: string;
    /**
     * The outcome of the event which the notification is about. Set to either **true** or **false**.
     */
    success?: boolean;
}
