package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TrackingInfo
 * This type is used by the shipmentTracking array returned under the evidence container if the seller has provided shipment tracking information as evidence to support PROOF_OF_DELIVERY for an INR-related payment dispute.
**/
public class TrackingInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipmentTrackingNumber")
    public String shipmentTrackingNumber;
    public TrackingInfo withShipmentTrackingNumber(String shipmentTrackingNumber) {
        this.shipmentTrackingNumber = shipmentTrackingNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingCarrierCode")
    public String shippingCarrierCode;
    public TrackingInfo withShippingCarrierCode(String shippingCarrierCode) {
        this.shippingCarrierCode = shippingCarrierCode;
        return this;
    }
}