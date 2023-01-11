package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetStreamRequestBody {
    @JsonProperty("channelArn")
    public String channelArn;
    public GetStreamRequestBody withChannelArn(String channelArn) {
        this.channelArn = channelArn;
        return this;
    }
}