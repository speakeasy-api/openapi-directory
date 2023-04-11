import { SpeakeasyBase } from "../../../internal/utils";
import { NumberOrderItem } from "./numberorderitem";
/**
 * A current status of an order. Available values: NEW, PROCESSING, FINISHED, ERRORED, VOID, WAIT_FOR_PAYMENT, REJECTED
 */
export declare enum NumberOrderStatusEnum {
    Processing = "PROCESSING",
    Finished = "FINISHED",
    PaymentError = "PAYMENT_ERROR",
    Void = "VOID",
    WaitForPayment = "WAIT_FOR_PAYMENT",
    PartiallyAdjusted = "PARTIALLY_ADJUSTED",
    Adjusted = "ADJUSTED",
    New = "NEW",
    Errored = "ERRORED",
    ApproveTierOne = "APPROVE_TIER_ONE",
    ApproveTierTwo = "APPROVE_TIER_TWO",
    Rejected = "REJECTED"
}
/**
 * Represents an order created on the CallFire platform
 */
export declare class NumberOrder extends SpeakeasyBase {
    /**
     * The time when the given resource was created, formatted in unix time milliseconds (read only). Example: 1473781817000
     */
    created?: number;
    /**
     * An id of an order
     */
    id?: number;
    /**
     * Represents an order item of a particular order
     */
    keywords?: NumberOrderItem;
    /**
     * Represents an order item of a particular order
     */
    localNumbers?: NumberOrderItem;
    /**
     * ~
     */
    salesTax?: number;
    /**
     * A current status of an order. Available values: NEW, PROCESSING, FINISHED, ERRORED, VOID, WAIT_FOR_PAYMENT, REJECTED
     */
    status?: NumberOrderStatusEnum;
    /**
     * ~
     */
    summary?: number;
    /**
     * Represents an order item of a particular order
     */
    tollFreeNumbers?: NumberOrderItem;
    /**
     * ~
     */
    total?: number;
    /**
     * A total cost of an order
     */
    totalCost?: number;
}
