package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteConfigurationAggregatorRequest {
    @JsonProperty("ConfigurationAggregatorName")
    public String configurationAggregatorName;
    public DeleteConfigurationAggregatorRequest withConfigurationAggregatorName(String configurationAggregatorName) {
        this.configurationAggregatorName = configurationAggregatorName;
        return this;
    }
}