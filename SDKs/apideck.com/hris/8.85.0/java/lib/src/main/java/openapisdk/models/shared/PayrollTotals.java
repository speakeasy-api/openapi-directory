package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PayrollTotals {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("check_amount")
    public Double checkAmount;
    public PayrollTotals withCheckAmount(Double checkAmount) {
        this.checkAmount = checkAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company_debit")
    public Double companyDebit;
    public PayrollTotals withCompanyDebit(Double companyDebit) {
        this.companyDebit = companyDebit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employee_benefit_deductions")
    public Double employeeBenefitDeductions;
    public PayrollTotals withEmployeeBenefitDeductions(Double employeeBenefitDeductions) {
        this.employeeBenefitDeductions = employeeBenefitDeductions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employee_taxes")
    public Double employeeTaxes;
    public PayrollTotals withEmployeeTaxes(Double employeeTaxes) {
        this.employeeTaxes = employeeTaxes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employer_benefit_contributions")
    public Double employerBenefitContributions;
    public PayrollTotals withEmployerBenefitContributions(Double employerBenefitContributions) {
        this.employerBenefitContributions = employerBenefitContributions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employer_taxes")
    public Double employerTaxes;
    public PayrollTotals withEmployerTaxes(Double employerTaxes) {
        this.employerTaxes = employerTaxes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gross_pay")
    public Double grossPay;
    public PayrollTotals withGrossPay(Double grossPay) {
        this.grossPay = grossPay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("net_pay")
    public Double netPay;
    public PayrollTotals withNetPay(Double netPay) {
        this.netPay = netPay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tax_debit")
    public Double taxDebit;
    public PayrollTotals withTaxDebit(Double taxDebit) {
        this.taxDebit = taxDebit;
        return this;
    }
}