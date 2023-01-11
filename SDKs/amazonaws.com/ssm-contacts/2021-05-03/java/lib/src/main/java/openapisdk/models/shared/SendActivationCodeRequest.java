package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SendActivationCodeRequest {
    @JsonProperty("ContactChannelId")
    public String contactChannelId;
    public SendActivationCodeRequest withContactChannelId(String contactChannelId) {
        this.contactChannelId = contactChannelId;
        return this;
    }
}