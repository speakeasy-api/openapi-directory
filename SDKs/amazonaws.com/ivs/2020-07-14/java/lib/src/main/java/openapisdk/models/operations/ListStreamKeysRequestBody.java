package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListStreamKeysRequestBody {
    @JsonProperty("channelArn")
    public String channelArn;
    public ListStreamKeysRequestBody withChannelArn(String channelArn) {
        this.channelArn = channelArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListStreamKeysRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListStreamKeysRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}