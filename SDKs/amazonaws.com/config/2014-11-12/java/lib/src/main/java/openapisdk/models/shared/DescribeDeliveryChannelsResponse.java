package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeDeliveryChannelsResponse
 * The output for the <a>DescribeDeliveryChannels</a> action.
**/
public class DescribeDeliveryChannelsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeliveryChannels")
    public DeliveryChannel[] deliveryChannels;
    public DescribeDeliveryChannelsResponse withDeliveryChannels(DeliveryChannel[] deliveryChannels) {
        this.deliveryChannels = deliveryChannels;
        return this;
    }
}