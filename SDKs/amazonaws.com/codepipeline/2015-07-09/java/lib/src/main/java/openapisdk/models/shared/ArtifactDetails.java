package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ArtifactDetails
 * Returns information about the details of an artifact.
**/
public class ArtifactDetails {
    @JsonProperty("maximumCount")
    public Long maximumCount;
    public ArtifactDetails withMaximumCount(Long maximumCount) {
        this.maximumCount = maximumCount;
        return this;
    }
    @JsonProperty("minimumCount")
    public Long minimumCount;
    public ArtifactDetails withMinimumCount(Long minimumCount) {
        this.minimumCount = minimumCount;
        return this;
    }
}