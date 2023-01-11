package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteSmsChannelResponse {
    @JsonProperty("SMSChannelResponse")
    public SmsChannelResponse smsChannelResponse;
    public DeleteSmsChannelResponse withSmsChannelResponse(SmsChannelResponse smsChannelResponse) {
        this.smsChannelResponse = smsChannelResponse;
        return this;
    }
}