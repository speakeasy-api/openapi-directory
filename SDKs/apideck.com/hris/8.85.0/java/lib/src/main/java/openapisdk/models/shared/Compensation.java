package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Compensation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("benefits")
    public Benefit[] benefits;
    public Compensation withBenefits(Benefit[] benefits) {
        this.benefits = benefits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deductions")
    public Deduction[] deductions;
    public Compensation withDeductions(Deduction[] deductions) {
        this.deductions = deductions;
        return this;
    }
    @JsonProperty("employee_id")
    public String employeeId;
    public Compensation withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gross_pay")
    public Double grossPay;
    public Compensation withGrossPay(Double grossPay) {
        this.grossPay = grossPay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("net_pay")
    public Double netPay;
    public Compensation withNetPay(Double netPay) {
        this.netPay = netPay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxes")
    public Tax[] taxes;
    public Compensation withTaxes(Tax[] taxes) {
        this.taxes = taxes;
        return this;
    }
}