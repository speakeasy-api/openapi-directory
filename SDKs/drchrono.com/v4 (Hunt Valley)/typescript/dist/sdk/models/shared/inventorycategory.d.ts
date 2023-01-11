import { SpeakeasyBase } from "../../../internal/utils";
export declare enum InventoryCategoryCategoryTypeEnum {
    Vaccine = "vaccine",
    Product = "product",
    Service = "service"
}
export declare class InventoryCategory extends SpeakeasyBase {
    archived?: boolean;
    categoryType?: InventoryCategoryCategoryTypeEnum;
    createdAt?: string;
    doctor?: string;
    id?: number;
    name?: string;
    updatedAt?: string;
}
