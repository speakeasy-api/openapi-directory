import { SpeakeasyBase } from "../../../internal/utils";
export declare class PayrollTotals extends SpeakeasyBase {
    /**
     * The total check amount for the payroll.
     */
    checkAmount?: number;
    /**
     * The total company debit for the payroll.
     */
    companyDebit?: number;
    /**
     * The total amount of employee deducted benefits for the payroll.
     */
    employeeBenefitDeductions?: number;
    /**
     * The total amount of employee paid taxes for the payroll.
     */
    employeeTaxes?: number;
    /**
     * The total amount of company contributed benefits for the payroll.
     */
    employerBenefitContributions?: number;
    /**
     * The total amount of employer paid taxes for the payroll.
     */
    employerTaxes?: number;
    /**
     * The gross pay amount for the payroll.
     */
    grossPay?: number;
    /**
     * The net pay amount for the payroll.
     */
    netPay?: number;
    /**
     * The total tax debit for the payroll.
     */
    taxDebit?: number;
}
