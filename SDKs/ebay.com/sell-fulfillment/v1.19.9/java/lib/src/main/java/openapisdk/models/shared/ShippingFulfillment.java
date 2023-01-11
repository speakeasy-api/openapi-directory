package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ShippingFulfillment
 * This type contains the complete details of an existing fulfillment for an order.
**/
public class ShippingFulfillment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fulfillmentId")
    public String fulfillmentId;
    public ShippingFulfillment withFulfillmentId(String fulfillmentId) {
        this.fulfillmentId = fulfillmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItems")
    public LineItemReference[] lineItems;
    public ShippingFulfillment withLineItems(LineItemReference[] lineItems) {
        this.lineItems = lineItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipmentTrackingNumber")
    public String shipmentTrackingNumber;
    public ShippingFulfillment withShipmentTrackingNumber(String shipmentTrackingNumber) {
        this.shipmentTrackingNumber = shipmentTrackingNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippedDate")
    public String shippedDate;
    public ShippingFulfillment withShippedDate(String shippedDate) {
        this.shippedDate = shippedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingCarrierCode")
    public String shippingCarrierCode;
    public ShippingFulfillment withShippingCarrierCode(String shippingCarrierCode) {
        this.shippingCarrierCode = shippingCarrierCode;
        return this;
    }
}