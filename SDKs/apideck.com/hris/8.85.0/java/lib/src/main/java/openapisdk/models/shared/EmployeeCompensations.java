package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EmployeeCompensations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public CurrencyEnum currency;
    public EmployeeCompensations withCurrency(CurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effective_date")
    public String effectiveDate;
    public EmployeeCompensations withEffectiveDate(String effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flsa_status")
    public EmployeeCompensationsFlsaStatusEnum flsaStatus;
    public EmployeeCompensations withFlsaStatus(EmployeeCompensationsFlsaStatusEnum flsaStatus) {
        this.flsaStatus = flsaStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public EmployeeCompensations withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("job_id")
    public String jobId;
    public EmployeeCompensations withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payment_unit")
    public PaymentUnitEnum paymentUnit;
    public EmployeeCompensations withPaymentUnit(PaymentUnitEnum paymentUnit) {
        this.paymentUnit = paymentUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rate")
    public Double rate;
    public EmployeeCompensations withRate(Double rate) {
        this.rate = rate;
        return this;
    }
}