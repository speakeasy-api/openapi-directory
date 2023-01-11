package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EbayFulfillmentProgram
 * This type is used to provide details about an order line item being fulfilled by eBay or an eBay fulfillment partner.
**/
public class EbayFulfillmentProgram {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fulfilledBy")
    public String fulfilledBy;
    public EbayFulfillmentProgram withFulfilledBy(String fulfilledBy) {
        this.fulfilledBy = fulfilledBy;
        return this;
    }
}