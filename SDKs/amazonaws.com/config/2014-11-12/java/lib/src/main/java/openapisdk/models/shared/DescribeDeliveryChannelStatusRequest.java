package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeDeliveryChannelStatusRequest
 * The input for the <a>DeliveryChannelStatus</a> action.
**/
public class DescribeDeliveryChannelStatusRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeliveryChannelNames")
    public String[] deliveryChannelNames;
    public DescribeDeliveryChannelStatusRequest withDeliveryChannelNames(String[] deliveryChannelNames) {
        this.deliveryChannelNames = deliveryChannelNames;
        return this;
    }
}