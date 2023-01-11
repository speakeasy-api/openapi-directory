package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PaymentSummary
 * This type contains information about the various monetary exchanges that apply to the net balance due for the order.
**/
public class PaymentSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payments")
    public Payment[] payments;
    public PaymentSummary withPayments(Payment[] payments) {
        this.payments = payments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refunds")
    public OrderRefund[] refunds;
    public PaymentSummary withRefunds(OrderRefund[] refunds) {
        this.refunds = refunds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalDueSeller")
    public Amount totalDueSeller;
    public PaymentSummary withTotalDueSeller(Amount totalDueSeller) {
        this.totalDueSeller = totalDueSeller;
        return this;
    }
}