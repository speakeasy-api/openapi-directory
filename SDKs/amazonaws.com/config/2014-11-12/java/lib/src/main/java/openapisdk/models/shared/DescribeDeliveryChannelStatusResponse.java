package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeDeliveryChannelStatusResponse
 * The output for the <a>DescribeDeliveryChannelStatus</a> action.
**/
public class DescribeDeliveryChannelStatusResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeliveryChannelsStatus")
    public DeliveryChannelStatus[] deliveryChannelsStatus;
    public DescribeDeliveryChannelStatusResponse withDeliveryChannelsStatus(DeliveryChannelStatus[] deliveryChannelsStatus) {
        this.deliveryChannelsStatus = deliveryChannelsStatus;
        return this;
    }
}