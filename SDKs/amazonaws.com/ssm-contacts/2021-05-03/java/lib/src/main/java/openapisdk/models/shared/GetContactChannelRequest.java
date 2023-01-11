package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetContactChannelRequest {
    @JsonProperty("ContactChannelId")
    public String contactChannelId;
    public GetContactChannelRequest withContactChannelId(String contactChannelId) {
        this.contactChannelId = contactChannelId;
        return this;
    }
}