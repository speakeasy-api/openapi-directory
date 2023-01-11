package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetAggregateResourceConfigRequest {
    @JsonProperty("ConfigurationAggregatorName")
    public String configurationAggregatorName;
    public GetAggregateResourceConfigRequest withConfigurationAggregatorName(String configurationAggregatorName) {
        this.configurationAggregatorName = configurationAggregatorName;
        return this;
    }
    @JsonProperty("ResourceIdentifier")
    public AggregateResourceIdentifier resourceIdentifier;
    public GetAggregateResourceConfigRequest withResourceIdentifier(AggregateResourceIdentifier resourceIdentifier) {
        this.resourceIdentifier = resourceIdentifier;
        return this;
    }
}