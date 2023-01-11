package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeactivateContactChannelRequest {
    @JsonProperty("ContactChannelId")
    public String contactChannelId;
    public DeactivateContactChannelRequest withContactChannelId(String contactChannelId) {
        this.contactChannelId = contactChannelId;
        return this;
    }
}