import { SpeakeasyBase } from "../../../internal/utils";
import { BillbeeInterfacesBillbeeAPIModelOrderItemAttribute } from "./billbeeinterfacesbillbeeapimodelorderitemattribute";
import { BillbeeInterfacesBillbeeAPIModelSoldProduct, BillbeeInterfacesBillbeeAPIModelSoldProductInput } from "./billbeeinterfacesbillbeeapimodelsoldproduct";
export declare class BillbeeInterfacesBillbeeAPIModelOrderItemInput extends SpeakeasyBase {
    /**
     * A list of product attributes for this position
     */
    attributes?: BillbeeInterfacesBillbeeAPIModelOrderItemAttribute[];
    /**
     * The billbee id of this item
     */
    billbeeId?: number;
    /**
     * Sets the discount in percent
     */
    discount?: number;
    /**
     * If true, the import of this order won't adjust the stock level at billbee.
     */
    dontAdjustStock?: boolean;
    /**
     * If true, the price will be overwritten by the known article price in billbee if available
     */
    getPriceFromArticleIfAny?: boolean;
    /**
     * Contains the SKU from OrderDetail (if available) or from Product
     */
    invoiceSKU?: string;
    /**
     * Determines if it is a coupon, which is interpreted as tax-free payment
     */
    isCoupon?: boolean;
    product?: BillbeeInterfacesBillbeeAPIModelSoldProductInput;
    /**
     * The sold quantity
     */
    quantity?: number;
    /**
     * Contains the used serial number
     */
    serialNumber?: string;
    /**
     * Determines if it is a coupon, which is interpreted as tax-free payment
     */
    shippingProfileId?: string;
    /**
     * The tax amount in the total price
     */
    taxAmount?: number;
    /**
     * The tax index.
     */
    taxIndex?: number;
    /**
     * The total price (unit price * quantity)
     */
    totalPrice?: number;
    /**
     * Id of the individual transaction. Only required by Ebay to detect aggregated orders
     */
    transactionId?: string;
    /**
     * Is just used for the billbee api
     */
    unrebatedTotalPrice?: number;
}
export declare class BillbeeInterfacesBillbeeAPIModelOrderItem extends SpeakeasyBase {
    /**
     * A list of product attributes for this position
     */
    attributes?: BillbeeInterfacesBillbeeAPIModelOrderItemAttribute[];
    /**
     * The billbee id of this item
     */
    billbeeId?: number;
    /**
     * Sets the discount in percent
     */
    discount?: number;
    /**
     * If true, the import of this order won't adjust the stock level at billbee.
     */
    dontAdjustStock?: boolean;
    /**
     * If true, the price will be overwritten by the known article price in billbee if available
     */
    getPriceFromArticleIfAny?: boolean;
    /**
     * Contains the SKU from OrderDetail (if available) or from Product
     */
    invoiceSKU?: string;
    /**
     * Determines if it is a coupon, which is interpreted as tax-free payment
     */
    isCoupon?: boolean;
    product?: BillbeeInterfacesBillbeeAPIModelSoldProduct;
    /**
     * The sold quantity
     */
    quantity?: number;
    /**
     * Contains the used serial number
     */
    serialNumber?: string;
    /**
     * Determines if it is a coupon, which is interpreted as tax-free payment
     */
    shippingProfileId?: string;
    /**
     * The tax amount in the total price
     */
    taxAmount?: number;
    /**
     * The tax index.
     */
    taxIndex?: number;
    /**
     * The total price (unit price * quantity)
     */
    totalPrice?: number;
    /**
     * Id of the individual transaction. Only required by Ebay to detect aggregated orders
     */
    transactionId?: string;
    /**
     * Is just used for the billbee api
     */
    unrebatedTotalPrice?: number;
}
