package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrderRefund
 * This type contains information about a refund issued for an order. This does not include line item level refunds.
**/
public class OrderRefund {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Amount amount;
    public OrderRefund withAmount(Amount amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refundDate")
    public String refundDate;
    public OrderRefund withRefundDate(String refundDate) {
        this.refundDate = refundDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refundId")
    public String refundId;
    public OrderRefund withRefundId(String refundId) {
        this.refundId = refundId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refundReferenceId")
    public String refundReferenceId;
    public OrderRefund withRefundReferenceId(String refundReferenceId) {
        this.refundReferenceId = refundReferenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refundStatus")
    public String refundStatus;
    public OrderRefund withRefundStatus(String refundStatus) {
        this.refundStatus = refundStatus;
        return this;
    }
}