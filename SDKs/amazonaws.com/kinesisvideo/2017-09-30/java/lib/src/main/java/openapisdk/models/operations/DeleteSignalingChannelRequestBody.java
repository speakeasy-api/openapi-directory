package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteSignalingChannelRequestBody {
    @JsonProperty("ChannelARN")
    public String channelARN;
    public DeleteSignalingChannelRequestBody withChannelArn(String channelARN) {
        this.channelARN = channelARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CurrentVersion")
    public String currentVersion;
    public DeleteSignalingChannelRequestBody withCurrentVersion(String currentVersion) {
        this.currentVersion = currentVersion;
        return this;
    }
}