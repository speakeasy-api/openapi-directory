package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteDeliveryChannelRequest
 * The input for the <a>DeleteDeliveryChannel</a> action. The action accepts the following data, in JSON format. 
**/
public class DeleteDeliveryChannelRequest {
    @JsonProperty("DeliveryChannelName")
    public String deliveryChannelName;
    public DeleteDeliveryChannelRequest withDeliveryChannelName(String deliveryChannelName) {
        this.deliveryChannelName = deliveryChannelName;
        return this;
    }
}