package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SourceDefinitionReadList {
    @JsonProperty("sourceDefinitions")
    public SourceDefinitionRead[] sourceDefinitions;
    public SourceDefinitionReadList withSourceDefinitions(SourceDefinitionRead[] sourceDefinitions) {
        this.sourceDefinitions = sourceDefinitions;
        return this;
    }
}