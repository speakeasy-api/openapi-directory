package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateEmailChannelRequestBody {
    @JsonProperty("EmailChannelRequest")
    public UpdateEmailChannelRequestBodyEmailChannelRequest emailChannelRequest;
    public UpdateEmailChannelRequestBody withEmailChannelRequest(UpdateEmailChannelRequestBodyEmailChannelRequest emailChannelRequest) {
        this.emailChannelRequest = emailChannelRequest;
        return this;
    }
}