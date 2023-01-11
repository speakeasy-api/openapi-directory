package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateRouteCalculatorRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public UpdateRouteCalculatorRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PricingPlan")
    public UpdateRouteCalculatorRequestBodyPricingPlanEnum pricingPlan;
    public UpdateRouteCalculatorRequestBody withPricingPlan(UpdateRouteCalculatorRequestBodyPricingPlanEnum pricingPlan) {
        this.pricingPlan = pricingPlan;
        return this;
    }
}