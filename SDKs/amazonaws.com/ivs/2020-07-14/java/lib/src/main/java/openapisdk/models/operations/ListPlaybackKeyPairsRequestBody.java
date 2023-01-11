package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPlaybackKeyPairsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListPlaybackKeyPairsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListPlaybackKeyPairsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}