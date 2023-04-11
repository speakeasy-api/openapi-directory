import { SpeakeasyBase } from "../../../internal/utils";
/**
 * New status of the order
 */
export declare enum ChangeOrderStatusApiModelStatusEnum {
    PendingPayment = "PendingPayment",
    Processing = "Processing",
    Shipped = "Shipped",
    Completed = "Completed",
    OnHold = "OnHold",
    Cancelled = "Cancelled",
    Refunded = "Refunded",
    Failed = "Failed"
}
export declare class ChangeOrderStatusApiModel extends SpeakeasyBase {
    /**
     * Order Id
     */
    id?: number;
    /**
     * Reason for status change
     */
    reason?: string;
    /**
     * New status of the order
     */
    status?: ChangeOrderStatusApiModelStatusEnum;
}
