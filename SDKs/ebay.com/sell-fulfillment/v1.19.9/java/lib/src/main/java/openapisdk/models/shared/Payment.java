package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Payment
 * This type is used to provide details about the seller payments for an order.
**/
public class Payment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Amount amount;
    public Payment withAmount(Amount amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentDate")
    public String paymentDate;
    public Payment withPaymentDate(String paymentDate) {
        this.paymentDate = paymentDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentHolds")
    public PaymentHold[] paymentHolds;
    public Payment withPaymentHolds(PaymentHold[] paymentHolds) {
        this.paymentHolds = paymentHolds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMethod")
    public String paymentMethod;
    public Payment withPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentReferenceId")
    public String paymentReferenceId;
    public Payment withPaymentReferenceId(String paymentReferenceId) {
        this.paymentReferenceId = paymentReferenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentStatus")
    public String paymentStatus;
    public Payment withPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
        return this;
    }
}