import { SpeakeasyBase } from "../../../internal/utils";
export declare enum InventoryVaccineStatusEnum {
    Active = "active",
    Inactive = "inactive",
    Archived = "archived",
    Voided = "voided"
}
export declare class InventoryVaccine extends SpeakeasyBase {
    category?: number;
    cost?: number;
    createdAt?: string;
    currentQuantity?: number;
    cvxCode?: string;
    doctor: number;
    expiry?: string;
    id?: number;
    lotNumber?: string;
    manufacturer?: string;
    manufacturerCode: string;
    name: string;
    note?: string;
    originalQuantity?: number;
    price?: number;
    priceWithTax?: number;
    salesTaxApplicable?: boolean;
    status?: InventoryVaccineStatusEnum;
    updatedAt?: string;
    vaccinationType?: string;
}
