package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DestinationCoreConfig {
    @JsonProperty("connectionConfiguration")
    public Object connectionConfiguration;
    public DestinationCoreConfig withConnectionConfiguration(Object connectionConfiguration) {
        this.connectionConfiguration = connectionConfiguration;
        return this;
    }
    @JsonProperty("destinationDefinitionId")
    public String destinationDefinitionId;
    public DestinationCoreConfig withDestinationDefinitionId(String destinationDefinitionId) {
        this.destinationDefinitionId = destinationDefinitionId;
        return this;
    }
}