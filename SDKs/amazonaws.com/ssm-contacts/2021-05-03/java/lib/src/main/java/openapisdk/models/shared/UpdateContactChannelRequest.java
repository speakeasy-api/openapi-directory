package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateContactChannelRequest {
    @JsonProperty("ContactChannelId")
    public String contactChannelId;
    public UpdateContactChannelRequest withContactChannelId(String contactChannelId) {
        this.contactChannelId = contactChannelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeliveryAddress")
    public ContactChannelAddress deliveryAddress;
    public UpdateContactChannelRequest withDeliveryAddress(ContactChannelAddress deliveryAddress) {
        this.deliveryAddress = deliveryAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public UpdateContactChannelRequest withName(String name) {
        this.name = name;
        return this;
    }
}