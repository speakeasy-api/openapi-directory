package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListArtifactsResult
 * Represents the result of a list artifacts operation.
**/
public class ListArtifactsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artifacts")
    public Artifact[] artifacts;
    public ListArtifactsResult withArtifacts(Artifact[] artifacts) {
        this.artifacts = artifacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListArtifactsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}