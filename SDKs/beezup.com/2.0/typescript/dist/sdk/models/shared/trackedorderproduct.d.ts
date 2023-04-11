import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The basic information related to a product
 */
export declare class TrackedOrderProduct extends SpeakeasyBase {
    /**
     * The product's margin for the order
     */
    margin: number;
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
    productImageUrl: string;
    /**
     * The product SKU
     */
    productSku: string;
    /**
     * The product tile
     */
    productTitle: string;
    /**
     * The quantity of this product for the order
     */
    quantity: number;
    /**
     * The product's unit price for the order
     */
    unitPrice: number;
}
