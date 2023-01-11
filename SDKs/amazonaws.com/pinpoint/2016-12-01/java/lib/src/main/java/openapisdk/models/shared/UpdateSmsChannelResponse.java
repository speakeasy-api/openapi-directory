package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateSmsChannelResponse {
    @JsonProperty("SMSChannelResponse")
    public SmsChannelResponse smsChannelResponse;
    public UpdateSmsChannelResponse withSmsChannelResponse(SmsChannelResponse smsChannelResponse) {
        this.smsChannelResponse = smsChannelResponse;
        return this;
    }
}