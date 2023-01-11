package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Refund
 * This is the base type of the issueRefund response payload. As long as the issueRefund method does not trigger an error, a response payload will be returned.
**/
public class Refund {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refundId")
    public String refundId;
    public Refund withRefundId(String refundId) {
        this.refundId = refundId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refundStatus")
    public String refundStatus;
    public Refund withRefundStatus(String refundStatus) {
        this.refundStatus = refundStatus;
        return this;
    }
}