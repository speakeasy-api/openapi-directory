package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SavingsPlanOffering
 * Information about a Savings Plan offering.
**/
public class SavingsPlanOffering {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public CurrencyCodeEnum currency;
    public SavingsPlanOffering withCurrency(CurrencyCodeEnum currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public SavingsPlanOffering withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("durationSeconds")
    public Long durationSeconds;
    public SavingsPlanOffering withDurationSeconds(Long durationSeconds) {
        this.durationSeconds = durationSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offeringId")
    public String offeringId;
    public SavingsPlanOffering withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operation")
    public String operation;
    public SavingsPlanOffering withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentOption")
    public SavingsPlanPaymentOptionEnum paymentOption;
    public SavingsPlanOffering withPaymentOption(SavingsPlanPaymentOptionEnum paymentOption) {
        this.paymentOption = paymentOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("planType")
    public SavingsPlanTypeEnum planType;
    public SavingsPlanOffering withPlanType(SavingsPlanTypeEnum planType) {
        this.planType = planType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productTypes")
    public SavingsPlanProductTypeEnum[] productTypes;
    public SavingsPlanOffering withProductTypes(SavingsPlanProductTypeEnum[] productTypes) {
        this.productTypes = productTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public Object properties;
    public SavingsPlanOffering withProperties(Object properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceCode")
    public String serviceCode;
    public SavingsPlanOffering withServiceCode(String serviceCode) {
        this.serviceCode = serviceCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageType")
    public String usageType;
    public SavingsPlanOffering withUsageType(String usageType) {
        this.usageType = usageType;
        return this;
    }
}