package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RefundItem
 * This type is used if the seller is issuing a refund for one or more individual order line items in a multiple line item order. Otherwise, the seller just uses the orderLevelRefundAmount container to specify the amount of the refund for the entire order.
**/
public class RefundItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legacyReference")
    public LegacyReference legacyReference;
    public RefundItem withLegacyReference(LegacyReference legacyReference) {
        this.legacyReference = legacyReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItemId")
    public String lineItemId;
    public RefundItem withLineItemId(String lineItemId) {
        this.lineItemId = lineItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refundAmount")
    public SimpleAmount refundAmount;
    public RefundItem withRefundAmount(SimpleAmount refundAmount) {
        this.refundAmount = refundAmount;
        return this;
    }
}