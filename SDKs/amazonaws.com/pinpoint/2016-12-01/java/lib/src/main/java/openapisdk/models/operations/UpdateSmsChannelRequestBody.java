package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateSmsChannelRequestBody {
    @JsonProperty("SMSChannelRequest")
    public UpdateSmsChannelRequestBodySmsChannelRequest smsChannelRequest;
    public UpdateSmsChannelRequestBody withSmsChannelRequest(UpdateSmsChannelRequestBodySmsChannelRequest smsChannelRequest) {
        this.smsChannelRequest = smsChannelRequest;
        return this;
    }
}