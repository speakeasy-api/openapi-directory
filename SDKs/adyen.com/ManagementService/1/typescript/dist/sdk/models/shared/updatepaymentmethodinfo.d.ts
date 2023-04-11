import { SpeakeasyBase } from "../../../internal/utils";
import { ShopperStatement } from "./shopperstatement";
export declare class UpdatePaymentMethodInfo extends SpeakeasyBase {
    /**
     * The list of countries where a payment method is available. By default, all countries supported by the payment method.
     */
    countries?: string[];
    /**
     * The list of currencies that a payment method supports. By default, all currencies supported by the payment method.
     */
    currencies?: string[];
    /**
     * Custom routing flags for acquirer routing.
     */
    customRoutingFlags?: string[];
    /**
     * Indicates whether the payment method is enabled (**true**) or disabled (**false**).
     */
    enabled?: boolean;
    shopperStatement?: ShopperStatement;
    /**
     * The list of stores for this payment method
     */
    storeIds?: string[];
}
