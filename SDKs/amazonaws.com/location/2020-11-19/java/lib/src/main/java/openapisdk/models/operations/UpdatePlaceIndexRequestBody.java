package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePlaceIndexRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataSourceConfiguration")
    public UpdatePlaceIndexRequestBodyDataSourceConfiguration dataSourceConfiguration;
    public UpdatePlaceIndexRequestBody withDataSourceConfiguration(UpdatePlaceIndexRequestBodyDataSourceConfiguration dataSourceConfiguration) {
        this.dataSourceConfiguration = dataSourceConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public UpdatePlaceIndexRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PricingPlan")
    public UpdatePlaceIndexRequestBodyPricingPlanEnum pricingPlan;
    public UpdatePlaceIndexRequestBody withPricingPlan(UpdatePlaceIndexRequestBodyPricingPlanEnum pricingPlan) {
        this.pricingPlan = pricingPlan;
        return this;
    }
}