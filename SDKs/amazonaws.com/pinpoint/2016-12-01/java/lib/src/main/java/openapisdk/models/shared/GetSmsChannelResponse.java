package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetSmsChannelResponse {
    @JsonProperty("SMSChannelResponse")
    public SmsChannelResponse smsChannelResponse;
    public GetSmsChannelResponse withSmsChannelResponse(SmsChannelResponse smsChannelResponse) {
        this.smsChannelResponse = smsChannelResponse;
        return this;
    }
}