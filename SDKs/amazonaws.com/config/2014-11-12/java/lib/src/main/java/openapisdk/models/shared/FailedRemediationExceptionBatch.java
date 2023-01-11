package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FailedRemediationExceptionBatch
 * List of each of the failed remediation exceptions with specific reasons.
**/
public class FailedRemediationExceptionBatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailedItems")
    public RemediationException[] failedItems;
    public FailedRemediationExceptionBatch withFailedItems(RemediationException[] failedItems) {
        this.failedItems = failedItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailureMessage")
    public String failureMessage;
    public FailedRemediationExceptionBatch withFailureMessage(String failureMessage) {
        this.failureMessage = failureMessage;
        return this;
    }
}