import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Status of vaccine, could be one of `active`, `inactive`, `archived`, `voided`, default to `active`
 */
export declare enum InventoryVaccineStatusEnum {
    Active = "active",
    Inactive = "inactive",
    Archived = "archived",
    Voided = "voided"
}
/**
 * Created
 */
export declare class InventoryVaccine extends SpeakeasyBase {
    /**
     * ID of `/api/inventory_categories`
     */
    category?: number;
    /**
     * Base cost for consumables.
     */
    cost?: number;
    createdAt?: string;
    /**
     * This field can onlyu be changed by creating new patient vaccine record. Current quantity of an inventory vaccine is calculated by subtract number of records pointing to this inventory from the original quantity value.
     */
    currentQuantity?: number;
    cvxCode?: string;
    doctor: number;
    /**
     * When will the vaccine expire
     */
    expiry?: string;
    id?: number;
    lotNumber?: string;
    manufacturer?: string;
    manufacturerCode: string;
    name: string;
    note?: string;
    /**
     * Default to zero
     */
    originalQuantity?: number;
    price?: number;
    priceWithTax?: number;
    /**
     * Is sales tax applicable to this service/product? Default to false
     */
    salesTaxApplicable?: boolean;
    /**
     * Status of vaccine, could be one of `active`, `inactive`, `archived`, `voided`, default to `active`
     */
    status?: InventoryVaccineStatusEnum;
    updatedAt?: string;
    /**
     * Default to `"standard vaccine"`
     */
    vaccinationType?: string;
}
