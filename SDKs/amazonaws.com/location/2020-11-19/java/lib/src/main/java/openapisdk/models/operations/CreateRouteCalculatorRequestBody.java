package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateRouteCalculatorRequestBody {
    @JsonProperty("CalculatorName")
    public String calculatorName;
    public CreateRouteCalculatorRequestBody withCalculatorName(String calculatorName) {
        this.calculatorName = calculatorName;
        return this;
    }
    @JsonProperty("DataSource")
    public String dataSource;
    public CreateRouteCalculatorRequestBody withDataSource(String dataSource) {
        this.dataSource = dataSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateRouteCalculatorRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("PricingPlan")
    public CreateRouteCalculatorRequestBodyPricingPlanEnum pricingPlan;
    public CreateRouteCalculatorRequestBody withPricingPlan(CreateRouteCalculatorRequestBodyPricingPlanEnum pricingPlan) {
        this.pricingPlan = pricingPlan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public CreateRouteCalculatorRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}