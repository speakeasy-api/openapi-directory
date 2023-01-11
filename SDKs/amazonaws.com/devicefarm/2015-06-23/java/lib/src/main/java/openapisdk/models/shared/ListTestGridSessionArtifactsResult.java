package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTestGridSessionArtifactsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artifacts")
    public TestGridSessionArtifact[] artifacts;
    public ListTestGridSessionArtifactsResult withArtifacts(TestGridSessionArtifact[] artifacts) {
        this.artifacts = artifacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListTestGridSessionArtifactsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}