package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ParentSavingsPlanOffering
 * Information about a Savings Plan offering.
**/
public class ParentSavingsPlanOffering {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public CurrencyCodeEnum currency;
    public ParentSavingsPlanOffering withCurrency(CurrencyCodeEnum currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("durationSeconds")
    public Long durationSeconds;
    public ParentSavingsPlanOffering withDurationSeconds(Long durationSeconds) {
        this.durationSeconds = durationSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offeringId")
    public String offeringId;
    public ParentSavingsPlanOffering withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentOption")
    public SavingsPlanPaymentOptionEnum paymentOption;
    public ParentSavingsPlanOffering withPaymentOption(SavingsPlanPaymentOptionEnum paymentOption) {
        this.paymentOption = paymentOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("planDescription")
    public String planDescription;
    public ParentSavingsPlanOffering withPlanDescription(String planDescription) {
        this.planDescription = planDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("planType")
    public SavingsPlanTypeEnum planType;
    public ParentSavingsPlanOffering withPlanType(SavingsPlanTypeEnum planType) {
        this.planType = planType;
        return this;
    }
}