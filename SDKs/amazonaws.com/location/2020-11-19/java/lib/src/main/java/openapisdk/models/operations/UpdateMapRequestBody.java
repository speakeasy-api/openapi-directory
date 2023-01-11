package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateMapRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public UpdateMapRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PricingPlan")
    public UpdateMapRequestBodyPricingPlanEnum pricingPlan;
    public UpdateMapRequestBody withPricingPlan(UpdateMapRequestBodyPricingPlanEnum pricingPlan) {
        this.pricingPlan = pricingPlan;
        return this;
    }
}