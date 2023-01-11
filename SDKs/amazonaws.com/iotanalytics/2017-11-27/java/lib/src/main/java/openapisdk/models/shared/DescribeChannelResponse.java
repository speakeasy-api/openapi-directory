package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeChannelResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel")
    public Channel channel;
    public DescribeChannelResponse withChannel(Channel channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statistics")
    public ChannelStatistics statistics;
    public DescribeChannelResponse withStatistics(ChannelStatistics statistics) {
        this.statistics = statistics;
        return this;
    }
}