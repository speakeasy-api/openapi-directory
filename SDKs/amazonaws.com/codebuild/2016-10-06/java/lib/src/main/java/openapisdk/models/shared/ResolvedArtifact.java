package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResolvedArtifact
 * Represents a resolved build artifact. A resolved artifact is an artifact that is built and deployed to the destination, such as Amazon S3.
**/
public class ResolvedArtifact {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identifier")
    public String identifier;
    public ResolvedArtifact withIdentifier(String identifier) {
        this.identifier = identifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public ResolvedArtifact withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ArtifactsTypeEnum type;
    public ResolvedArtifact withType(ArtifactsTypeEnum type) {
        this.type = type;
        return this;
    }
}