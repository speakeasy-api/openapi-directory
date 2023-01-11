package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateContactChannelRequest {
    @JsonProperty("ContactId")
    public String contactId;
    public CreateContactChannelRequest withContactId(String contactId) {
        this.contactId = contactId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeferActivation")
    public Boolean deferActivation;
    public CreateContactChannelRequest withDeferActivation(Boolean deferActivation) {
        this.deferActivation = deferActivation;
        return this;
    }
    @JsonProperty("DeliveryAddress")
    public ContactChannelAddress deliveryAddress;
    public CreateContactChannelRequest withDeliveryAddress(ContactChannelAddress deliveryAddress) {
        this.deliveryAddress = deliveryAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdempotencyToken")
    public String idempotencyToken;
    public CreateContactChannelRequest withIdempotencyToken(String idempotencyToken) {
        this.idempotencyToken = idempotencyToken;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateContactChannelRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("Type")
    public ChannelTypeEnum type;
    public CreateContactChannelRequest withType(ChannelTypeEnum type) {
        this.type = type;
        return this;
    }
}