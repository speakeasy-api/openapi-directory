import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represent a catalog product
 */
export declare class Product extends SpeakeasyBase {
    /**
     * The catalog category identifier
     */
    categoryId: string;
    /**
     * Indicates if the product exists in the current catalog
     */
    exists: boolean;
    /**
     * The product identifier
     */
    productId: string;
    /**
     * The key is the column identifier
     */
    values: Record<string, string>;
}
