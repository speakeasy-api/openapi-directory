package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateApnsChannelRequestBody {
    @JsonProperty("APNSChannelRequest")
    public UpdateApnsChannelRequestBodyApnsChannelRequest apnsChannelRequest;
    public UpdateApnsChannelRequestBody withApnsChannelRequest(UpdateApnsChannelRequestBodyApnsChannelRequest apnsChannelRequest) {
        this.apnsChannelRequest = apnsChannelRequest;
        return this;
    }
}