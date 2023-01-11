package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InfoFromBuyer
 * This container is returned if the buyer is returning one or more line items in an order that is associated with the payment dispute, and that buyer has provided return shipping tracking information and/or a note about the return.
**/
public class InfoFromBuyer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public InfoFromBuyer withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnShipmentTracking")
    public TrackingInfo[] returnShipmentTracking;
    public InfoFromBuyer withReturnShipmentTracking(TrackingInfo[] returnShipmentTracking) {
        this.returnShipmentTracking = returnShipmentTracking;
        return this;
    }
}