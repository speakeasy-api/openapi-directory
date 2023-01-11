package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSignalingChannelsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChannelInfoList")
    public ChannelInfo[] channelInfoList;
    public ListSignalingChannelsOutput withChannelInfoList(ChannelInfo[] channelInfoList) {
        this.channelInfoList = channelInfoList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListSignalingChannelsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}