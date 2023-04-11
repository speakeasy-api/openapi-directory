import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActivateSubscriptionRequest extends SpeakeasyBase {
    /**
     * If set, the date must be in the past the subscription will recover existing orders using the begin period order last modification date. If not set then you will receive new/updated orders in real-time.
     */
    recoverBeginPeriodOrderLastModificationUtcDate?: Date;
    /**
     * If end period set, first the date must be in the past, the subscription will recover existing orders using the begin and the end period order last modification date.
     *
     * @remarks
     * If end period is not set and the begin period is set, then you will recover existing orders from the past using the begin period last modification date and after than you will continue to receive new/updated orders in real-time.
     * If begin/end period are not set then you will receive new/updated orders in real-time.
     * REMARK: The begin period is required if the end period is fulfilled.
     * REMARK: If the end period is order last modification date is indicated then once we have push all orders to your target url the subscription will be desactivated.
     */
    recoverEndPeriodOrderLastModificationUtcDate?: Date;
}
