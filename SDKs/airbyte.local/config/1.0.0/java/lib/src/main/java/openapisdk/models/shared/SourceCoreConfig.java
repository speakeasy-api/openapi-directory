package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SourceCoreConfig {
    @JsonProperty("connectionConfiguration")
    public Object connectionConfiguration;
    public SourceCoreConfig withConnectionConfiguration(Object connectionConfiguration) {
        this.connectionConfiguration = connectionConfiguration;
        return this;
    }
    @JsonProperty("sourceDefinitionId")
    public String sourceDefinitionId;
    public SourceCoreConfig withSourceDefinitionId(String sourceDefinitionId) {
        this.sourceDefinitionId = sourceDefinitionId;
        return this;
    }
}