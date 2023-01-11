package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SavingsPlanRate
 * Information about a Savings Plan rate.
**/
public class SavingsPlanRate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public CurrencyCodeEnum currency;
    public SavingsPlanRate withCurrency(CurrencyCodeEnum currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operation")
    public String operation;
    public SavingsPlanRate withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productType")
    public SavingsPlanProductTypeEnum productType;
    public SavingsPlanRate withProductType(SavingsPlanProductTypeEnum productType) {
        this.productType = productType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public Object properties;
    public SavingsPlanRate withProperties(Object properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rate")
    public String rate;
    public SavingsPlanRate withRate(String rate) {
        this.rate = rate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceCode")
    public SavingsPlanRateServiceCodeEnum serviceCode;
    public SavingsPlanRate withServiceCode(SavingsPlanRateServiceCodeEnum serviceCode) {
        this.serviceCode = serviceCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public SavingsPlanRateUnitEnum unit;
    public SavingsPlanRate withUnit(SavingsPlanRateUnitEnum unit) {
        this.unit = unit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageType")
    public String usageType;
    public SavingsPlanRate withUsageType(String usageType) {
        this.usageType = usageType;
        return this;
    }
}