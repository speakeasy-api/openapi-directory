package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateSignalingChannelRequestBody {
    @JsonProperty("ChannelName")
    public String channelName;
    public CreateSignalingChannelRequestBody withChannelName(String channelName) {
        this.channelName = channelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChannelType")
    public CreateSignalingChannelRequestBodyChannelTypeEnum channelType;
    public CreateSignalingChannelRequestBody withChannelType(CreateSignalingChannelRequestBodyChannelTypeEnum channelType) {
        this.channelType = channelType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SingleMasterConfiguration")
    public CreateSignalingChannelRequestBodySingleMasterConfiguration singleMasterConfiguration;
    public CreateSignalingChannelRequestBody withSingleMasterConfiguration(CreateSignalingChannelRequestBodySingleMasterConfiguration singleMasterConfiguration) {
        this.singleMasterConfiguration = singleMasterConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public openapisdk.models.shared.Tag[] tags;
    public CreateSignalingChannelRequestBody withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
}