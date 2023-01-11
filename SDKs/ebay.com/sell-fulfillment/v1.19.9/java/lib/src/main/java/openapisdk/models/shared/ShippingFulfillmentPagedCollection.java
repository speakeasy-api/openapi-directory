package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ShippingFulfillmentPagedCollection
 * This type contains the specifications for the entire collection of shipping fulfillments that are associated with the order specified by a getShippingFulfillments call. The fulfillments container returns an array of all the fulfillments in the collection.
**/
public class ShippingFulfillmentPagedCollection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fulfillments")
    public ShippingFulfillment[] fulfillments;
    public ShippingFulfillmentPagedCollection withFulfillments(ShippingFulfillment[] fulfillments) {
        this.fulfillments = fulfillments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Integer total;
    public ShippingFulfillmentPagedCollection withTotal(Integer total) {
        this.total = total;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warnings")
    public Error[] warnings;
    public ShippingFulfillmentPagedCollection withWarnings(Error[] warnings) {
        this.warnings = warnings;
        return this;
    }
}