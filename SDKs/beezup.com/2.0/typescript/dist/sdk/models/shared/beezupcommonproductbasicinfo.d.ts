import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The basic information related to a product
 */
export declare class BeezUPCommonProductBasicInfo extends SpeakeasyBase {
    /**
     * Indicates if the product still exists in your catalog
     */
    productExists: boolean;
    /**
     * The product identifier
     */
    productId: string;
    /**
     * The product image Url
     */
    productImageUrl?: string;
    /**
     * The product SKU
     */
    productSku: string;
    /**
     * The product tile
     */
    productTitle: string;
}
