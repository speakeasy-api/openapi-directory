package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchGetAggregateResourceConfigRequest {
    @JsonProperty("ConfigurationAggregatorName")
    public String configurationAggregatorName;
    public BatchGetAggregateResourceConfigRequest withConfigurationAggregatorName(String configurationAggregatorName) {
        this.configurationAggregatorName = configurationAggregatorName;
        return this;
    }
    @JsonProperty("ResourceIdentifiers")
    public AggregateResourceIdentifier[] resourceIdentifiers;
    public BatchGetAggregateResourceConfigRequest withResourceIdentifiers(AggregateResourceIdentifier[] resourceIdentifiers) {
        this.resourceIdentifiers = resourceIdentifiers;
        return this;
    }
}