package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeComponentConfigurationRecommendationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComponentConfiguration")
    public String componentConfiguration;
    public DescribeComponentConfigurationRecommendationResponse withComponentConfiguration(String componentConfiguration) {
        this.componentConfiguration = componentConfiguration;
        return this;
    }
}