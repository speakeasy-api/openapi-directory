import { SpeakeasyBase } from "../../../internal/utils";
export declare class TrackedExternalOrderProduct extends SpeakeasyBase {
    /**
     * The product's margin for the external order. This property is voluntarily a string because the value could be an invalid one
     */
    margin?: string;
    /**
     * We tried to get the catalog product if it's still active based on the product SKU. This property can be null, if we cannot found the product. This is possible if the product is not referenced in the imported catalog.
     */
    productActive?: boolean;
    /**
     * We tried to get the catalog product identifier based on the product SKU. This property can be null, if we cannot found the product. This is possible if the product is not referenced in the imported catalog.
     */
    productId?: string;
    /**
     * We tried to get the catalog product image Url based on the product SKU. This property can be null, if we cannot found the product. This is possible if the product is not referenced in the imported catalog.
     */
    productImageUrl?: string;
    /**
     * The product sku received for the external order
     */
    productSku: string;
    /**
     * We tried to get the catalog product title based on the product SKU. This property can be null, if we cannot found the product. This is possible if the product is not referenced in the imported catalog.
     */
    productTitle?: string;
    /**
     * The quantity of this product for the external order. This property is voluntarily a string because the value could be an invalid one
     */
    quantity?: string;
    /**
     * The product's unit price for the external order. This property is voluntarily a string because the value could be an invalid one.
     */
    unitPrice?: string;
}
