package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSignalingChannelsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChannelNameCondition")
    public ListSignalingChannelsRequestBodyChannelNameCondition channelNameCondition;
    public ListSignalingChannelsRequestBody withChannelNameCondition(ListSignalingChannelsRequestBodyChannelNameCondition channelNameCondition) {
        this.channelNameCondition = channelNameCondition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListSignalingChannelsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListSignalingChannelsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}