package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReturnPolicyRequest
 * This root container defines a seller's return policy for a specific marketplace and category type. Used when creating or updating a return policy, returnPolicyRequest encapsulates a seller's terms for how buyers can return items. While each seller must define at least one payment policy for every marketplace into which they sell, sellers can define multiple payment policies for a single marketplace by specifying different configurations for the unique policies. A successful call returns a paymentPolicyId, plus the Location response header contains the URI to the resource. Use the Metadata API method to determine which categories in the marketplace(s) require you to provide a return policy. Also note that some marketplaces require you to provide a specific return policy for vehicle listings. Policy instructions can be localized by providing a locale in the Content-Language HTTP request header. For example: Content-Language: de-DE. Tip: For more on using business policies, see eBay business policies.
**/
public class ReturnPolicyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryTypes")
    public CategoryType[] categoryTypes;
    public ReturnPolicyRequest withCategoryTypes(CategoryType[] categoryTypes) {
        this.categoryTypes = categoryTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ReturnPolicyRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extendedHolidayReturnsOffered")
    public Boolean extendedHolidayReturnsOffered;
    public ReturnPolicyRequest withExtendedHolidayReturnsOffered(Boolean extendedHolidayReturnsOffered) {
        this.extendedHolidayReturnsOffered = extendedHolidayReturnsOffered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("internationalOverride")
    public InternationalReturnOverrideType internationalOverride;
    public ReturnPolicyRequest withInternationalOverride(InternationalReturnOverrideType internationalOverride) {
        this.internationalOverride = internationalOverride;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketplaceId")
    public String marketplaceId;
    public ReturnPolicyRequest withMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ReturnPolicyRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refundMethod")
    public String refundMethod;
    public ReturnPolicyRequest withRefundMethod(String refundMethod) {
        this.refundMethod = refundMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restockingFeePercentage")
    public String restockingFeePercentage;
    public ReturnPolicyRequest withRestockingFeePercentage(String restockingFeePercentage) {
        this.restockingFeePercentage = restockingFeePercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnInstructions")
    public String returnInstructions;
    public ReturnPolicyRequest withReturnInstructions(String returnInstructions) {
        this.returnInstructions = returnInstructions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnMethod")
    public String returnMethod;
    public ReturnPolicyRequest withReturnMethod(String returnMethod) {
        this.returnMethod = returnMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnPeriod")
    public TimeDuration returnPeriod;
    public ReturnPolicyRequest withReturnPeriod(TimeDuration returnPeriod) {
        this.returnPeriod = returnPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnShippingCostPayer")
    public String returnShippingCostPayer;
    public ReturnPolicyRequest withReturnShippingCostPayer(String returnShippingCostPayer) {
        this.returnShippingCostPayer = returnShippingCostPayer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnsAccepted")
    public Boolean returnsAccepted;
    public ReturnPolicyRequest withReturnsAccepted(Boolean returnsAccepted) {
        this.returnsAccepted = returnsAccepted;
        return this;
    }
}