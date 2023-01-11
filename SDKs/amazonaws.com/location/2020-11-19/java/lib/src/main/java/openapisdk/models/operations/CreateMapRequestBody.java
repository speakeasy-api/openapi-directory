package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateMapRequestBody {
    @JsonProperty("Configuration")
    public CreateMapRequestBodyConfiguration configuration;
    public CreateMapRequestBody withConfiguration(CreateMapRequestBodyConfiguration configuration) {
        this.configuration = configuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateMapRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("MapName")
    public String mapName;
    public CreateMapRequestBody withMapName(String mapName) {
        this.mapName = mapName;
        return this;
    }
    @JsonProperty("PricingPlan")
    public CreateMapRequestBodyPricingPlanEnum pricingPlan;
    public CreateMapRequestBody withPricingPlan(CreateMapRequestBodyPricingPlanEnum pricingPlan) {
        this.pricingPlan = pricingPlan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public CreateMapRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}