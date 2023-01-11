package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateSmsChannelRequestBodySmsChannelRequest
 * Specifies the status and settings of the SMS channel for an application.
**/
public class UpdateSmsChannelRequestBodySmsChannelRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enabled")
    public Boolean enabled;
    public UpdateSmsChannelRequestBodySmsChannelRequest withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SenderId")
    public String senderId;
    public UpdateSmsChannelRequestBodySmsChannelRequest withSenderId(String senderId) {
        this.senderId = senderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShortCode")
    public String shortCode;
    public UpdateSmsChannelRequestBodySmsChannelRequest withShortCode(String shortCode) {
        this.shortCode = shortCode;
        return this;
    }
}