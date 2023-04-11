import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyDetailsApiModel } from "./currencydetailsapimodel";
/**
 * Product availability status
 */
export declare enum ProductDetailsApiModelStatusEnum {
    Active = "Active",
    NotAvailable = "NotAvailable",
    Inactive = "Inactive"
}
export declare class ProductDetailsApiModel extends SpeakeasyBase {
    /**
     * Product short link
     */
    accessToken?: string;
    /**
     * After payment description
     */
    afterPaymentDescription?: string;
    /**
     * Default button call to action
     *
     * @remarks
     * Ex: Buy now, subscribe, ...
     */
    buttonCallToAction?: string;
    currency?: CurrencyDetailsApiModel;
    /**
     * Foreign key Currency
     */
    currencyId?: number;
    /**
     * Product description
     */
    description?: string;
    /**
     * Product id
     */
    id?: number;
    /**
     * Indicate that the product is set as featured
     */
    isFeatured?: boolean;
    /**
     * Product alias
     */
    name?: string;
    /**
     * Cost for shipping the product
     */
    shippingAmount?: number;
    /**
     * Client instructions for shipping
     */
    shippingDescription?: string;
    /**
     * Product availability status
     */
    status?: ProductDetailsApiModelStatusEnum;
    /**
     * Subtotal amount of product
     */
    subTotalAmount?: number;
    /**
     * Total amount of product
     */
    totalAmount?: number;
    /**
     * Total amount of product with shipping
     */
    totalWithShipping?: number;
    /**
     * What happens next description
     */
    whatHappensNextDescription?: string;
}
