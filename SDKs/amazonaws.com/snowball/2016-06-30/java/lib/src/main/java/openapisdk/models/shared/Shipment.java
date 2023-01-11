package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Shipment
 * The <code>Status</code> and <code>TrackingNumber</code> information for an inbound or outbound shipment.
**/
public class Shipment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public String status;
    public Shipment withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrackingNumber")
    public String trackingNumber;
    public Shipment withTrackingNumber(String trackingNumber) {
        this.trackingNumber = trackingNumber;
        return this;
    }
}