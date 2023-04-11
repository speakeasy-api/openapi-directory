import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyDetailsApiModel } from "./currencydetailsapimodel";
import { ProductAttachmentApiModel } from "./productattachmentapimodel";
import { ProductCouponApiModel } from "./productcouponapimodel";
import { ProductDiscountApiModel } from "./productdiscountapimodel";
import { ProductGatewayApiModel } from "./productgatewayapimodel";
import { ProductItemApiModel } from "./productitemapimodel";
/**
 * Product availability status
 */
export declare enum ProductFullDetailsApiModelStatusEnum {
    Active = "Active",
    NotAvailable = "NotAvailable",
    Inactive = "Inactive"
}
/**
 * OK
 */
export declare class ProductFullDetailsApiModel extends SpeakeasyBase {
    /**
     * Product short link
     */
    accessToken?: string;
    /**
     * After payment description
     */
    afterPaymentDescription?: string;
    /**
     * List of product attachments
     */
    attachments?: ProductAttachmentApiModel[];
    /**
     * Default button call to action
     *
     * @remarks
     * Ex: Buy now, subscribe, ...
     */
    buttonCallToAction?: string;
    /**
     * List of product coupons
     */
    coupons?: ProductCouponApiModel[];
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
     * List of product discounts
     */
    discounts?: ProductDiscountApiModel[];
    /**
     * Product id
     */
    id?: number;
    /**
     * Indicate that the product is set as featured
     */
    isFeatured?: boolean;
    /**
     * List of product items
     */
    items?: ProductItemApiModel[];
    /**
     * Product alias
     */
    name?: string;
    /**
     * List of enabled payment gateways for this product
     */
    paymentGateways?: ProductGatewayApiModel[];
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
    status?: ProductFullDetailsApiModelStatusEnum;
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
