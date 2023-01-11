package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeSignalingChannelRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChannelARN")
    public String channelARN;
    public DescribeSignalingChannelRequestBody withChannelArn(String channelARN) {
        this.channelARN = channelARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChannelName")
    public String channelName;
    public DescribeSignalingChannelRequestBody withChannelName(String channelName) {
        this.channelName = channelName;
        return this;
    }
}