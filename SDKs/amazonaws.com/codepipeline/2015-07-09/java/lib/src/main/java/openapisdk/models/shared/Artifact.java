package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Artifact
 * Represents information about an artifact that is worked on by actions in the pipeline.
**/
public class Artifact {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public ArtifactLocation location;
    public Artifact withLocation(ArtifactLocation location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Artifact withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revision")
    public String revision;
    public Artifact withRevision(String revision) {
        this.revision = revision;
        return this;
    }
}