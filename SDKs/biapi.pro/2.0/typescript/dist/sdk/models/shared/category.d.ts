import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful POST on Category resource
 */
export declare class Category extends SpeakeasyBase {
    /**
     * Color of the category
     */
    color: string;
    /**
     * ID of the category
     */
    id: number;
    /**
     * ID of the logo
     */
    idLogo?: number;
    /**
     * ID of the parent category. If this is a parent category, it will be equal to its own ID
     */
    idParentCategory: number;
    /**
     * ID of the parent category to be displayed
     */
    idParentCategoryInMenu: number;
    /**
     * If not null, this category is specific to a user
     */
    idUser?: number;
    /**
     * Is an income category. If null, this is both an income and an expense category
     */
    income?: boolean;
    /**
     * Name of the category
     */
    name: string;
    /**
     * Displayed name, with HTML tags
     */
    nameDisplayed?: string;
    /**
     * This category accepts opposite sign of transactions
     */
    refundable: boolean;
}
