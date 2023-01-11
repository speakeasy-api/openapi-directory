package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EmployeeJobs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compensation_rate")
    public Double compensationRate;
    public EmployeeJobs withCompensationRate(Double compensationRate) {
        this.compensationRate = compensationRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public CurrencyEnum currency;
    public EmployeeJobs withCurrency(CurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employee_id")
    public String employeeId;
    public EmployeeJobs withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_date")
    public LocalDate endDate;
    public EmployeeJobs withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hired_at")
    public LocalDate hiredAt;
    public EmployeeJobs withHiredAt(LocalDate hiredAt) {
        this.hiredAt = hiredAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public EmployeeJobs withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_primary")
    public Boolean isPrimary;
    public EmployeeJobs withIsPrimary(Boolean isPrimary) {
        this.isPrimary = isPrimary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public Address location;
    public EmployeeJobs withLocation(Address location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payment_unit")
    public PaymentUnitEnum paymentUnit;
    public EmployeeJobs withPaymentUnit(PaymentUnitEnum paymentUnit) {
        this.paymentUnit = paymentUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public String role;
    public EmployeeJobs withRole(String role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_date")
    public LocalDate startDate;
    public EmployeeJobs withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public EmployeeJobs withTitle(String title) {
        this.title = title;
        return this;
    }
}