package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SourceDefinitionUpdate
 * Update the SourceDefinition. Currently, the only allowed attribute to update is the default docker image version.
**/
public class SourceDefinitionUpdate {
    @JsonProperty("dockerImageTag")
    public String dockerImageTag;
    public SourceDefinitionUpdate withDockerImageTag(String dockerImageTag) {
        this.dockerImageTag = dockerImageTag;
        return this;
    }
    @JsonProperty("sourceDefinitionId")
    public String sourceDefinitionId;
    public SourceDefinitionUpdate withSourceDefinitionId(String sourceDefinitionId) {
        this.sourceDefinitionId = sourceDefinitionId;
        return this;
    }
}