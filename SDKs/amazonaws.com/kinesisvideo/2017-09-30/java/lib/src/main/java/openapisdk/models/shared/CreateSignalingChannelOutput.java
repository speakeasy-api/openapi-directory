package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateSignalingChannelOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChannelARN")
    public String channelARN;
    public CreateSignalingChannelOutput withChannelArn(String channelARN) {
        this.channelARN = channelARN;
        return this;
    }
}