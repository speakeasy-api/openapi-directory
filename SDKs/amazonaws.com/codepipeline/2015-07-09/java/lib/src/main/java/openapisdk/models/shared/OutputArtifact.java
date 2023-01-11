package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OutputArtifact
 * Represents information about the output of an action.
**/
public class OutputArtifact {
    @JsonProperty("name")
    public String name;
    public OutputArtifact withName(String name) {
        this.name = name;
        return this;
    }
}