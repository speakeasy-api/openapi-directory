package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrderLineItems
 * This type is used by the lineItems array that is used to identify one or more line items in the order with the payment dispute.
**/
public class OrderLineItems {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemId")
    public String itemId;
    public OrderLineItems withItemId(String itemId) {
        this.itemId = itemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItemId")
    public String lineItemId;
    public OrderLineItems withLineItemId(String lineItemId) {
        this.lineItemId = lineItemId;
        return this;
    }
}