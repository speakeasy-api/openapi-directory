package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IssueRefundRequest
 * The base type used by the request payload of the issueRefund method.
**/
public class IssueRefundRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public IssueRefundRequest withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderLevelRefundAmount")
    public SimpleAmount orderLevelRefundAmount;
    public IssueRefundRequest withOrderLevelRefundAmount(SimpleAmount orderLevelRefundAmount) {
        this.orderLevelRefundAmount = orderLevelRefundAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasonForRefund")
    public String reasonForRefund;
    public IssueRefundRequest withReasonForRefund(String reasonForRefund) {
        this.reasonForRefund = reasonForRefund;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refundItems")
    public RefundItem[] refundItems;
    public IssueRefundRequest withRefundItems(RefundItem[] refundItems) {
        this.refundItems = refundItems;
        return this;
    }
}