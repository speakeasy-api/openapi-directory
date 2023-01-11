package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PayoutSummaryResponse
 * This type is the base response type of the getPayoutSummary method, and contains the total count of seller payouts (that match the input criteria), the total count of monetary transactions (order payment, buyer refunds, or seller credits) associated with those payouts, and the total value of those seller payouts.
**/
public class PayoutSummaryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Amount amount;
    public PayoutSummaryResponse withAmount(Amount amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payoutCount")
    public Integer payoutCount;
    public PayoutSummaryResponse withPayoutCount(Integer payoutCount) {
        this.payoutCount = payoutCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionCount")
    public Integer transactionCount;
    public PayoutSummaryResponse withTransactionCount(Integer transactionCount) {
        this.transactionCount = transactionCount;
        return this;
    }
}