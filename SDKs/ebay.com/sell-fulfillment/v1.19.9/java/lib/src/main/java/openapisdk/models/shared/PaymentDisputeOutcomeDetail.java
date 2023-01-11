package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PaymentDisputeOutcomeDetail
 * This type is used by the resolution container that is returned for payment disputes that have been resolved.
**/
public class PaymentDisputeOutcomeDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fees")
    public SimpleAmount fees;
    public PaymentDisputeOutcomeDetail withFees(SimpleAmount fees) {
        this.fees = fees;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protectedAmount")
    public SimpleAmount protectedAmount;
    public PaymentDisputeOutcomeDetail withProtectedAmount(SimpleAmount protectedAmount) {
        this.protectedAmount = protectedAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protectionStatus")
    public String protectionStatus;
    public PaymentDisputeOutcomeDetail withProtectionStatus(String protectionStatus) {
        this.protectionStatus = protectionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasonForClosure")
    public String reasonForClosure;
    public PaymentDisputeOutcomeDetail withReasonForClosure(String reasonForClosure) {
        this.reasonForClosure = reasonForClosure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recoupAmount")
    public SimpleAmount recoupAmount;
    public PaymentDisputeOutcomeDetail withRecoupAmount(SimpleAmount recoupAmount) {
        this.recoupAmount = recoupAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalFeeCredit")
    public SimpleAmount totalFeeCredit;
    public PaymentDisputeOutcomeDetail withTotalFeeCredit(SimpleAmount totalFeeCredit) {
        this.totalFeeCredit = totalFeeCredit;
        return this;
    }
}