import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Can be one of `"vaccine"`, `"product"` or `"service"`
 */
export declare enum InventoryCategoryCategoryTypeEnum {
    Vaccine = "vaccine",
    Product = "product",
    Service = "service"
}
/**
 * OK
 */
export declare class InventoryCategory extends SpeakeasyBase {
    /**
     * If the category is archived or not
     */
    archived?: boolean;
    /**
     * Can be one of `"vaccine"`, `"product"` or `"service"`
     */
    categoryType?: InventoryCategoryCategoryTypeEnum;
    createdAt?: string;
    doctor?: string;
    id?: number;
    /**
     * Name of the inventory category
     */
    name?: string;
    updatedAt?: string;
}
