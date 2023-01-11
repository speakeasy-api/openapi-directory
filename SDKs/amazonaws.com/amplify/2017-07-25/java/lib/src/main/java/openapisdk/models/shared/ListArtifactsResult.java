package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListArtifactsResult
 *  The result structure for the list artifacts request. 
**/
public class ListArtifactsResult {
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