package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeliverConfigSnapshotRequest
 * The input for the <a>DeliverConfigSnapshot</a> action.
**/
public class DeliverConfigSnapshotRequest {
    @JsonProperty("deliveryChannelName")
    public String deliveryChannelName;
    public DeliverConfigSnapshotRequest withDeliveryChannelName(String deliveryChannelName) {
        this.deliveryChannelName = deliveryChannelName;
        return this;
    }
}