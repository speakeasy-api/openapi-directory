package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PutDeliveryChannelRequest
 * The input for the <a>PutDeliveryChannel</a> action.
**/
public class PutDeliveryChannelRequest {
    @JsonProperty("DeliveryChannel")
    public DeliveryChannel deliveryChannel;
    public PutDeliveryChannelRequest withDeliveryChannel(DeliveryChannel deliveryChannel) {
        this.deliveryChannel = deliveryChannel;
        return this;
    }
}