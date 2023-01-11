package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Payout
 * This type is used to express the details of one seller payout that is returned with the getPayout or getPayouts methods.
**/
public class Payout {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Amount amount;
    public Payout withAmount(Amount amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bankReference")
    public String bankReference;
    public Payout withBankReference(String bankReference) {
        this.bankReference = bankReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastAttemptedPayoutDate")
    public String lastAttemptedPayoutDate;
    public Payout withLastAttemptedPayoutDate(String lastAttemptedPayoutDate) {
        this.lastAttemptedPayoutDate = lastAttemptedPayoutDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payoutDate")
    public String payoutDate;
    public Payout withPayoutDate(String payoutDate) {
        this.payoutDate = payoutDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payoutId")
    public String payoutId;
    public Payout withPayoutId(String payoutId) {
        this.payoutId = payoutId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payoutInstrument")
    public PayoutInstrument payoutInstrument;
    public Payout withPayoutInstrument(PayoutInstrument payoutInstrument) {
        this.payoutInstrument = payoutInstrument;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payoutMemo")
    public String payoutMemo;
    public Payout withPayoutMemo(String payoutMemo) {
        this.payoutMemo = payoutMemo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payoutStatus")
    public String payoutStatus;
    public Payout withPayoutStatus(String payoutStatus) {
        this.payoutStatus = payoutStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payoutStatusDescription")
    public String payoutStatusDescription;
    public Payout withPayoutStatusDescription(String payoutStatusDescription) {
        this.payoutStatusDescription = payoutStatusDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionCount")
    public Integer transactionCount;
    public Payout withTransactionCount(Integer transactionCount) {
        this.transactionCount = transactionCount;
        return this;
    }
}