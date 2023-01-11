package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartTransactionResult
 * Contains the details of the started transaction.
**/
public class StartTransactionResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimingInformation")
    public TimingInformation timingInformation;
    public StartTransactionResult withTimingInformation(TimingInformation timingInformation) {
        this.timingInformation = timingInformation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TransactionId")
    public String transactionId;
    public StartTransactionResult withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}