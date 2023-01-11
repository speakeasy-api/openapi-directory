package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ShippingFulfillmentDetails
 * This type contains the details for creating a fulfillment for an order.
**/
public class ShippingFulfillmentDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItems")
    public LineItemReference[] lineItems;
    public ShippingFulfillmentDetails withLineItems(LineItemReference[] lineItems) {
        this.lineItems = lineItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippedDate")
    public String shippedDate;
    public ShippingFulfillmentDetails withShippedDate(String shippedDate) {
        this.shippedDate = shippedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingCarrierCode")
    public String shippingCarrierCode;
    public ShippingFulfillmentDetails withShippingCarrierCode(String shippingCarrierCode) {
        this.shippingCarrierCode = shippingCarrierCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackingNumber")
    public String trackingNumber;
    public ShippingFulfillmentDetails withTrackingNumber(String trackingNumber) {
        this.trackingNumber = trackingNumber;
        return this;
    }
}