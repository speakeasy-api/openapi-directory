package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DestinationDefinitionIdRequestBody {
    @JsonProperty("destinationDefinitionId")
    public String destinationDefinitionId;
    public DestinationDefinitionIdRequestBody withDestinationDefinitionId(String destinationDefinitionId) {
        this.destinationDefinitionId = destinationDefinitionId;
        return this;
    }
}