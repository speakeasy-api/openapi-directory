package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SavingsPlanOfferingRate
 * Information about a Savings Plan offering rate.
**/
public class SavingsPlanOfferingRate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operation")
    public String operation;
    public SavingsPlanOfferingRate withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productType")
    public SavingsPlanProductTypeEnum productType;
    public SavingsPlanOfferingRate withProductType(SavingsPlanProductTypeEnum productType) {
        this.productType = productType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public Object properties;
    public SavingsPlanOfferingRate withProperties(Object properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rate")
    public String rate;
    public SavingsPlanOfferingRate withRate(String rate) {
        this.rate = rate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("savingsPlanOffering")
    public ParentSavingsPlanOffering savingsPlanOffering;
    public SavingsPlanOfferingRate withSavingsPlanOffering(ParentSavingsPlanOffering savingsPlanOffering) {
        this.savingsPlanOffering = savingsPlanOffering;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceCode")
    public SavingsPlanRateServiceCodeEnum serviceCode;
    public SavingsPlanOfferingRate withServiceCode(SavingsPlanRateServiceCodeEnum serviceCode) {
        this.serviceCode = serviceCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public SavingsPlanRateUnitEnum unit;
    public SavingsPlanOfferingRate withUnit(SavingsPlanRateUnitEnum unit) {
        this.unit = unit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageType")
    public String usageType;
    public SavingsPlanOfferingRate withUsageType(String usageType) {
        this.usageType = usageType;
        return this;
    }
}