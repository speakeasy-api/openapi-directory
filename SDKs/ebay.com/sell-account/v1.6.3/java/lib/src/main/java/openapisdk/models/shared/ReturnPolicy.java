package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReturnPolicy
 * Root container that defines the fields for a seller's return policy. The returnPolicy encapsulates a seller's terms for how they handle item returns, the name and description of the policy, and the marketplace and category group(s) to which the return policy is applied. While each seller must define at least one return policy for every marketplace into which they sell, sellers can define multiple return policies for a single marketplace by specifying different configurations for the unique policies.
**/
public class ReturnPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryTypes")
    public CategoryType[] categoryTypes;
    public ReturnPolicy withCategoryTypes(CategoryType[] categoryTypes) {
        this.categoryTypes = categoryTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ReturnPolicy withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extendedHolidayReturnsOffered")
    public Boolean extendedHolidayReturnsOffered;
    public ReturnPolicy withExtendedHolidayReturnsOffered(Boolean extendedHolidayReturnsOffered) {
        this.extendedHolidayReturnsOffered = extendedHolidayReturnsOffered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("internationalOverride")
    public InternationalReturnOverrideType internationalOverride;
    public ReturnPolicy withInternationalOverride(InternationalReturnOverrideType internationalOverride) {
        this.internationalOverride = internationalOverride;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketplaceId")
    public String marketplaceId;
    public ReturnPolicy withMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ReturnPolicy withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refundMethod")
    public String refundMethod;
    public ReturnPolicy withRefundMethod(String refundMethod) {
        this.refundMethod = refundMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restockingFeePercentage")
    public String restockingFeePercentage;
    public ReturnPolicy withRestockingFeePercentage(String restockingFeePercentage) {
        this.restockingFeePercentage = restockingFeePercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnInstructions")
    public String returnInstructions;
    public ReturnPolicy withReturnInstructions(String returnInstructions) {
        this.returnInstructions = returnInstructions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnMethod")
    public String returnMethod;
    public ReturnPolicy withReturnMethod(String returnMethod) {
        this.returnMethod = returnMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnPeriod")
    public TimeDuration returnPeriod;
    public ReturnPolicy withReturnPeriod(TimeDuration returnPeriod) {
        this.returnPeriod = returnPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnPolicyId")
    public String returnPolicyId;
    public ReturnPolicy withReturnPolicyId(String returnPolicyId) {
        this.returnPolicyId = returnPolicyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnShippingCostPayer")
    public String returnShippingCostPayer;
    public ReturnPolicy withReturnShippingCostPayer(String returnShippingCostPayer) {
        this.returnShippingCostPayer = returnShippingCostPayer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnsAccepted")
    public Boolean returnsAccepted;
    public ReturnPolicy withReturnsAccepted(Boolean returnsAccepted) {
        this.returnsAccepted = returnsAccepted;
        return this;
    }
}