package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ArtifactSearchResults
 * Describes the response received when searching for artifacts.
**/
public class ArtifactSearchResults {
    @JsonProperty("artifacts")
    public SearchedArtifact[] artifacts;
    public ArtifactSearchResults withArtifacts(SearchedArtifact[] artifacts) {
        this.artifacts = artifacts;
        return this;
    }
    @JsonProperty("count")
    public Long count;
    public ArtifactSearchResults withCount(Long count) {
        this.count = count;
        return this;
    }
}