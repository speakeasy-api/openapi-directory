package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DestinationDefinitionUpdate {
    @JsonProperty("destinationDefinitionId")
    public String destinationDefinitionId;
    public DestinationDefinitionUpdate withDestinationDefinitionId(String destinationDefinitionId) {
        this.destinationDefinitionId = destinationDefinitionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dockerImageTag")
    public String dockerImageTag;
    public DestinationDefinitionUpdate withDockerImageTag(String dockerImageTag) {
        this.dockerImageTag = dockerImageTag;
        return this;
    }
}