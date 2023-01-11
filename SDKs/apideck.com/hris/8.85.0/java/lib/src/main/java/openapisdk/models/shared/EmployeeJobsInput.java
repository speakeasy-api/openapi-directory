package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EmployeeJobsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compensation_rate")
    public Double compensationRate;
    public EmployeeJobsInput withCompensationRate(Double compensationRate) {
        this.compensationRate = compensationRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public CurrencyEnum currency;
    public EmployeeJobsInput withCurrency(CurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_date")
    public LocalDate endDate;
    public EmployeeJobsInput withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hired_at")
    public LocalDate hiredAt;
    public EmployeeJobsInput withHiredAt(LocalDate hiredAt) {
        this.hiredAt = hiredAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_primary")
    public Boolean isPrimary;
    public EmployeeJobsInput withIsPrimary(Boolean isPrimary) {
        this.isPrimary = isPrimary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public Address location;
    public EmployeeJobsInput withLocation(Address location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payment_unit")
    public PaymentUnitEnum paymentUnit;
    public EmployeeJobsInput withPaymentUnit(PaymentUnitEnum paymentUnit) {
        this.paymentUnit = paymentUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public String role;
    public EmployeeJobsInput withRole(String role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_date")
    public LocalDate startDate;
    public EmployeeJobsInput withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public EmployeeJobsInput withTitle(String title) {
        this.title = title;
        return this;
    }
}