import { SpeakeasyBase } from "../../../internal/utils";
import { ProductAttachmentApiModel } from "./productattachmentapimodel";
import { ProductCouponApiModel } from "./productcouponapimodel";
import { ProductDiscountApiModel } from "./productdiscountapimodel";
import { ProductGatewayApiModel } from "./productgatewayapimodel";
import { ProductItemApiModel } from "./productitemapimodel";
/**
 * Product availability status
 */
export declare enum ProductCreateApiModelStatusEnum {
    Active = "Active",
    NotAvailable = "NotAvailable",
    Inactive = "Inactive"
}
export declare class ProductCreateApiModel extends SpeakeasyBase {
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
    status?: ProductCreateApiModelStatusEnum;
    /**
     * What happens next description
     */
    whatHappensNextDescription?: string;
}
