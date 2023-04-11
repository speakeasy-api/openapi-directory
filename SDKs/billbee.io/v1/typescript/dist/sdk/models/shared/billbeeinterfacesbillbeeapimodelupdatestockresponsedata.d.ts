import { SpeakeasyBase } from "../../../internal/utils";
export declare class BillbeeInterfacesBillbeeAPIModelUpdateStockResponseData extends SpeakeasyBase {
    /**
     * The new value for current stock after the update
     */
    currentStock?: number;
    /**
     * A human readable message that explains the result of the operation
     */
    message?: string;
    /**
     * The old value for current stock before the update
     */
    oldStock?: number;
    /**
     * The SKU of the article to update the current stock
     */
    sku?: string;
    /**
     * The value of the unfulfilled amount (reserved) of the article
     */
    unfulfilledAmount?: number;
}
