package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSignalingChannelRequestBody {
    @JsonProperty("ChannelARN")
    public String channelARN;
    public UpdateSignalingChannelRequestBody withChannelArn(String channelARN) {
        this.channelARN = channelARN;
        return this;
    }
    @JsonProperty("CurrentVersion")
    public String currentVersion;
    public UpdateSignalingChannelRequestBody withCurrentVersion(String currentVersion) {
        this.currentVersion = currentVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SingleMasterConfiguration")
    public UpdateSignalingChannelRequestBodySingleMasterConfiguration singleMasterConfiguration;
    public UpdateSignalingChannelRequestBody withSingleMasterConfiguration(UpdateSignalingChannelRequestBodySingleMasterConfiguration singleMasterConfiguration) {
        this.singleMasterConfiguration = singleMasterConfiguration;
        return this;
    }
}