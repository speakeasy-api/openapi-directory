package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EmployeeCompensationsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public CurrencyEnum currency;
    public EmployeeCompensationsInput withCurrency(CurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effective_date")
    public String effectiveDate;
    public EmployeeCompensationsInput withEffectiveDate(String effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flsa_status")
    public EmployeeCompensationsFlsaStatusEnum flsaStatus;
    public EmployeeCompensationsInput withFlsaStatus(EmployeeCompensationsFlsaStatusEnum flsaStatus) {
        this.flsaStatus = flsaStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payment_unit")
    public PaymentUnitEnum paymentUnit;
    public EmployeeCompensationsInput withPaymentUnit(PaymentUnitEnum paymentUnit) {
        this.paymentUnit = paymentUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rate")
    public Double rate;
    public EmployeeCompensationsInput withRate(Double rate) {
        this.rate = rate;
        return this;
    }
}