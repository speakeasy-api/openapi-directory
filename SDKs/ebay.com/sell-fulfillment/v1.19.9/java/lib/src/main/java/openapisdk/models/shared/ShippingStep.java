package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ShippingStep
 * This type contains shipping information for a fulfillment, including the shipping carrier, the shipping service option, the shipment destination, and the Global Shipping Program reference ID.
**/
public class ShippingStep {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipTo")
    public ExtendedContact shipTo;
    public ShippingStep withShipTo(ExtendedContact shipTo) {
        this.shipTo = shipTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipToReferenceId")
    public String shipToReferenceId;
    public ShippingStep withShipToReferenceId(String shipToReferenceId) {
        this.shipToReferenceId = shipToReferenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingCarrierCode")
    public String shippingCarrierCode;
    public ShippingStep withShippingCarrierCode(String shippingCarrierCode) {
        this.shippingCarrierCode = shippingCarrierCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingServiceCode")
    public String shippingServiceCode;
    public ShippingStep withShippingServiceCode(String shippingServiceCode) {
        this.shippingServiceCode = shippingServiceCode;
        return this;
    }
}