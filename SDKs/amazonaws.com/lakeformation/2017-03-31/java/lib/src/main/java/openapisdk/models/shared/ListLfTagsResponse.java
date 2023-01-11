package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListLfTagsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LFTags")
    public LfTagPair[] lfTags;
    public ListLfTagsResponse withLfTags(LfTagPair[] lfTags) {
        this.lfTags = lfTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListLfTagsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}