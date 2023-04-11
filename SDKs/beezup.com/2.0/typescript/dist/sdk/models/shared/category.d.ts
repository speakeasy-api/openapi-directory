import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The catalog category
 */
export declare class Category extends SpeakeasyBase {
    /**
     * The catalog category identifier
     */
    categoryId?: string;
    /**
     * The catalog category path
     */
    categoryPath: string[];
    /**
     * The product count related to this category
     */
    selfProductCount: number;
    /**
     * The total product count related to this category and his sub categories
     */
    totalProductCount: number;
}
