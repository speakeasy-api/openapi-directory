package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CommitTransactionResult
 * Contains the details of the committed transaction.
**/
public class CommitTransactionResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CommitDigest")
    public String commitDigest;
    public CommitTransactionResult withCommitDigest(String commitDigest) {
        this.commitDigest = commitDigest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConsumedIOs")
    public IoUsage consumedIOs;
    public CommitTransactionResult withConsumedIOs(IoUsage consumedIOs) {
        this.consumedIOs = consumedIOs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimingInformation")
    public TimingInformation timingInformation;
    public CommitTransactionResult withTimingInformation(TimingInformation timingInformation) {
        this.timingInformation = timingInformation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TransactionId")
    public String transactionId;
    public CommitTransactionResult withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}