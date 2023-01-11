package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PaymentDisputeSummary
 * This type is used by each payment dispute that is returned with the getPaymentDisputeSummaries method.
**/
public class PaymentDisputeSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public SimpleAmount amount;
    public PaymentDisputeSummary withAmount(SimpleAmount amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyerUsername")
    public String buyerUsername;
    public PaymentDisputeSummary withBuyerUsername(String buyerUsername) {
        this.buyerUsername = buyerUsername;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("closedDate")
    public String closedDate;
    public PaymentDisputeSummary withClosedDate(String closedDate) {
        this.closedDate = closedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("openDate")
    public String openDate;
    public PaymentDisputeSummary withOpenDate(String openDate) {
        this.openDate = openDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderId")
    public String orderId;
    public PaymentDisputeSummary withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentDisputeId")
    public String paymentDisputeId;
    public PaymentDisputeSummary withPaymentDisputeId(String paymentDisputeId) {
        this.paymentDisputeId = paymentDisputeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentDisputeStatus")
    public String paymentDisputeStatus;
    public PaymentDisputeSummary withPaymentDisputeStatus(String paymentDisputeStatus) {
        this.paymentDisputeStatus = paymentDisputeStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public PaymentDisputeSummary withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("respondByDate")
    public String respondByDate;
    public PaymentDisputeSummary withRespondByDate(String respondByDate) {
        this.respondByDate = respondByDate;
        return this;
    }
}