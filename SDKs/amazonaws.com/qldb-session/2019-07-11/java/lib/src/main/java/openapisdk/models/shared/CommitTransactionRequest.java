package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CommitTransactionRequest
 * Contains the details of the transaction to commit.
**/
public class CommitTransactionRequest {
    @JsonProperty("CommitDigest")
    public String commitDigest;
    public CommitTransactionRequest withCommitDigest(String commitDigest) {
        this.commitDigest = commitDigest;
        return this;
    }
    @JsonProperty("TransactionId")
    public String transactionId;
    public CommitTransactionRequest withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}