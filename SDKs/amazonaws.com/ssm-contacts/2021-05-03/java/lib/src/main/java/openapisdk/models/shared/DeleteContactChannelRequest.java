package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteContactChannelRequest {
    @JsonProperty("ContactChannelId")
    public String contactChannelId;
    public DeleteContactChannelRequest withContactChannelId(String contactChannelId) {
        this.contactChannelId = contactChannelId;
        return this;
    }
}