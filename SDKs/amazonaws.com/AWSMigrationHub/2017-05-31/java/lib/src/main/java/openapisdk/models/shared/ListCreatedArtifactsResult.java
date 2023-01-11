package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCreatedArtifactsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedArtifactList")
    public CreatedArtifact[] createdArtifactList;
    public ListCreatedArtifactsResult withCreatedArtifactList(CreatedArtifact[] createdArtifactList) {
        this.createdArtifactList = createdArtifactList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListCreatedArtifactsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}