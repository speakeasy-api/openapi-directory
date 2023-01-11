package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FailedRemediationBatch
 * List of each of the failed remediations with specific reasons.
**/
public class FailedRemediationBatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailedItems")
    public RemediationConfiguration[] failedItems;
    public FailedRemediationBatch withFailedItems(RemediationConfiguration[] failedItems) {
        this.failedItems = failedItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailureMessage")
    public String failureMessage;
    public FailedRemediationBatch withFailureMessage(String failureMessage) {
        this.failureMessage = failureMessage;
        return this;
    }
}