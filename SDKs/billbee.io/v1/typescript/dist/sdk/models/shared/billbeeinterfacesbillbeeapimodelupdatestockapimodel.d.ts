import { SpeakeasyBase } from "../../../internal/utils";
export declare class BillbeeInterfacesBillbeeAPIModelUpdateStockAPIModel extends SpeakeasyBase {
    /**
     * Automatically reduce the NewQuantity by the currently not fulfilled amount
     */
    autosubtractReservedAmount?: boolean;
    /**
     * Optional the ID of the Billbee product to update
     */
    billbeeId?: number;
    /**
     * This parameter is currently ignored
     */
    deltaQuantity?: number;
    /**
     * If true, every sent stockchange is stored and transmitted to the connected shop, even if the value has not changed
     */
    forceSendStockToShops?: boolean;
    /**
     * The new absolute stock quantity for the product you want to set
     */
    newQuantity?: number;
    /**
     * This parameter is currently ignored
     */
    oldQuantity?: number;
    /**
     * Optional a reason text for the stock update
     */
    reason?: string;
    /**
     * The SKU of the product to update
     */
    sku?: string;
    /**
     * Optional the stock id if the feature multi stock is activated
     */
    stockId?: number;
}
