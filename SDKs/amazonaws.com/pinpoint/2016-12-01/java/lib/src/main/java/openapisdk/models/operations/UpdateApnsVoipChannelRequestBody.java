package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateApnsVoipChannelRequestBody {
    @JsonProperty("APNSVoipChannelRequest")
    public UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest apnsVoipChannelRequest;
    public UpdateApnsVoipChannelRequestBody withApnsVoipChannelRequest(UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest apnsVoipChannelRequest) {
        this.apnsVoipChannelRequest = apnsVoipChannelRequest;
        return this;
    }
}