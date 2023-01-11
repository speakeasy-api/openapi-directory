package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateContactChannelResult {
    @JsonProperty("ContactChannelArn")
    public String contactChannelArn;
    public CreateContactChannelResult withContactChannelArn(String contactChannelArn) {
        this.contactChannelArn = contactChannelArn;
        return this;
    }
}