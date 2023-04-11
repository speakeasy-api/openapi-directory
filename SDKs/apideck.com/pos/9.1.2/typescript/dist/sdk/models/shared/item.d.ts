import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
export declare class ItemCategoriesInput extends SpeakeasyBase {
    imageIds?: string[];
    name?: string;
}
export declare class ItemOptions extends SpeakeasyBase {
    attributeId?: string;
    id?: string;
    name?: string;
}
export declare enum ItemPricingTypeEnum {
    Fixed = "fixed",
    Variable = "variable",
    PerUnit = "per_unit",
    Other = "other"
}
export declare enum ItemProductTypeEnum {
    Regular = "regular",
    Other = "other"
}
export declare enum ItemVariationsPricingTypeEnum {
    Fixed = "fixed",
    Variable = "variable",
    Other = "other"
}
export declare class ItemVariationsInput extends SpeakeasyBase {
    name?: string;
    presentAtAllLocations?: boolean;
    priceAmount?: number;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    priceCurrency?: CurrencyEnum;
    pricingType?: ItemVariationsPricingTypeEnum;
    sequence?: number;
    sku?: string;
    stockable?: boolean;
}
export declare class ItemInput extends SpeakeasyBase {
    abbreviation?: string;
    /**
     * A list of locations where the object is not present, even if present_at_all_locations is true. This can include locations that are deactivated.
     */
    absentAtLocationIds?: string[];
    available?: boolean;
    availableForPickup?: boolean;
    availableOnline?: boolean;
    categories?: ItemCategoriesInput[];
    /**
     * Product code, e.g. UPC or EAN
     */
    code?: string;
    cost?: number;
    deleted?: boolean;
    description?: string;
    hidden?: boolean;
    id?: string;
    /**
     * A value you specify that uniquely identifies this request among requests you have sent.
     */
    idempotencyKey?: string;
    name: string;
    /**
     * List of options pertaining to this item's attribute variation
     */
    options?: ItemOptions[];
    presentAtAllLocations?: boolean;
    priceAmount?: number;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    priceCurrency?: CurrencyEnum;
    pricingType?: ItemPricingTypeEnum;
    productType?: ItemProductTypeEnum;
    /**
     * SKU of the item
     */
    sku?: string;
    /**
     * A list of Tax IDs for the product.
     */
    taxIds?: string[];
    variations?: ItemVariationsInput[];
}
export declare class ItemCategories extends SpeakeasyBase {
    /**
     * A unique identifier for an object.
     */
    id?: string;
    imageIds?: string[];
    name?: string;
}
export declare class ItemModifierGroups extends SpeakeasyBase {
    /**
     * A unique identifier for an object.
     */
    id?: string;
}
export declare class ItemVariations extends SpeakeasyBase {
    /**
     * The date and time when the object was created.
     */
    createdAt?: Date;
    /**
     * A unique identifier for an object.
     */
    id?: string;
    /**
     * A unique identifier for an object.
     */
    itemId?: string;
    name?: string;
    presentAtAllLocations?: boolean;
    priceAmount?: number;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    priceCurrency?: CurrencyEnum;
    pricingType?: ItemVariationsPricingTypeEnum;
    sequence?: number;
    sku?: string;
    stockable?: boolean;
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
    /**
     * The user who last updated the object.
     */
    version?: string;
}
export declare class Item extends SpeakeasyBase {
    abbreviation?: string;
    /**
     * A list of locations where the object is not present, even if present_at_all_locations is true. This can include locations that are deactivated.
     */
    absentAtLocationIds?: string[];
    available?: boolean;
    availableForPickup?: boolean;
    availableOnline?: boolean;
    categories?: ItemCategories[];
    /**
     * Product code, e.g. UPC or EAN
     */
    code?: string;
    cost?: number;
    /**
     * The date and time when the object was created.
     */
    createdAt?: Date;
    /**
     * The user who created the object.
     */
    createdBy?: string;
    deleted?: boolean;
    description?: string;
    hidden?: boolean;
    id?: string;
    /**
     * A value you specify that uniquely identifies this request among requests you have sent.
     */
    idempotencyKey?: string;
    modifierGroups?: ItemModifierGroups[];
    name: string;
    /**
     * List of options pertaining to this item's attribute variation
     */
    options?: ItemOptions[];
    presentAtAllLocations?: boolean;
    priceAmount?: number;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    priceCurrency?: CurrencyEnum;
    pricingType?: ItemPricingTypeEnum;
    productType?: ItemProductTypeEnum;
    /**
     * SKU of the item
     */
    sku?: string;
    /**
     * A list of Tax IDs for the product.
     */
    taxIds?: string[];
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
    /**
     * The user who last updated the object.
     */
    updatedBy?: string;
    variations?: ItemVariations[];
    /**
     * The user who last updated the object.
     */
    version?: string;
}
