package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LineItemRefund
 * This type contains refund information for a line item.
**/
public class LineItemRefund {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Amount amount;
    public LineItemRefund withAmount(Amount amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refundDate")
    public String refundDate;
    public LineItemRefund withRefundDate(String refundDate) {
        this.refundDate = refundDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refundId")
    public String refundId;
    public LineItemRefund withRefundId(String refundId) {
        this.refundId = refundId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refundReferenceId")
    public String refundReferenceId;
    public LineItemRefund withRefundReferenceId(String refundReferenceId) {
        this.refundReferenceId = refundReferenceId;
        return this;
    }
}