package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OnlineSzamlaStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messages")
    public OnlineSzamlaStatusMessage[] messages;
    public OnlineSzamlaStatus withMessages(OnlineSzamlaStatusMessage[] messages) {
        this.messages = messages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public OnlineSzamlaStatus withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transaction_id")
    public String transactionId;
    public OnlineSzamlaStatus withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}