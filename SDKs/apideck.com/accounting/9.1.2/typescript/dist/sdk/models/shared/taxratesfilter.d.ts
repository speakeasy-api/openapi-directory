import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Apply filters
 */
export declare class TaxRatesFilter extends SpeakeasyBase {
    /**
     * Boolean to describe if tax rate can be used for asset accounts
     */
    assets?: boolean;
    /**
     * Boolean to describe if tax rate can be used for equity accounts
     */
    equity?: boolean;
    /**
     * Boolean to describe if tax rate can be used for expense accounts
     */
    expenses?: boolean;
    /**
     * Boolean to describe if tax rate can be used for liability accounts
     */
    liabilities?: boolean;
    /**
     * Boolean to describe if tax rate can be used for revenue accounts
     */
    revenue?: boolean;
}
