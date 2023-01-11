package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopStreamRequestBody {
    @JsonProperty("channelArn")
    public String channelArn;
    public StopStreamRequestBody withChannelArn(String channelArn) {
        this.channelArn = channelArn;
        return this;
    }
}