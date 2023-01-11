package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * InputArtifact
 * Represents information about an artifact to be worked on, such as a test or build artifact.
**/
public class InputArtifact {
    @JsonProperty("name")
    public String name;
    public InputArtifact withName(String name) {
        this.name = name;
        return this;
    }
}