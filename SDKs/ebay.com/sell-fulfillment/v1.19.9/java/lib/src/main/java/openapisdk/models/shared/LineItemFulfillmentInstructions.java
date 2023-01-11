package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LineItemFulfillmentInstructions
 * This type contains the specifications for processing the fulfillment of a line item, including the handling window and the delivery window. These fields provide guidance for eBay Guaranteed Delivery as well as for non-guaranteed delivery.
**/
public class LineItemFulfillmentInstructions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guaranteedDelivery")
    public Boolean guaranteedDelivery;
    public LineItemFulfillmentInstructions withGuaranteedDelivery(Boolean guaranteedDelivery) {
        this.guaranteedDelivery = guaranteedDelivery;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxEstimatedDeliveryDate")
    public String maxEstimatedDeliveryDate;
    public LineItemFulfillmentInstructions withMaxEstimatedDeliveryDate(String maxEstimatedDeliveryDate) {
        this.maxEstimatedDeliveryDate = maxEstimatedDeliveryDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minEstimatedDeliveryDate")
    public String minEstimatedDeliveryDate;
    public LineItemFulfillmentInstructions withMinEstimatedDeliveryDate(String minEstimatedDeliveryDate) {
        this.minEstimatedDeliveryDate = minEstimatedDeliveryDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipByDate")
    public String shipByDate;
    public LineItemFulfillmentInstructions withShipByDate(String shipByDate) {
        this.shipByDate = shipByDate;
        return this;
    }
}