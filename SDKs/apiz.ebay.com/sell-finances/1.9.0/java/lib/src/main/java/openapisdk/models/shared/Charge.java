package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Charge
 * This type is used by the charge container, which is an array of one or more charges related to the transfer.
**/
public class Charge {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancellationId")
    public String cancellationId;
    public Charge withCancellationId(String cancellationId) {
        this.cancellationId = cancellationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caseId")
    public String caseId;
    public Charge withCaseId(String caseId) {
        this.caseId = caseId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeNetAmount")
    public Amount chargeNetAmount;
    public Charge withChargeNetAmount(Amount chargeNetAmount) {
        this.chargeNetAmount = chargeNetAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inquiryId")
    public String inquiryId;
    public Charge withInquiryId(String inquiryId) {
        this.inquiryId = inquiryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderId")
    public String orderId;
    public Charge withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentDisputeId")
    public String paymentDisputeId;
    public Charge withPaymentDisputeId(String paymentDisputeId) {
        this.paymentDisputeId = paymentDisputeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refundId")
    public String refundId;
    public Charge withRefundId(String refundId) {
        this.refundId = refundId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnId")
    public String returnId;
    public Charge withReturnId(String returnId) {
        this.returnId = returnId;
        return this;
    }
}