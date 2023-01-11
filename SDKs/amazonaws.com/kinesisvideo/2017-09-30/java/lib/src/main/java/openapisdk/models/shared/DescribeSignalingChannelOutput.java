package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeSignalingChannelOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChannelInfo")
    public ChannelInfo channelInfo;
    public DescribeSignalingChannelOutput withChannelInfo(ChannelInfo channelInfo) {
        this.channelInfo = channelInfo;
        return this;
    }
}