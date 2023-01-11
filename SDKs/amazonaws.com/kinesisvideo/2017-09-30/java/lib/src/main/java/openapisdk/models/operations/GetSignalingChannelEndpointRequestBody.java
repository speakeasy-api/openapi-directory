package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSignalingChannelEndpointRequestBody {
    @JsonProperty("ChannelARN")
    public String channelARN;
    public GetSignalingChannelEndpointRequestBody withChannelArn(String channelARN) {
        this.channelARN = channelARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SingleMasterChannelEndpointConfiguration")
    public GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration singleMasterChannelEndpointConfiguration;
    public GetSignalingChannelEndpointRequestBody withSingleMasterChannelEndpointConfiguration(GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration singleMasterChannelEndpointConfiguration) {
        this.singleMasterChannelEndpointConfiguration = singleMasterChannelEndpointConfiguration;
        return this;
    }
}