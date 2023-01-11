package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeDeliveryChannelsRequest
 * The input for the <a>DescribeDeliveryChannels</a> action.
**/
public class DescribeDeliveryChannelsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeliveryChannelNames")
    public String[] deliveryChannelNames;
    public DescribeDeliveryChannelsRequest withDeliveryChannelNames(String[] deliveryChannelNames) {
        this.deliveryChannelNames = deliveryChannelNames;
        return this;
    }
}