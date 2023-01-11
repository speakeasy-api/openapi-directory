package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DestinationDefinitionReadList {
    @JsonProperty("destinationDefinitions")
    public DestinationDefinitionRead[] destinationDefinitions;
    public DestinationDefinitionReadList withDestinationDefinitions(DestinationDefinitionRead[] destinationDefinitions) {
        this.destinationDefinitions = destinationDefinitions;
        return this;
    }
}