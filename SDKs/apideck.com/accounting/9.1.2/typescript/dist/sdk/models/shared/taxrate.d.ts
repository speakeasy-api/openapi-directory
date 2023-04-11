import { SpeakeasyBase } from "../../../internal/utils";
export declare class TaxRateComponents extends SpeakeasyBase {
    compound?: boolean;
    id?: string;
    name?: string;
    rate?: number;
}
/**
 * Tax rate status
 */
export declare enum TaxRateTaxRateStatusEnum {
    Active = "active",
    Inactive = "inactive",
    Archived = "archived"
}
export declare class TaxRateInput extends SpeakeasyBase {
    /**
     * Tax code assigned to identify this tax rate.
     */
    code?: string;
    components?: TaxRateComponents[];
    /**
     * Description of tax rate
     */
    description?: string;
    /**
     * Effective tax rate
     */
    effectiveTaxRate?: number;
    /**
     * ID assigned to identify this tax rate.
     */
    id?: string;
    /**
     * Name assigned to identify this tax rate.
     */
    name?: string;
    /**
     * ID of the original tax rate from which the new tax rate is derived. Helps to understand the relationship between corresponding tax rate entities.
     */
    originalTaxRateId?: string;
    /**
     * Report Tax type to aggregate tax collected or paid for reporting purposes
     */
    reportTaxType?: string;
    /**
     * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
     */
    rowVersion?: string;
    /**
     * Tax rate status
     */
    status?: TaxRateTaxRateStatusEnum;
    /**
     * Unique identifier for the account for tax collected.
     */
    taxPayableAccountId?: string;
    /**
     * Unique identifier for the account for tax remitted.
     */
    taxRemittedAccountId?: string;
    /**
     * Not compounded sum of the components of a tax rate
     */
    totalTaxRate?: number;
    /**
     * Tax type used to indicate the source of tax collected or paid
     */
    type?: string;
}
export declare class TaxRate extends SpeakeasyBase {
    /**
     * Tax code assigned to identify this tax rate.
     */
    code?: string;
    components?: TaxRateComponents[];
    /**
     * The date and time when the object was created.
     */
    createdAt?: Date;
    /**
     * The user who created the object.
     */
    createdBy?: string;
    /**
     * Description of tax rate
     */
    description?: string;
    /**
     * Effective tax rate
     */
    effectiveTaxRate?: number;
    /**
     * ID assigned to identify this tax rate.
     */
    id?: string;
    /**
     * Name assigned to identify this tax rate.
     */
    name?: string;
    /**
     * ID of the original tax rate from which the new tax rate is derived. Helps to understand the relationship between corresponding tax rate entities.
     */
    originalTaxRateId?: string;
    /**
     * Report Tax type to aggregate tax collected or paid for reporting purposes
     */
    reportTaxType?: string;
    /**
     * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
     */
    rowVersion?: string;
    /**
     * Tax rate status
     */
    status?: TaxRateTaxRateStatusEnum;
    /**
     * Unique identifier for the account for tax collected.
     */
    taxPayableAccountId?: string;
    /**
     * Unique identifier for the account for tax remitted.
     */
    taxRemittedAccountId?: string;
    /**
     * Not compounded sum of the components of a tax rate
     */
    totalTaxRate?: number;
    /**
     * Tax type used to indicate the source of tax collected or paid
     */
    type?: string;
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
    /**
     * The user who last updated the object.
     */
    updatedBy?: string;
}
