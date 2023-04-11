import { SpeakeasyBase } from "../../../internal/utils";
export declare class EcommerceProductCategories extends SpeakeasyBase {
    /**
     * A unique identifier for an object.
     */
    id?: string;
    /**
     * The name of the category.
     */
    name?: string;
}
export declare class EcommerceProductImages extends SpeakeasyBase {
    /**
     * A unique identifier for an object.
     */
    id?: string;
    /**
     * The URL of an image of the product.
     */
    url?: string;
}
export declare class EcommerceProductOptions extends SpeakeasyBase {
    /**
     * A unique identifier for the option of the product.
     */
    id?: string;
    /**
     * The name of the option for the product.
     */
    name?: string;
    values?: string[];
}
/**
 * The current status of the product (active or archived).
 */
export declare enum EcommerceProductProductStatusEnum {
    Active = "active",
    Archived = "archived"
}
export declare class EcommerceProductVariantsImages extends SpeakeasyBase {
    /**
     * A unique identifier for an object.
     */
    id?: string;
    /**
     * The URL of an image of the variant.
     */
    url?: string;
}
export declare class EcommerceProductVariantsOptions extends SpeakeasyBase {
    /**
     * A unique identifier for the option of the variant.
     */
    id?: string;
    /**
     * The name of the option for the variant.
     */
    name?: string;
    /**
     * The value of the option for the variant.
     */
    value?: string;
}
export declare class EcommerceProductVariants extends SpeakeasyBase {
    /**
     * A unique identifier for the variant of the product.
     */
    id?: string;
    images?: EcommerceProductVariantsImages[];
    /**
     * The quantity of the variant in stock.
     */
    inventoryQuantity?: string;
    /**
     * The name for the variant, used for displaying to customers.
     */
    name?: string;
    options?: EcommerceProductVariantsOptions[];
    /**
     * The price of the variant.
     */
    price?: string;
    /**
     * The stock keeping unit of the variant.
     */
    sku?: string;
    /**
     * The weight of the variant.
     */
    weight?: string;
    /**
     * The unit of measurement for the weight of the variant.
     */
    weightUnit?: string;
}
export declare class EcommerceProduct extends SpeakeasyBase {
    /**
     * An array of categories for the product, used for organization and searching.
     */
    categories?: EcommerceProductCategories[];
    /**
     * The date and time when the object was created.
     */
    createdAt?: Date;
    /**
     * A detailed description of the product.
     */
    description?: string;
    /**
     * A unique identifier for an object.
     */
    id: string;
    /**
     * An array of image URLs for the product.
     */
    images?: EcommerceProductImages[];
    /**
     * The quantity of the product in stock.
     */
    inventoryQuantity?: string;
    /**
     * The name of the product as it should be displayed to customers.
     */
    name?: string;
    /**
     * An array of options for the product.
     */
    options?: EcommerceProductOptions[];
    /**
     * The price of the product.
     */
    price?: string;
    /**
     * The stock keeping unit of the product.
     */
    sku?: string;
    /**
     * The current status of the product (active or archived).
     */
    status?: EcommerceProductProductStatusEnum;
    /**
     * An array of tags for the product, used for organization and searching.
     */
    tags?: string[];
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
    variants?: EcommerceProductVariants[];
    /**
     * The weight of the product.
     */
    weight?: string;
    /**
     * The unit of measurement for the weight of the product.
     */
    weightUnit?: string;
}
