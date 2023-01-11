package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetContactChannelResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ActivationStatus")
    public ActivationStatusEnum activationStatus;
    public GetContactChannelResult withActivationStatus(ActivationStatusEnum activationStatus) {
        this.activationStatus = activationStatus;
        return this;
    }
    @JsonProperty("ContactArn")
    public String contactArn;
    public GetContactChannelResult withContactArn(String contactArn) {
        this.contactArn = contactArn;
        return this;
    }
    @JsonProperty("ContactChannelArn")
    public String contactChannelArn;
    public GetContactChannelResult withContactChannelArn(String contactChannelArn) {
        this.contactChannelArn = contactChannelArn;
        return this;
    }
    @JsonProperty("DeliveryAddress")
    public ContactChannelAddress deliveryAddress;
    public GetContactChannelResult withDeliveryAddress(ContactChannelAddress deliveryAddress) {
        this.deliveryAddress = deliveryAddress;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public GetContactChannelResult withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("Type")
    public ChannelTypeEnum type;
    public GetContactChannelResult withType(ChannelTypeEnum type) {
        this.type = type;
        return this;
    }
}