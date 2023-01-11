package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListChannelsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelSummaries")
    public ChannelSummary[] channelSummaries;
    public ListChannelsResponse withChannelSummaries(ChannelSummary[] channelSummaries) {
        this.channelSummaries = channelSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListChannelsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}