package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrderLineItem
 * This type is used to show the fees that are deducted from a seller payout for each line item in an order.
**/
public class OrderLineItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feeBasisAmount")
    public Amount feeBasisAmount;
    public OrderLineItem withFeeBasisAmount(Amount feeBasisAmount) {
        this.feeBasisAmount = feeBasisAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItemId")
    public String lineItemId;
    public OrderLineItem withLineItemId(String lineItemId) {
        this.lineItemId = lineItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketplaceFees")
    public Fee[] marketplaceFees;
    public OrderLineItem withMarketplaceFees(Fee[] marketplaceFees) {
        this.marketplaceFees = marketplaceFees;
        return this;
    }
}