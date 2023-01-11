package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SetReturnPolicyResponse
 * Complex type that that gets populated with a response containing a return policy.
**/
public class SetReturnPolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryTypes")
    public CategoryType[] categoryTypes;
    public SetReturnPolicyResponse withCategoryTypes(CategoryType[] categoryTypes) {
        this.categoryTypes = categoryTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public SetReturnPolicyResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extendedHolidayReturnsOffered")
    public Boolean extendedHolidayReturnsOffered;
    public SetReturnPolicyResponse withExtendedHolidayReturnsOffered(Boolean extendedHolidayReturnsOffered) {
        this.extendedHolidayReturnsOffered = extendedHolidayReturnsOffered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("internationalOverride")
    public InternationalReturnOverrideType internationalOverride;
    public SetReturnPolicyResponse withInternationalOverride(InternationalReturnOverrideType internationalOverride) {
        this.internationalOverride = internationalOverride;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketplaceId")
    public String marketplaceId;
    public SetReturnPolicyResponse withMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SetReturnPolicyResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refundMethod")
    public String refundMethod;
    public SetReturnPolicyResponse withRefundMethod(String refundMethod) {
        this.refundMethod = refundMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restockingFeePercentage")
    public String restockingFeePercentage;
    public SetReturnPolicyResponse withRestockingFeePercentage(String restockingFeePercentage) {
        this.restockingFeePercentage = restockingFeePercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnInstructions")
    public String returnInstructions;
    public SetReturnPolicyResponse withReturnInstructions(String returnInstructions) {
        this.returnInstructions = returnInstructions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnMethod")
    public String returnMethod;
    public SetReturnPolicyResponse withReturnMethod(String returnMethod) {
        this.returnMethod = returnMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnPeriod")
    public TimeDuration returnPeriod;
    public SetReturnPolicyResponse withReturnPeriod(TimeDuration returnPeriod) {
        this.returnPeriod = returnPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnPolicyId")
    public String returnPolicyId;
    public SetReturnPolicyResponse withReturnPolicyId(String returnPolicyId) {
        this.returnPolicyId = returnPolicyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnShippingCostPayer")
    public String returnShippingCostPayer;
    public SetReturnPolicyResponse withReturnShippingCostPayer(String returnShippingCostPayer) {
        this.returnShippingCostPayer = returnShippingCostPayer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnsAccepted")
    public Boolean returnsAccepted;
    public SetReturnPolicyResponse withReturnsAccepted(Boolean returnsAccepted) {
        this.returnsAccepted = returnsAccepted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warnings")
    public Error[] warnings;
    public SetReturnPolicyResponse withWarnings(Error[] warnings) {
        this.warnings = warnings;
        return this;
    }
}